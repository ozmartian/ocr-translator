# -*- mode: python -*-

data_files = [
    ( 'css', 'css' ),
    ( 'img', 'img' ),
    ( 'js', 'js' ),
    ( 'temp', 'temp' ),
    ( 'index.html', '.' )
]

block_cipher = None

a = Analysis(['run-qt5.py '],
             pathex=['c:\\DEV\\ocr-translator'],
             binaries=None,
             datas=data_files,
             hiddenimports=[],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name='OCRTranslator',
          debug=False,
          strip=False,
          upx=True,
          console=False , icon='img\\app-icon.ico')
