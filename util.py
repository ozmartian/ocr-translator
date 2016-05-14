import glob, os, sys

def DeleteFiles(path):
    try:
        filelist = glob.glob(path)
        for file in filelist:
            os.remove(file)
    except:
        print("Error deleting file " + path + ":", sys.exc_info()[0])
        #raise