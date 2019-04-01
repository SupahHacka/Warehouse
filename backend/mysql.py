from flaskext.mysql import MySQL

db = MySQL()

class dataBase:

    db = db

    def __init__(self,app):
        app.config['MYSQL_DATABASE_USER'] = 'root'
        app.config['MYSQL_DATABASE_PASSWORD'] = 'Mysql_Clarification_77'
        app.config['MYSQL_DATABASE_DB'] = 'wareHouse'
        app.config['MYSQL_DATABASE_HOST'] = 'localhost'
        db.init_app(app)

    def select(self, queryStr):
        conn = db.connect()
        cursor = conn.cursor()
        cursor.execute(queryStr)

        data = cursor.fetchall()

        return data