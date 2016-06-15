#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys

# unicode = str with python3
if sys.version_info > (3,):
    unicode = str
    
from PyQt5.QtGui import (QPixmap)
from PyQt5.QtWidgets import (QDialog, QDesktopWidget, QApplication, QRubberBand, 
                            QVBoxLayout, QLabel)
from PyQt5.QtCore import (Qt, QRect)
    
from Libs import QtHelper, Logger


class DSnapshot(QDialog):
    """
    Snapshot
    """
    def __init__(self, parent=None):
        """
        """
        QDialog.__init__(self, parent)

        self.state = 0
      
        #self.setAttribute(Qt.WA_TranslucentBackground) 
        #self.setWindowFlags(self.windowFlags() | Qt.FramelessWindowHint)
        self.setWindowFlags(Qt.Tool | Qt.FramelessWindowHint)
        self.setWindowFlags(self.windowFlags() | Qt.WindowStaysOnTopHint)



        # set window attributes
        #self.setWindowOpacity(0.5)
        
        #self.setWindowFlags(Qt.Tool | Qt.FramelessWindowHint)
        #self.setWindowFlags(self.windowFlags() | Qt.WindowStaysOnTopHint)

        # maximize window
        screen = QDesktopWidget().screenGeometry()        
        self.setGeometry(screen)


        # set cross cursor
        self.setCursor(Qt.CursorShape(Qt.CrossCursor))
        # BEGIN ISSUE #2
        #QApplication.setOverrideCursor(QCursor(Qt.CrossCursor))
        # END ISSUE #2
        
        # display        
        self.show()

        # create rubberband
        self.rb = QRubberBand(QRubberBand.Rectangle)

        self.snapshotResult = None
        
        layout = QVBoxLayout()
        
        self.backgroundLabel = QLabel()
        layout.addWidget(self.backgroundLabel) 
        layout.setContentsMargins(0,0,0,0)

        self.setLayout(layout) 

    def setBackground(self, pixmap):
        """
        Set background
        """
        self.backgroundLabel.setPixmap(pixmap)

    def mousePressEvent(self,ev):
        """
        """
        if ev.button() != Qt.LeftButton:
            self.abort()
            
        if self.state == 0:        
            self.state = 1                        
            self.origin = ev.globalPos()
         
            self.rb.setGeometry(QRect(self.origin,ev.globalPos()).normalized())
            self.rb.show()
    
    def mouseMoveEvent(self,ev):
        """
        """
        if self.state == 1:
            self.rb.setGeometry(QRect(self.origin,ev.globalPos()).normalized())
    
    def mouseReleaseEvent(self,ev):
        """
        """
        if self.state == 1:
            self.state = 2
            self.end = ev.globalPos()        
            self.rb.hide()
            self.doSnip()
   
    def keyPressEvent(self, ev):
        """
        """
        if ev.key() == Qt.Key_Escape: 
            self.abort()
    
    def doSnip(self):   
        """
        """
        x = min(self.origin.x(),self.end.x())
        y = min(self.origin.y(),self.end.y())
        w = abs(self.origin.x() - self.end.x())
        h = abs(self.origin.y() - self.end.y())

        self.hide()
        pixmap = QPixmap. grabWidget(self.backgroundLabel,x,y,w,h)

        self.snapshotResult = pixmap
        self.accept()
    
    def getSnapshot(self):
        """
        Return snapshot as pixmap
        """
        return self.snapshotResult

    def abort(self):
        """
        close both windows and exit program
        """
        pass
        