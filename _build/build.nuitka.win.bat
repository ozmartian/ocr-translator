@echo off

cd ..\src
nuitka --recurse-all --remove-output --windows-disable-console --windows-icon=www\img\app-icon.ico ocrtranslator.py
