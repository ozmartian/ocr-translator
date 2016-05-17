#!/bin/bash

function menu() {
    echo -e "\n       [1] wxPython (GTK)"
    echo -e "       [2] PyQt5 (Qt)\n"
<<<<<<< 495f0ea962483d1c16f763a340b8b927d954b73d
    read -p "    Select a UI toolkit? [1-2] " choice
=======
    read -p "    Select a toolkit? [1-2] " choice
>>>>>>> pyinstaller fixes, now working as self hosted desktop app on Linux.. Windows to be tested
}

if [ -z "$1" ]; then menu; else choice=$1; fi

case $choice in
    1 )
        LAUNCHER=run-gtk.py
        ;;
    2 )
        LAUNCHER=run-qt5.py
        ;;
esac

rm -rf _build/final _build/work

cp -f _build/ocrtranslator.spec .
<<<<<<< 495f0ea962483d1c16f763a340b8b927d954b73d
sed -i -e "s/|LAUNCHER|/${LAUNCHER}/" ./ocrtranslator.spec

pyinstaller --workpath=_build/work --distpath=_build/final ./OCRTranslator.spec
=======
sed -i -e "s/LAUNCHER/${LAUNCHER}/" ./ocrtranslator.spec

pyinstaller --workpath=_build/work --distpath=_build/final ./ocrtranslator.spec
>>>>>>> pyinstaller fixes, now working as self hosted desktop app on Linux.. Windows to be tested
