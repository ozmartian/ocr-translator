#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import atexit
import os
import signal
import sys
import warnings

from glob import glob
from http.server import HTTPServer, SimpleHTTPRequestHandler
from random import randint
from threading import Thread
from time import strftime
from urllib.parse import urlencode

from PyQt5.QtCore import QPoint, QRect, QSize, Qt, QTimer, QUrl
from PyQt5.QtGui import (QBrush, QColor, QFont, QIcon, QPainter, QPen, QPixmap,
                         QStaticText)
from PyQt5.QtWidgets import (QApplication, QDialog, QLabel, QRubberBand,
                         QVBoxLayout, QWidget, qApp)

try:
    from PyQt5.QtWebKitWidgets import QWebView as QWebEngineView
except ImportError:
    from PyQt5.QtWebEngineWidgets import QWebEngineView

warnings.filterwarnings("ignore")
signal.signal(signal.SIGINT, signal.SIG_DFL)
signal.signal(signal.SIGTERM, signal.SIG_DFL)


class OCRHTTPHandler(SimpleHTTPRequestHandler):
    def __init__(self, *arg, **kwargs):
        super(OCRHTTPHandler, self).__init__(*arg, **kwargs)
        self.protocol_version = "HTTP/1.0"

    def log_message(self, format, *args):
        return


class Selector(QRubberBand):
    def __init__(self, *arg, **kwargs):
        super(Selector, self).__init__(*arg, **kwargs)

    def paintEvent(self, ev):
        pen = QPen()
        pen.setStyle(Qt.DotLine)
        pen.setWidth(2)
        pen.setColor(QColor(Qt.white))
        brush = QBrush()
        brush.setStyle(Qt.SolidPattern)
        brush.setColor(QColor(0, 0, 0))
        painter = QPainter(self)
        painter.setPen(pen)
        painter.setBrush(brush)
        painter.drawRect(ev.rect())


class InfoPanel(QDialog):
    def __init__(self, parent, f=Qt.WA_TranslucentBackground | Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.X11BypassWindowManagerHint):
        super(InfoPanel, self).__init__(parent, f)
        self.setAutoFillBackground(True)
        self.setModal(True)
        logo = QPixmap(os.path.join(OCRTranslator.getFilePath(), "www", "img", "infopanel-logo.png"), "PNG")
        content = QLabel()
        content.setTextFormat(Qt.RichText)
        with open(os.path.join(OCRTranslator.getFilePath(), "resources", "info.html"), "r") as file:
            content.setText(file.read())
            content.setStyleSheet('''table { background: #FFF; color: #000; border-radius:6px; border:1px solid #000; }
                                    td > b { font-size: 11pt; } td { font-size: 10pt; }''')
        layout = QVBoxLayout()
        layout.setContentsMargins(0, 15, 15, 0)
        layout.addWidget(QLabel(pixmap=logo), 0, Qt.AlignRight)
        layout.addWidget(content, 0, Qt.AlignRight)
        self.setLayout(layout)
 
    def keyPressEvent(self, ev):
        if ev.key() == Qt.Key_Escape:
            self.close()


