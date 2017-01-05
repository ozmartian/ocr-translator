@echo off

cd ..
nuitka --recurse-all --remove-output --windows-disable-console --windows-icon=www\img\app-icon.ico ocrtranslator.py
