# -*- mode: python -*-

import os
import platform
import sys
sys.path.append("../")

block_cipher = None

data_files = [
    ('../css', 'css'),
    ('../img', 'img'),
    ('../js', 'js'),
    ('../temp', 'temp'),
    ('../index.html', '.')
]

a = Analysis(['../main.py'],
             pathex=['/home/ozmartian/Projects/ocr-translator'],
             binaries=None,
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
          console=False , icon='../img/app-icon.png')
