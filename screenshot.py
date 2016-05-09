#!/usr/bin/env python2

import wx, sys, time
import pyscreenshot as ImageGrab

class SelectableFrame(wx.Frame):
    c1 = None
    c2 = None

    def __init__(self, parent=None, id=-1, title=""):
        #wx.Frame.__init__(self, parent, id, title, size=wx.DisplaySize(), style=wx.FRAME_NO_TASKBAR)
        wx.Frame.__init__(self, parent, id, title, pos=(0, 0), size=wx.DisplaySize(), style=wx.FRAME_NO_TASKBAR)

        self.panel = wx.Panel(self, size=self.GetSize())

        self.panel.Bind(wx.EVT_MOTION, self.OnMouseMove)
        self.panel.Bind(wx.EVT_LEFT_DOWN, self.OnMouseSelect)
        self.panel.Bind(wx.EVT_RIGHT_DOWN, self.OnReset)
        self.panel.Bind(wx.EVT_LEFT_UP, self.OnMouseUp)
        self.panel.Bind(wx.EVT_PAINT, self.OnPaint)

        self.panel.Bind(wx.EVT_KEY_DOWN, self.OnKeyDown)

        self.SetCursor(wx.StockCursor(wx.CURSOR_CROSS))

        self.panel.SetBackgroundColour(wx.Colour(0, 0, 0))
        self.panel.SetBackgroundStyle(wx.BG_STYLE_COLOUR)
        
        self.SetTransparent(150)

    
    def OnMouseMove(self, event):
        if event.Dragging() and event.LeftIsDown():
            self.c2 = event.GetPosition()
            self.Refresh()

    def OnMouseSelect(self, event):
        self.SetCursor(wx.StockCursor(wx.CURSOR_CROSS))
        self.c1 = event.GetPosition()

    def OnMouseUp(self, event):
        self.SetCursor(wx.StockCursor(wx.CURSOR_ARROW))
        
    def OnKeyDown(self, event):
        key = event.GetKeyCode()
        if key == wx.WXK_ESCAPE:
            sys.exit()
        elif key == wx.WXK_RETURN or key == wx.WXK_NUMPAD_ENTER:
            self.DoScreenshot()
        event.Skip()
        
    def OnReset(self, event=None):
        dc = wx.PaintDC(self.panel)
        dc.Clear()

    def OnPaint(self, event):
        if self.c1 is None or self.c2 is None:
            return

        dc = wx.PaintDC(self.panel)
        dc.SetPen(wx.Pen("white", 2, wx.LONG_DASH))
        dc.SetBrush(wx.Brush(wx.Colour(100, 100, 100), wx.SOLID))

        dc.DrawRectangle(self.c1.x, self.c1.y, self.c2.x - self.c1.x, self.c2.y - self.c1.y)
        
    def Done(self):
        self.OnReset()
        self.panel.Close()
        self.Close()

    def DoScreenshot(self):
        print("START: " + str(self.c1.x) + " " + str(self.c1.y))
        print("END: " + str(self.c2.x) + " " + str(self.c2.y))
        self.Done()
        #im = p.screenshot(region=(self.c1.x, self.c1.y, self.c2.x - self.c1.x, self.c2.y - self.c1.y))
        im = ImageGrab.grab(bbox=(self.c1.x, self.c1.y, self.c2.x, self.c2.y))
        filename = "/tmp/ocr-screenshot-" + time.strftime('%Y%m%d-%H%M%S') + ".png"
        im.save(filename)

        sys.exit(0)

class MyApp(wx.App):

    def OnInit(self):
        frame = SelectableFrame()
        frame.Show(True)
        self.SetTopWindow(frame)

        return True


app = MyApp(0)
app.MainLoop()
