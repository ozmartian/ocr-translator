# -*- mode: python -*-

data_files = [
    ('../src/ocrtranslator/www/css', 'www/css'),
    ('../src/ocrtranslator/www/img', 'www/img'),
    ('../src/ocrtranslator/www/js', 'www/js'),
    ('../src/ocrtranslator/www/temp', 'www/temp'),
    ('../src/ocrtranslator/www/index.html', 'www/')
]

a = Analysis(['../src/ocrtranslator.py'],
             pathex=['/home/ozmartian/Projects/src/ocr-translator/src'],
             binaries=None,
             datas=data_files,
             hiddenimports=['PyQt5.QtWebEngineCore'],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=None)

pyz = PYZ(a.pure)

exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name='ocrtranslator',
          debug=False,
          strip=True,
          upx=True,
          console=False,
          icon='../src/ocrtranslator/www/img/app-icon.png')