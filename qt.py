#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import atexit
import os
import sys
import time

from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

import util


class Selector(QRubberBand):
    def __init__(self, *arg, **kwargs):
        super(Selector, self).__init__(*arg, **kwargs)

    def paintEvent(self, event):
        pen = QPen()
        pen.setStyle(Qt.DashLine)
        pen.setWidth(4)
        pen.setColor(QColor(Qt.white))
        painter = QPainter(self)
        painter.setPen(pen)
        painter.setBrush(QBrush(QColor(100, 100, 100)))
        painter.setOpacity(0.7)
        painter.drawRect(event.rect())


class Snapshot(QDialog):
    def __init__(self, parent=None,
                 f=Qt.Tool | Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.X11BypassWindowManagerHint):
        super(Snapshot, self).__init__(parent, f)

        self.isFullScreen()

        self.setGeometry(QRect(0, 0, app.desktop().width(), app.desktop().height()))

        self.setStyleSheet("background-color: #000;")
        self.setModal(True)
        self.setWindowOpacity(0.7)
        self.setCursor(Qt.CrossCursor)

        self.show()

        self.rubberBand = Selector(QRubberBand.Rectangle, self)
        self.start = QPoint()
        self.end = QPoint()
        self.screenshot = QPixmap()
        self.hasSelected = False
        self.shotfilename = None

    def mousePressEvent(self, ev):
        if ev.button() == Qt.LeftButton:
            self.setCursor(Qt.CrossCursor)
            self.start = QPoint(ev.globalPos())
            self.rubberBand.setGeometry(QRect(self.start, QSize()))
            self.rubberBand.show()

    def mouseMoveEvent(self, ev):
        if not self.start.isNull():
            self.rubberBand.setGeometry(QRect(self.start, ev.globalPos()).normalized())
            self.hasSelected = True

    def mouseReleaseEvent(self, ev):
        if ev.button() == Qt.LeftButton and self.hasSelected:
            self.end = QPoint(ev.globalPos())
            self.setCursor(Qt.ArrowCursor)
            self.hasSelected = False

    def keyPressEvent(self, ev):
        if ev.key() == Qt.Key_Escape:
            self.close()
        elif ev.key() in [Qt.Key_Enter, Qt.Key_Return] and not self.start.isNull() and not self.end.isNull():
            self.hide()
            QTimer().singleShot(500, self.takescreenshot)

    def takescreenshot(self):
        x = min(self.start.x(), self.end.x())
        y = min(self.start.y(), self.end.y())
        w = abs(self.start.x() - self.end.x())
        h = abs(self.start.y() - self.end.y())
        self.screenshot = app.screens()[0].grabWindow(app.desktop().winId(), x, y, w, h)
        self.shotfilename = os.path.join(util.GetWorkingPath(), "temp", time.strftime('%Y%m%d-%H%M%S')) + ".png"
        self.screenshot.save(self.shotfilename, "PNG", 100)
        self.close()

    def closeEvent(self, ev):
        app.quit()


if __name__ == '__main__':
    atexit.register(util.Cleanup)
    app = QApplication(sys.argv)
    snapshot = Snapshot()
    sys.exit(app.exec_())
