#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import signal
import sys
from atexit import register

from PyQt5.QtWidgets import QApplication

from .main import Cleanup, OCRTranslator

signal.signal(signal.SIGINT, signal.SIG_DFL)
signal.signal(signal.SIGTERM, signal.SIG_DFL)

def main():
    register(Cleanup)
    app = QApplication(sys.argv)
    app.setOrganizationName("OCR Translator")
    app.setOrganizationDomain("com.ozmartians.OCRTranslator")
    app.setApplicationName("OCR Translator")
    app.setQuitOnLastWindowClosed(True)
    translator = OCRTranslator()
    translator.show()
    sys.exit(app.exec_())