from flaskext.mysql import MySQL

db = MySQL()

class dataBase:

  def __init__(self,app):
    app.config['MYSQL_DATABASE_USER'] = 'root'
    app.config['MYSQL_DATABASE_PASSWORD'] = 'Mysql_Clarification_77'
    app.config['MYSQL_DATABASE_DB'] = 'wareHouse'
    app.config['MYSQL_DATABASE_HOST'] = 'localhost'
    db.init_app(app)

class cms(dataBase):
  def __init__(self,app):
    super().__init__(app)

  def select(self,query):
    conn = db.connect()
    cursor = conn.cursor()
    cursor.execute(query)

    data = cursor.fetchall()

    return data