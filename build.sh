#!/bin/bash

function menu() {
    echo -e "\n       [1] wxPython (GTK)"
    echo -e "       [2] PyQt5 (Qt)\n"
    read -p "    Select a UI toolkit? [1-2] " choice
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
sed -i -e "s/|LAUNCHER|/${LAUNCHER}/" ./ocrtranslator.spec

pyinstaller --clean --onefile --workpath=_build/work --distpath=_build/final ./ocrtranslator.spec
