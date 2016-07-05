@echo off

rd /s /q .\final > NUL
rd /s /q .\work > NUL

pyinstaller --onefile --windowed --icon=..\src\www\img\app-icon.ico --workpath=.\work --distpath=.\final .\build.WIN.spec
