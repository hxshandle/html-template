# created by Handle
import sys,getopt,os,shutil

def createProject(pName,pPath):
  targetPath = os.path.join(pPath,pName)
  #print "Generate ",pName,"-->",targetPath
  srcPath = os.path.abspath(os.path.join(os.path.dirname("__file__"),os.path.pardir,'templates/default'))
  #print os.path.abspath(os.path.join(os.path.dirname("__file__"),os.path.pardir,'templates/default'))
  shutil.copytree(srcPath,targetPath)
  #print "DONE"



def main(argv):
  try:
    opts, args = getopt.getopt(argv, 'h:i:p', ['help'])
    createProject(args[0],args[1])
  except err:
    #print err
    pass
  pass

if __name__ == "__main__":
  main(sys.argv[1:])
