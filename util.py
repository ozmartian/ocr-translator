#!/usr/bin/env python

import glob, os, sys, wx

#--------------------------------------------------------------------------------------------------------#

def DeleteFiles(path):
    try:
        filelist = glob.glob(path)
        for file in filelist:
            os.remove(file)
    except:
        print("Error deleting file " + path + ":", sys.exc_info()[0])
    
#--------------------------------------------------------------------------------------------------------#

def Cleanup():
    temppath = os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), "temp", "**")
    DeleteFiles(temppath)
    
#--------------------------------------------------------------------------------------------------------#

def SaveDesktop():
    desktopSize = GetTotalDesktopSize()
    bmp = wx.Bitmap(desktopSize.GetWidth(), desktopSize.GetHeight())
    dcScreen = wx.ScreenDC()
    memDC = wx.MemoryDC()
    memDC.SelectObject(bmp)
    memDC.Blit(0, 0, desktopSize.GetWidth(), desktopSize.GetHeight(), dcScreen, 0, 0)
    memDC.SelectObject(wx.NullBitmap)
    return bmp
    
#--------------------------------------------------------------------------------------------------------#

def GetTotalDesktopSize():
    totalWidth = 0
    maxHeight = 0
    displays = (wx.Display(i) for i in range(wx.Display.GetCount()))
    sizes = [display.GetGeometry().GetSize() for display in displays]
    for size in sizes:
        totalWidth += size[0]
        if size[1] > maxHeight: maxHeight = size[1]
    return wx.Size(totalWidth, maxHeight)

#--------------------------------------------------------------------------------------------------------#

def WebServer(url, port):
    try:
        from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
        from SimpleHTTPServer import SimpleHTTPRequestHandler
    except ImportError:
        from http.server import SimpleHTTPRequestHandler, HTTPServer

    HandlerClass = SimpleHTTPRequestHandler
    ServerClass = HTTPServer
    Protocol = "HTTP/1.0"
    server_address = (url, port)
    HandlerClass.protocol_version = Protocol
    httpd = ServerClass(server_address, HandlerClass)
    httpd.serve_forever()
