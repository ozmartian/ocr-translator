@echo off

echo.
echo     [1] wxPython (GTK)
echo     [2] PyQt5 (Qt)
echo.
set /P M="    Select a UI toolkit? [1-2] "

if %M%==2 ( set LAUNCHER=run-qt5.py )
if %M%==1 ( set LAUNCHER=run-gtk.py )

rd /s /q _build\final > NUL
rd /s /q _build\work > NUL

copy _build\ocrtranslator.spec .

sed -i -e "s/|LAUNCHER|/%LAUNCHER%/" ocrtranslator.spec

pyinstaller --onefile --windowed --icon=img\app-icon.ico --workpath=_build\work --distpath=_build\final ocrtranslator.spec
