#!/usr/bin/env python3

import webview
import sys
import threading

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
    
    webview.create_window("OCR Translator", "http://127.0.0.1:23948/index.html", width=800, height=600, resizable=True, min_size=(400, 200))
    sys.exit()