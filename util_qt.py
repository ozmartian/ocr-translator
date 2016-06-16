#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys


#--------------------------------------------------------------------------------------------------------#

def DeleteFiles(path):
    from glob import glob
    try:
        filelist = glob(path)
        for file in filelist:
            os.remove(file)
    except:
        print("Error deleting file " + path + ":", sys.exc_info()[0])
        pass

#--------------------------------------------------------------------------------------------------------#


def Cleanup():
    temppath = os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), "temp", "**")
    DeleteFiles(temppath)

#--------------------------------------------------------------------------------------------------------#


def GetDesktopGeometry(app):
    totalWidth = 0
    maxHeight = 0
    minX = 0
    screens = (app.screens()[i] for i in range(app.desktop().screenCount()))
    rects = [screen.geometry() for screen in screens]
    for rect in rects:
        totalWidth += rect.width()
        if rect.x() < minX:
            minX = rect.x()
        if rect.height() > maxHeight:
            maxHeight = rect.height()
    from PyQt5.QtCore import QRect
    return QRect(minX, 0, totalWidth, maxHeight)

#--------------------------------------------------------------------------------------------------------#


def GetWorkingPath():
    if getattr(sys, 'frozen', False):
        return os.path.join(sys._MEIPASS)
    return os.path.dirname(os.path.realpath(sys.argv[0]))

#--------------------------------------------------------------------------------------------------------#


def GetAppFrameSize(imageSize):
    viewWidth = imageSize.width() + 85
    if viewWidth < 600:
        viewWidth = 600
    viewHeight = imageSize.height() + 185
    if viewHeight < 550:
        viewHeight = 550
    from PyQt5.QtCore import QSize
    return QSize(viewWidth, viewHeight)

#--------------------------------------------------------------------------------------------------------#


def WebServer(url, port):
    try:
        from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
        from SimpleHTTPServer import SimpleHTTPRequestHandler
    except ImportError:
        from http.server import SimpleHTTPRequestHandler, HTTPServer

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
    print("http server loaded at: " + url + ":" + str(port))
