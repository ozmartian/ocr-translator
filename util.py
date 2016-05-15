#!/usr/bin/env python

import glob, os, sys

#--------------------------------------------------------------------------------------------------------#

def DeleteFiles(path):
    try:
        filelist = glob.glob(path)
        for file in filelist:
            os.remove(file)
    except:
        print("Error deleting file " + path + ":", sys.exc_info()[0])

#--------------------------------------------------------------------------------------------------------#

def GetFileNameFromPath(path):
    return path.split('\\').pop().split('/').pop()
    
#--------------------------------------------------------------------------------------------------------#

def Cleanup():
    temppath = os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), "tmp", "**")
    DeleteFiles(temppath)