#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from atexit import register
from os import path
from random import randint
from threading import Thread
from time import strftime
from urllib.parse import urlencode

from PyQt5.QtCore import QPoint, QRect, QSize, Qt, QTimer, QUrl
from PyQt5.QtGui import QBrush, QColor, QIcon, QPainter, QPen, QPixmap
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtWidgets import QApplication, QDialog, QRubberBand

from util import (Cleanup, GetAppFrameSize, GetDesktopGeometry, GetWorkingPath,
                  WebServer)

try:
    from PyQt5.QtWebEngineWidgets import QWebEngineView
    _isWebEngine = True
except ImportError as e:
    from PyQt5.QtWebKitWidgets import QWebView
    _isWebEngine = False


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


class Snapshot(QDialog):
    def __init__(self, parent=None, f=Qt.Tool | Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.X11BypassWindowManagerHint):
        super(Snapshot, self).__init__(parent, f)
        self.isFullScreen()
        self.desktopGeometry = GetDesktopGeometry(app)
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
        self.screenshot = app.screens()[0].grabWindow(app.desktop().winId(), x, y, w, h)
        self.shotfilename = path.join(GetWorkingPath(), "temp", strftime('%Y%m%d-%H%M%S')) + ".png"
        self.screenshot.save(self.shotfilename, "PNG", 100)
        if not self.shotfilename is None and type(self.screenshot) is QPixmap:
            self.openTranslator()

    def openTranslator(self):
        self.address = "127.0.0.1"
        self.port = randint(2000, 5000)
        self.t = Thread(target=WebServer, args=(self.address, self.port))
        self.t.daemon = True
        self.t.start()
        # print("app framesize: " + str(GetAppFrameSize(self.screenshot).width()) +
        #       "x" + str(GetAppFrameSize(self.screenshot).height()))
        self.view = QWebEngineView() if _isWebEngine else QWebView() 
        # self.view = QWebEngineView()
        self.view.setWindowTitle("OCR Translator")
        self.view.setWindowIcon(QIcon(path.join(GetWorkingPath(), "img", "app-icon.ico")))
        self.view.setContextMenuPolicy(Qt.NoContextMenu)
        qryparam = urlencode({'img': self.shotfilename.split('\\').pop().split('/').pop()})
        self.url = QUrl("http://" + self.address + ":" + str(self.port) + "/index.html#?" + qryparam)
        # print("app server loaded at: " + self.url.toString())
        self.view.load(self.url)
        self.view.setMinimumSize(GetAppFrameSize(self.screenshot))
        self.view.closeEvent = self.closeEvent
        self.view.show()

    def closeEvent(self, ev):
        app.quit()

if __name__ == '__main__':
    import sys
    register(Cleanup)
    app = QApplication(sys.argv)
    snapshot = Snapshot()
    snapshot.show()
    sys.exit(app.exec_())
