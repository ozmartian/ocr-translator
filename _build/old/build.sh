#!/bin/bash

[ -d ./final ] && rm -rf ./final
[ -d ./work ] && rm -rf ./work

 pyinstaller --onefile --windowed --workpath=./work --distpath=./final ./build.spec
