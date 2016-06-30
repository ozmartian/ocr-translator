#!/bin/bash

[ -d ./final ] && rm -rf ./final
[ -d ./work ] && rm -rf ./work

 pyinstaller --onefile --windowed --icon=../src/ocrtranslator/www/img/app-icon.png --workpath=./work --distpath=./final ./build.spec
