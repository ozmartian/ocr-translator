# -*- mode: python -*-

data_files = [
    ('../www/css', 'www/css'),
    ('../www/img', 'www/img'),
    ('../www/js', 'www/js'),
    ('../www/temp', 'www/temp'),
    ('../www/index.html', 'www/')
]

a = Analysis(['../ocr-translator.py'],
             pathex=['/home/ozmartian/Projects/ocr-translator'],
             binaries=None,
             datas=data_files,
             hiddenimports=[],
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
          name='ocr-translator',
          debug=False,
          strip=True,
          upx=True,
          console=False,
          icon='../www/img/app-icon.png')
