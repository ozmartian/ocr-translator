from PyQt4 import QtGui, QtCore

class RubberbandEnhancedLabel(QtGui.QLabel):

    def __init__(self, parent=None):
        QtGui.QLabel.__init__(self, parent)
        self.selection = QtGui.QRubberBand(QtGui.QRubberBand.Rectangle, self)

    def mousePressEvent(self, event):
        '''
            Mouse is pressed. If selection is visible either set dragging mode (if close to border) or hide selection.
            If selection is not visible make it visible and start at this point.
        '''

        if event.button() == QtCore.Qt.LeftButton:

            position = QtCore.QPoint(event.pos())
            if self.selection.isVisible():
                # visible selection
                if (self.upper_left - position).manhattanLength() < 20:
                    # close to upper left corner, drag it
                    self.mode = "drag_upper_left"
                elif (self.lower_right - position).manhattanLength() < 20:
                    # close to lower right corner, drag it
                    self.mode = "drag_lower_right"
                else:
                    # clicked somewhere else, hide selection
                    self.selection.hide()
            else:
                # no visible selection, start new selection
                self.upper_left = position
                self.lower_right = position
                self.mode = "drag_lower_right"
                self.selection.show()

    def mouseMoveEvent(self, event):
        '''
            Mouse moved. If selection is visible, drag it according to drag mode.
        '''
        if self.selection.isVisible():
            # visible selection
            if self.mode is "drag_lower_right":
                self.lower_right = QtCore.QPoint(event.pos())
            elif self.mode is "drag_upper_left":
                self.upper_left = QtCore.QPoint(event.pos())
            # update geometry
            self.selection.setGeometry(QtCore.QRect(self.upper_left, self.lower_right).normalized())

            print("Selection = " + self.upper_left.)

app = QtGui.QApplication([])

screen_pixmap = QtGui.QPixmap.grabWindow(app.desktop().winId())

window = QtGui.QWidget()
layout = QtGui.QVBoxLayout(window)
label = RubberbandEnhancedLabel()
label.setPixmap(screen_pixmap)
layout.addWidget(label)
geometry = app.desktop().availableGeometry()
window.setFixedSize(geometry.width(), geometry.height())
window.show()
app.exec_()