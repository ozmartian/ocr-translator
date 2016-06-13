@echo off

echo.
echo     [1] wxPython (GTK)
echo     [2] PyQt5 (Qt)
echo.
set /P M="    Select a UI toolkit? [1-2] "

if %M%==2 ( set LAUNCHER=run-qt5.py )
if %M%==1 ( set LAUNCHER=run-gtk.py )

rd /s /q .\final > NUL
rd /s /q .\work > NUL

rem copy _build\ocrtranslator.spec .
rem sed -i -e "s/|LAUNCHER|/%LAUNCHER%/" ocrtranslator.spec

pyinstaller --onedir --windowed --icon=..\img\app-icon.ico --workpath=.\work --distpath=.\final .\build.spec
