#!/usr/bin/env python3

from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication
from PyQt5.QtWebKit import QWebSettings
from PyQt5.QtWebKitWidgets import QWebView

import sys, threading

try:
    from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
    from SimpleHTTPServer import SimpleHTTPRequestHandler
except ImportError:
    from http.server import SimpleHTTPRequestHandler, HTTPServer

def start_server():
    HandlerClass = SimpleHTTPRequestHandler
    ServerClass = HTTPServer
    Protocol = "HTTP/1.0"
    port = 23948
    server_address = ('127.0.0.1', port)

    HandlerClass.protocol_version = Protocol
    httpd = ServerClass(server_address, HandlerClass)
    httpd.serve_forever()

if __name__ == '__main__':
    t = threading.Thread(target=start_server)
    t.daemon = True
    t.start()
      
    app = QApplication(sys.argv) 
    view = QWebView()
    QWebSettings.globalSettings().setObjectCacheCapacities(0, 0, 0)
    view.show()
    view.setUrl(QUrl('http://127.0.0.1:23948/index.html')) 
    QWebSettings.globalSettings().setObjectCacheCapacities(0, 0, 1)

    sys.exit(app.exec_())