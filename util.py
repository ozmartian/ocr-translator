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

def SaveDesktop(shotdata):
    data = GetEntireDesktopRect(shotdata)
    data.bmp = wx.Bitmap(data.desktopRect.GetWidth(), data.desktopRect.GetHeight())
    dcScreen = wx.ScreenDC()
    memDC = wx.MemoryDC()
    memDC.SelectObject(data.bmp)
    memDC.Blit(0, 0, data.bmp.GetWidth(), data.bmp.GetHeight(), dcScreen, 0, 0)
    memDC.SelectObject(wx.NullBitmap)
    return data
    
#--------------------------------------------------------------------------------------------------------#

def GetEntireDesktopRect(data):
    totalWidth = 0
    maxHeight = 0
    minX = 0
    displays = (wx.Display(i) for i in range(wx.Display.GetCount()))
    screenRects = [display.GetGeometry() for display in displays]
    for rect in screenRects:
        totalWidth += rect.GetWidth()
        if rect.GetX() < minX: minX = rect.GetX()
        if rect.GetHeight() > maxHeight: maxHeight = rect.GetHeight()
    data.desktopRect = wx.Rect(minX, 0, totalWidth, maxHeight)
    return data

#--------------------------------------------------------------------------------------------------------#

def GetWorkingPath():
    if getattr(sys, 'frozen', False): return os.path.join(sys._MEIPASS)
    else: return os.path.dirname(os.path.realpath(sys.argv[0]))

#--------------------------------------------------------------------------------------------------------#

def WebServer(url, port):
    try:
        from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
        from SimpleHTTPServer import SimpleHTTPRequestHandler
    except ImportError:
        from http.server import SimpleHTTPRequestHandler, HTTPServer

    if getattr(sys, 'frozen', False):
        os.chdir(sys._MEIPASS)
        for r,d,f in os.walk(sys._MEIPASS): os.chmod(r, 0o755)
        
    HandlerClass = SimpleHTTPRequestHandler
    ServerClass = HTTPServer
    server_address = (url, port)
    HandlerClass.protocol_version = "HTTP/1.0"
    httpd = ServerClass(server_address, HandlerClass)
    httpd.serve_forever()
