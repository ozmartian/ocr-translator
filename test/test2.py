import sys
from PyQt4 import QtGui, QtCore
from PyQt4.QtCore import Qt, QPoint, QRect, QSize
from PyQt4.QtGui import QPixmap, QApplication, QLabel, QRubberBand


class MyLabel(QLabel):

    def __init__(self, parent=None):

        QLabel.__init__(self, parent)
        self.rubberBand = QRubberBand(QRubberBand.Rectangle, self)
        self.origin = QPoint()

    def mousePressEvent(self, event):

        if event.button() == Qt.LeftButton:

            self.origin = QPoint(event.pos())
            self.rubberBand.setGeometry(QRect(self.origin, QSize()))
            self.rubberBand.show()

    def mouseMoveEvent(self, event):

        if not self.origin.isNull():
            self.rubberBand.setGeometry(
                QRect(self.origin, event.pos()).normalized())

    def mouseReleaseEvent(self, event):

        if event.button() == Qt.LeftButton:
            self.rubberBand.hide()


class mainUI(QtGui.QWidget):

    def __init__(self):
        super(mainUI, self).__init__()
        self.initUI()

    def initUI(self):

        layout = QtGui.QVBoxLayout(self)

        label = MyLabel(self)
        pixmap = QPixmap.grabWindow(app.desktop().winId())
        label.setPixmap(pixmap)
        layout.addWidget(label)

        self.setLayout(layout)

        geometry = app.desktop().availableGeometry()

        self.setFixedSize(geometry.width(), geometry.height())

        # self.setWindowFlags( self.windowFlags() | Qt.FramelessWindowHint)
        self.show()


if __name__ == '__main__':
    app = QtGui.QApplication(sys.argv)

    window = mainUI()

    sys.exit(app.exec_())