from .mysql import dataBase

class logUser(dataBase):
  
  def __init__(self):
    pass

  def login(self,username,password):
    super().query('SELECT * FROM user_tbl WHERE username = {0} AND password = {1}'.format(username,password))