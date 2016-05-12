#!/usr/bin/env python3

import wx, time, sys

#--------------------------------------------------------------------------------------------------------#

class MainFrame(wx.Frame):
    c1 = None
    c2 = None

    def __init__(self, parent=None, id=-1, title=""):
        wx.Frame.__init__(self, parent, id, title, pos=(0, 0), size=wx.DisplaySize(), style=wx.FRAME_NO_TASKBAR | wx.NO_BORDER | wx.STAY_ON_TOP)
        
        self.panel = wx.Panel(self, size=self.GetSize())

        self.panel.Bind(wx.EVT_MOTION, self.OnMouseMove)
        self.panel.Bind(wx.EVT_LEFT_DOWN, self.OnMouseSelect)
        self.panel.Bind(wx.EVT_RIGHT_DOWN, self.OnReset)
        self.panel.Bind(wx.EVT_LEFT_UP, self.OnMouseUp)
        self.panel.Bind(wx.EVT_PAINT, self.OnPaint)
        self.panel.Bind(wx.EVT_KEY_DOWN, self.OnKeyDown)
        
        self.Bind(wx.EVT_CLOSE, self.OnClose)
        
        self.SetCursor(wx.Cursor(wx.CURSOR_CROSS))

        self.panel.SetBackgroundColour(wx.Colour(0, 0, 0))
        #self.panel.SetBackgroundStyle(wx.BG_STYLE_COLOUR)

        self.SetTransparent(150)
             
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
        if key == wx.WXK_ESCAPE:
            self.Close()
        elif (key == wx.WXK_RETURN or key == wx.WXK_NUMPAD_ENTER) and self.RegionSelected():
            data = ScreenshotData(self.c1.x, self.c1.y, self.c2.x - self.c1.x, self.c2.y - self.c1.y)
            self.TakeScreenshot(data)
            self.Close()
        event.Skip()
        
    def OnReset(self, event):
        wx.PaintDC(self.panel).Clear()
        self.SetCursor(wx.Cursor(wx.CURSOR_CROSS))

    def OnPaint(self, event):
        if not self.RegionSelected():
            return
        dc = wx.PaintDC(self.panel)
        dc.SetPen(wx.Pen(wx.WHITE, 1, wx.LONG_DASH))
        dc.SetBrush(wx.Brush(wx.Colour(100, 100, 100), wx.SOLID))
        dc.DrawRectangle(self.c1.x, self.c1.y, self.c2.x - self.c1.x, self.c2.y - self.c1.y)

    def RegionSelected(self):
        if self.c1 is None or self.c2 is None:
            return False
        else:
            return True

    def TakeScreenshot(self, data):
        if isinstance(data, ScreenshotData):
            #dcScreen = wx.ScreenDC()
            #bmp = wx.Bitmap(data.width, data.height)
            #memDC = wx.MemoryDC()
            #memDC.SelectObject(bmp)
            #memDC.Blit(0, 0, data.width, data.height, dcScreen, data.x, data.y)
            #memDC.SelectObject(wx.NullBitmap)
            global app
            bmp = app.GetDesktop().GetSubBitmap(wx.Rect(data.x, data.y, data.width, data.height))
            img = bmp.ConvertToImage()
            filename = "/tmp/ocr-screenshot-" + time.strftime('%Y%m%d-%H%M%S') + ".png"
            img.SaveFile(filename, wx.BITMAP_TYPE_PNG)
        
#--------------------------------------------------------------------------------------------------------#

class Screenshoter(wx.App):
    bmp = None
    
    def OnInit(self):
        self.SaveDesktop()
        self.frame = MainFrame(None)
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
        if self.bmp.IsOk():
            return self.bmp

#--------------------------------------------------------------------------------------------------------#

class ScreenshotData:
    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height

#--------------------------------------------------------------------------------------------------------#

app = Screenshoter(False)
app.MainLoop()