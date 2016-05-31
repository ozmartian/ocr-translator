import wx
from wx.html import HtmlWindow

class mofoHtmlFrame(wx.MiniFrame):
    def __init__(self, parent=None, id=-1):
        wx.MiniFrame.__init__(self, parent, id, title="Simple HTML", pos=(0, 0), size=(400, 350), style=wx.FRAME_TOOL_WINDOW | wx.BORDER_NONE)   
    
        self.html = HtmlWindow(self)
        self.html.SetStandardFonts(size=18, normal_face="helvetica", fixed_face="monospace")
        self.html.SetPage("<div align=\"center\" style=\"width:380px;height:330px;border:2px solid #666;\">Here is some <b>formatted</b> <i><u>text</u></i><br><br>and <font color=\"maroon\">in colour too</font>..</div>")
        self.Center()

class mofoApp(wx.App):
    def OnInit(self):
        self.frame = mofoHtmlFrame(None)
        self.frame.Show(True)
        self.SetTopWindow(self.frame)
        return True


MyApp = mofoApp(False)
MyApp.MainLoop()