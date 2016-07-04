# -*- mode: python -*-

import os
import platform
import sys


sys.path.append("")

block_cipher = None

data_files = [
    ('../src/resources', 'resources'),
    ('../src/www/css', 'www/css'),
    ('../src/www/img', 'www/img'),
    ('../src/www/js', 'www/js'),
    ('../src/www/temp', 'www/temp'),
    ('../src/www/index.html', 'www/')
]

a = Analysis(['..\\src\\ocrtranslator.py'],
             pathex=['C://DEV//ocr-translator//src'],
             binaries=[],
             datas=data_files,
             hiddenimports=[],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher)

pyz = PYZ(a.pure)

exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name='ocrtranslator',
          debug=False,
          strip=False,
          upx=False,
          console=False )
