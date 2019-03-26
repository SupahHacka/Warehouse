from .validate import valid
from .mysql import dataBase

class logUser(valid,dataBase):
  
  def __init__(self, dictionary):
    valid.__init__(dictionary)

  def checkEmpty(self, *args):
    return super().checkEmpty(args)