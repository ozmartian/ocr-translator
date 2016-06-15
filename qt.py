#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys

from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *


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
        self.origin = QPoint()
        self.target = QPoint()
        self.screenshot = QPixmap()
        self.hasSelected = False

    def mousePressEvent(self, ev):
        if ev.button() == Qt.LeftButton:
            self.setCursor(Qt.CrossCursor)
            self.origin = QPoint(ev.pos())
            self.rubberBand.setGeometry(QRect(self.origin, QSize()))
            self.rubberBand.show()

    def mouseMoveEvent(self, ev):
        if not self.origin.isNull():
            self.rubberBand.setGeometry(QRect(self.origin, ev.pos()).normalized())
            self.hasSelected = True

    def mouseReleaseEvent(self, ev):
        if ev.button() == Qt.LeftButton and self.hasSelected:
            self.setCursor(Qt.ArrowCursor)
            self.target = QPoint(ev.pos())
            print("selection = " + str(self.origin.x()) + "," + str(self.origin.y()) +
                  " - " + str(self.target.x()) + "," + str(self.target.y()))

            self.hasSelected = False

    def keyPressEvent(self, ev):
        if ev.key() == Qt.Key_Escape:
            self.close()
        elif ev.key() in [Qt.Key_Enter, Qt.Key_Return] and not self.origin.isNull() and not self.target.isNull():
            self.screenshot = app.screens()[0].grabWindow(app.desktop().winId(),
                                                          self.origin.x(), self.origin.y(),
                                                          self.target.x() - self.origin.x(),
                                                          self.target.y() - self.origin.y())
            self.screenshot.save("/home/ozmartian/Projects/ocr-translator/temp/screenshot.png", "PNG", 100)

    def closeEvent(self, ev):
        app.quit()


if __name__ == '__main__':
    app = QApplication(sys.argv)
    snapshot = Snapshot()
    sys.exit(app.exec_())
