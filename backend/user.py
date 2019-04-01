from .mysql import dataBase
from werkzeug.security import generate_password_hash as gen

class logUser(dataBase):

  username = ''
  password = ''
  email = ''
  user_type = ''
  pepper = 'dfjkhsukfhsiudfh$***fsdliuhjslukf!$$^$asdlkjhaskdjfhakhjfgakhjsfg'
  
  def __init__(self, username=None, password=None, email=None, acc_type=None):
    self.username = username
    passToHash = password + self.pepper
    self.password = gen(passToHash)
    self.email = email
    self.user_type = acc_type

  def getPass(self):
    return self.password

  def login(self,query):

    data = super().select(query)
    if len(data) > 0:

      pass

    else:
      return False

  def addUser(self):
    try:
      conn = super().db.connect()
      cursor = conn.cursor()

      cursor.execute("""
        SELECT username FROM user_tbl 
        WHERE username = %s AND email = %s""",
        (self.username,self.email))

      data = cursor.fetchall()

      if len(data) == 0:
        conn = super().db.connect()
        cursor = conn.cursor()
        cursor.execute("""
        INSERT INTO 
        user_tbl(username,password,email,user_type) 
        VALUES(%s,%s,%s,%s)""", 
        (self.username,self.password,self.email,self.user_type))

        conn.commit()
        return True

      else:

        return 'Exists'

    except Exception as e:
      return str(e)
    