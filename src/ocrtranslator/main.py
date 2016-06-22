#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys
from atexit import register
from glob import glob
from http.server import HTTPServer, SimpleHTTPRequestHandler
from random import randint
from threading import Thread
from time import strftime
from urllib.parse import urlencode

from PyQt5.QtCore import QPoint, QRect, QSize, Qt, QTimer, QUrl
from PyQt5.QtGui import QBrush, QColor, QIcon, QPainter, QPen, QPixmap
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtWidgets import QApplication, QDialog, QRubberBand


# if sys.platform.startswith("linux"):
#     import PyQt5.QtWebEngineCore
#     from PyQt5.QtWebEngineWidgets import QWebEngineView
#     _isWebEngine = True
# else:
#   from PyQt5.QtWebKitWidgets import QWebView
#   _isWebEngine = False

def Cleanup():
    temppath = os.path.join(GetDocRoot(), "temp", "**")
    try:
        filelist = glob(temppath)
        for file in filelist:
            os.remove(file)
    except:
        print("Error deleting file " + temppath + ":", sys.exc_info()[0])
        pass

def GetDesktopGeometry():
    totalWidth = 0
    maxHeight = 0
    minX = 0
    screens = (QApplication.instance().screens()[i] for i in range(QApplication.instance().desktop().screenCount()))
    rects = [screen.geometry() for screen in screens]
    for rect in rects:
        totalWidth += rect.width()
        if rect.x() < minX:
            minX = rect.x()
        if rect.height() > maxHeight:
            maxHeight = rect.height()
    return QRect(minX, 0, totalWidth, maxHeight)

def GetDocRoot():
    if getattr(sys, 'frozen', False):
        return os.path.join(sys._MEIPASS, "www")
    return os.path.join(os.path.dirname(os.path.realpath(__file__)), "www")

def GetAppFrameSize(imageSize):
    viewWidth = imageSize.width() + 85
    if viewWidth < 600:
        viewWidth = 600
    viewHeight = imageSize.height() + 185
    if viewHeight < 550:
        viewHeight = 550
    return QSize(viewWidth, viewHeight)

def WebServer(url, port):
    if getattr(sys, 'frozen', False):
        os.chdir(sys._MEIPASS)
        for r, d, f in os.walk(sys._MEIPASS):
            os.chmod(r, 0o755)
    HandlerClass = SimpleHTTPRequestHandler
    ServerClass = HTTPServer
    server_address = (url, port)
    HandlerClass.protocol_version = "HTTP/1.0"
    httpd = ServerClass(server_address, HandlerClass)
    httpd.serve_forever()


class Selector(QRubberBand):
    def __init__(self, *arg, **kwargs):
        super(Selector, self).__init__(*arg, **kwargs)

    def paintEvent(self, event):
        pen = QPen()
        pen.setStyle(Qt.DotLine)
        pen.setWidth(2)
        pen.setColor(QColor(Qt.white))
        painter = QPainter(self)
        painter.setPen(pen)
        painter.setBrush(QBrush(QColor(100, 100, 100)))
        painter.setOpacity(0.7)
        painter.drawRect(event.rect())


class OCRTranslator(QDialog):
    def __init__(self, parent=None, f=Qt.Tool | Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.X11BypassWindowManagerHint):
        super(OCRTranslator, self).__init__(parent, f)
        self.isFullScreen()
        self.desktopGeometry = GetDesktopGeometry()
        self.setGeometry(self.desktopGeometry)
        self.setStyleSheet("background-color: #000;")
        self.setModal(True)
        self.setWindowOpacity(0.7)
        self.setCursor(Qt.CrossCursor)
        self.rubberBand = Selector(QRubberBand.Rectangle, self)
        self.start = QPoint()
        self.end = QPoint()
        self.hasSelected = False
        self.screenshot = QPixmap()
        self.shotfilename = None

    def mousePressEvent(self, ev):
        if ev.button() == Qt.LeftButton:
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
        self.screenshot = QApplication.instance().screens()[0].grabWindow(QApplication.instance().desktop().winId(), x, y, w, h)
        self.shotfilename = os.path.join(GetDocRoot(), "temp", strftime('%Y%m%d-%H%M%S')) + ".png"
        self.screenshot.save(self.shotfilename, "PNG", 100)
        if not self.shotfilename is None and type(self.screenshot) is QPixmap:
            self.openTranslator()

    def openTranslator(self):
        self.address = "127.0.0.1"
        self.port = randint(2000, 5000)
        self.t = Thread(target=WebServer, args=(self.address, self.port))
        self.t.daemon = True
        self.t.start()
        # print("server started at: " + self.address + ":" + str(self.port))
        self.view = QWebEngineView()
        self.view.setWindowTitle("OCR Translator")
        self.view.setWindowIcon(QIcon(os.path.join(GetDocRoot(), "img", "app-icon.png")))
        self.view.setContextMenuPolicy(Qt.NoContextMenu)
        qryparam = urlencode({'img': self.shotfilename.split('\\').pop().split('/').pop()})
        self.url = QUrl("http://" + self.address + ":" + str(self.port) + "/ocrtranslator/www/index.html#?" + qryparam)
        self.view.load(self.url)
        self.view.setMinimumSize(GetAppFrameSize(self.screenshot))
        self.view.closeEvent = self.closeEvent
        self.view.show()

    def closeEvent(self, ev):
        QApplication.instance().quit()