class OCRTranslator(QDialog):
    def __init__(self, parent=None, f=Qt.Tool | Qt.FramelessWindowHint | Qt.X11BypassWindowManagerHint):
        super(OCRTranslator, self).__init__(parent, f)
        self.desktopGeometry = self.getDesktopGeometry()
        self.setGeometry(self.desktopGeometry)
        self.setStyleSheet("background-color: #FFF;")
        self.setModal(True)
        self.setWindowOpacity(0.4)
        self.setCursor(Qt.CrossCursor)
        self.rubberBand = Selector(QRubberBand.Rectangle, self)
        self.rubberBand.setWindowOpacity(0.7)
        self.start, self.end = QPoint(), QPoint()
        self.hasSelected = False
        self.screenshot = QPixmap()
        self.shotfilename = None
        self.info = InfoPanel(self)
        self.info.setFixedSize(QSize(450, 100))
        self.info.setGeometry(OCRTranslator.getDesktopGeometry().width() - 460, 0, 450, 100)
        self.info.show()

    def mousePressEvent(self, ev):
        if ev.button() == Qt.LeftButton:
            self.info.close()
            self.setCursor(Qt.CrossCursor)
            self.start = QPoint(ev.pos())
            self.rubberBand.setGeometry(QRect(self.start, QSize()))
            self.rubberBand.show()

    def mouseMoveEvent(self, ev):
        if not self.start.isNull():
            self.rubberBand.setGeometry(QRect(self.start, ev.pos()).normalized())
            self.hasSelected = True

    def mouseReleaseEvent(self, ev):
        if ev.button() == Qt.LeftButton and self.hasSelected:
            self.end = QPoint(ev.pos())
            self.setCursor(Qt.ArrowCursor)
            self.hasSelected = False

    def keyPressEvent(self, ev):
        if ev.key() == Qt.Key_Escape:
            self.close()
        elif ev.key() in [Qt.Key_Enter, Qt.Key_Return] and not self.start.isNull() and not self.end.isNull():
            self.hide()
            QTimer().singleShot(500, self.takeScreenshot)

    def takeScreenshot(self):
        x = self.desktopGeometry.x() + self.start.x()
        y = self.desktopGeometry.y() + self.start.y()
        w = self.end.x() - self.start.x()
        h = self.end.y() - self.start.y()
        self.screenshot = qApp.screens()[0].grabWindow(qApp.desktop().winId(), x, y, w, h)
        self.shotfilename = os.path.join(self.getFilePath(), "www", "temp", strftime('%Y%m%d-%H%M%S')) + ".png"
        self.screenshot.save(self.shotfilename, "PNG", 100)
        if not self.shotfilename is None and type(self.screenshot) is QPixmap:
            self.openTranslator()

    @staticmethod
    def getDesktopGeometry():
        totalWidth = 0
        maxHeight = 0
        minX = 0
        screens = (qApp.screens()[i] for i in range(qApp.desktop().screenCount()))
        rects = [screen.geometry() for screen in screens]
        for rect in rects:
            totalWidth += rect.width()
            if rect.x() < minX:
                minX = rect.x()
            if rect.height() > maxHeight:
                maxHeight = rect.height()
        return QRect(minX, 0, totalWidth, maxHeight)

    @staticmethod
    def getFilePath():
        if getattr(sys, 'frozen', False):
            return sys._MEIPASS
        return os.path.dirname(os.path.realpath(sys.argv[0]))

    def getAppFrameSize(self):
        viewWidth = self.screenshot.width() + 85
        if viewWidth < 600:
            viewWidth = 600
        viewHeight = self.screenshot.height() + 185
        if viewHeight < 550:
            viewHeight = 550
        return QSize(viewWidth, viewHeight)

    def webServer(self):
        if getattr(sys, 'frozen', False):
            os.chdir(sys._MEIPASS)  
            for r, d, f in os.walk(sys._MEIPASS):
                os.chmod(r, 0o755)
        httpd = HTTPServer((self.address, self.port), OCRHTTPHandler)
        httpd.serve_forever()

    def openTranslator(self):
        self.address = "127.0.0.1"
        self.port = randint(2000, 5000)
        self.t = Thread(target=self.webServer)
        self.t.daemon = True
        self.t.start()
        self.view = QWebEngineView()
        self.view.setWindowTitle("OCR Translator")
        self.view.setWindowIcon(QIcon(os.path.join(self.getFilePath(), "www", "img", "app-icon.png")))
        self.view.setContextMenuPolicy(Qt.NoContextMenu)
        qryparam = urlencode({'img': self.shotfilename.split('\\').pop().split('/').pop()})
        self.url = QUrl("http://" + self.address + ":" + str(self.port) + "/www/index.html#?" + qryparam)
        self.view.load(self.url)
        self.view.setMinimumSize(self.getAppFrameSize())
        self.view.closeEvent = self.closeEvent
        self.view.show()

    def closeEvent(self, ev):
        qApp.quit()


def Cleanup():
    temppath = os.path.join(OCRTranslator.getFilePath(), "www", "temp", "**")
    try:
        filelist = glob(temppath)
        for file in filelist:
            os.remove(file)
    except:
        print("Error deleting file " + temppath + ":", sys.exc_info()[0])
        pass

def main():
    atexit.register(Cleanup)
    app = QApplication(sys.argv)
    app.setApplicationName("OCR Translator")
    app.setQuitOnLastWindowClosed(True)
    ocrtranslator = OCRTranslator()
    ocrtranslator.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main()
