#!/usr/bin/env python3

import sys, threading, atexit
import wx, time, os, util
import wx.html2 as webview

from random import randint

try:
    from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
    from SimpleHTTPServer import SimpleHTTPRequestHandler
except ImportError:
    from http.server import SimpleHTTPRequestHandler, HTTPServer

#--------------------------------------------------------------------------------------------------------#

class ScreenshotFrame(wx.Frame):
    c1 = None
    c2 = None

    def __init__(self, parent=None, id=-1, title=""):
        wx.Frame.__init__(self, parent, id, title, pos=(0, 0), size=wx.DisplaySize(), style=wx.FRAME_NO_TASKBAR | wx.NO_BORDER | wx.STAY_ON_TOP)
        self.parent = parent
        self.SetTransparent(185)
        self.Bind(wx.EVT_CLOSE, self.OnClose)        
        self.SetCursor(wx.Cursor(wx.CURSOR_CROSS))
        self.panel = wx.Panel(self, size=self.GetSize())
        self.panel.SetBackgroundColour(wx.Colour(0, 0, 0))
        self.panel.Bind(wx.EVT_MOTION, self.OnMouseMove)
        self.panel.Bind(wx.EVT_LEFT_DOWN, self.OnMouseSelect)
        self.panel.Bind(wx.EVT_RIGHT_DOWN, self.OnReset)
        self.panel.Bind(wx.EVT_LEFT_UP, self.OnMouseUp)
        self.panel.Bind(wx.EVT_PAINT, self.OnPaint)
        self.panel.Bind(wx.EVT_KEY_DOWN, self.OnKeyDown)
        
    def OnClose(self, event):
        self.Destroy()
        
    def OnMouseMove(self, event):
        if event.Dragging() and event.LeftIsDown():
            self.c2 = event.GetPosition()
            self.Refresh()

    def OnMouseSelect(self, event):
        self.SetCursor(wx.Cursor(wx.CURSOR_CROSS))
        self.c1 = event.GetPosition()

    def OnMouseUp(self, event):
        self.SetCursor(wx.Cursor(wx.CURSOR_ARROW))
        
    def OnKeyDown(self, event):
        key = event.GetKeyCode()
        if key == wx.WXK_ESCAPE: self.Close()
        elif (key == wx.WXK_RETURN or key == wx.WXK_NUMPAD_ENTER) and self.RegionSelected():
            global shotdata
            shotdata.Save(self.c1.x, self.c1.y, self.c2.x - self.c1.x, self.c2.y - self.c1.y)
            self.TakeScreenshot()
            self.Close()
        event.Skip()
        
    def OnReset(self, event):
        wx.PaintDC(self.panel).Clear()
        self.SetCursor(wx.Cursor(wx.CURSOR_CROSS))

    def OnPaint(self, event):
        if not self.RegionSelected(): return
        dc = wx.PaintDC(self.panel)
        dc.SetPen(wx.Pen(wx.WHITE, 1, wx.LONG_DASH))
        dc.SetBrush(wx.Brush(wx.Colour(100, 100, 100), wx.SOLID))
        dc.DrawRectangle(self.c1.x, self.c1.y, self.c2.x - self.c1.x, self.c2.y - self.c1.y)

    def RegionSelected(self):
        if self.c1 is None or self.c2 is None: return False
        else: return True

    def TakeScreenshot(self):
        global screenshoter, shotdata
        bmp = screenshoter.GetDesktop().GetSubBitmap(wx.Rect(shotdata.x, shotdata.y, shotdata.width, shotdata.height))
        img = bmp.ConvertToImage()
        shotdata.filename = os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), "tmp", time.strftime('%Y%m%d-%H%M%S')) + ".png"
        img.SaveFile(shotdata.filename, wx.BITMAP_TYPE_PNG)
        
#--------------------------------------------------------------------------------------------------------#

class Screenshoter(wx.App):
    bmp = None
    
    def OnInit(self):
        self.SaveDesktop()
        self.frame = ScreenshotFrame(None)
        self.frame.Show(True)
        self.SetTopWindow(self.frame)
        return True
        
    def SaveDesktop(self):
        dcScreen = wx.ScreenDC()
        self.bmp = wx.Bitmap(dcScreen.Size.Width, dcScreen.Size.Height)
        memDC = wx.MemoryDC()
        memDC.SelectObject(self.bmp)
        memDC.Blit(0, 0, dcScreen.Size.Width, dcScreen.Size.Height, dcScreen, 0, 0)
        memDC.SelectObject(wx.NullBitmap)
        
    def GetDesktop(self):
        if self.bmp.IsOk(): return self.bmp

#--------------------------------------------------------------------------------------------------------#

class ScreenshotData:
    x = 0
    y = 0
    width = 0
    height = 0
    filename = ""
    
    def Save(self, x, y, width, height, filename=""):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.filename= filename

#--------------------------------------------------------------------------------------------------------#

class BrowserFrame(wx.Frame):
    address = None
    port = None
    view = None
    
    def __init__(self, parent=None, id=-1, title=""):
        wx.Frame.__init__(self, parent, id, title="OCR Translator", pos=(50, 50), size=(800, 400), style=wx.DEFAULT_FRAME_STYLE)
        
        t = threading.Thread(target=self.WebServer)
        t.daemon = True
        t.start()
        
        global shotdata
        viewWidth = shotdata.width + 85
        if viewWidth < 600: viewWidth = 600
        viewHeight = shotdata.height + 185
        if viewHeight < 550: viewHeight = 550
        self.SetSize((viewWidth, viewHeight))
        
        self.panel = wx.Panel(self, size=self.GetSize())
        self.SetIcon(wx.Icon(os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), "img", "ocr-translator.png"), wx.BITMAP_TYPE_PNG))
        self.current = "http://" + self.address + ":" + str(self.port) + "/index.html?img=" + util.GetFileNameFromPath(shotdata.filename)
        self.view = webview.WebView.New(self.panel, size=self.GetSize(), url=self.current)
        self.view.EnableContextMenu(False)
        self.panel.SetFocus()
        self.Fit()
        self.Centre()
                        
    def WebServer(self):
        HandlerClass = SimpleHTTPRequestHandler
        ServerClass = HTTPServer
        Protocol = "HTTP/1.0"
        self.address = "127.0.0.1"
        self.port = randint(2000, 4000)
        server_address = (self.address, self.port)
        HandlerClass.protocol_version = Protocol
        httpd = ServerClass(server_address, HandlerClass)
        httpd.serve_forever()

#--------------------------------------------------------------------------------------------------------#

class BrowserApp(wx.App):
    def OnInit(self):
        self.frame = BrowserFrame(None)
        self.frame.Show(True)
        self.SetTopWindow(self.frame)
        self.frame.Bind(wx.EVT_CLOSE, self.OnClose)
        return True
        
    def OnClose(self, event):
        global Cleanup
        Cleanup()
        self.Destroy()
        sys.exit(0)

#--------------------------------------------------------------------------------------------------------#

def Cleanup():
    temppath = os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), "tmp", "**")
    util.DeleteFiles(temppath)

#--------------------------------------------------------------------------------------------------------#

atexit.register(Cleanup)

shotdata = ScreenshotData()

screenshoter = Screenshoter(False)
screenshoter.MainLoop()

if len(shotdata.filename) and os.path.isfile(shotdata.filename):
    browser = BrowserApp(False)
    browser.MainLoop()