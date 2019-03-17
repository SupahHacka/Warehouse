from flask import Flask, render_template
from flaskext.mysql import MySQL

mysql = MySQL()
mysql.init_app(app)

from backend import cms

app = Flask(__name__,
            static_folder = "./static",
            template_folder = "./template")

@app.route('/')
def index():
    return render_template("index.html")

@app.errorhandler(404)
def not_found(e):
    return 'ERROR_404_Not_Found';

if __name__ == '__main__':
  app.run()