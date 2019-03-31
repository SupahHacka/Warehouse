from flask import Flask, render_template, jsonify, request

app = Flask(__name__,
            static_folder = "./static",
            template_folder = "./template")

from backend.mysql import dataBase
db = dataBase(app)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/cms')
def content():
  res = db.query('SELECT cms_txt FROM cms_tbl')
  return jsonify(res)

@app.route('/login', methods=['POST'])
def login():
  from backend.user import logUser
  from backend.validate import valid

  vd = valid(request.form)
  log = logUser()  
  if vd.checkEmpty(vd.logUsername, vd.logPass):

    return jsonify(db.query("SELECT * FROM user_tbl WHERE username = '{0}' AND password = '{1}'".format(vd.logUsername.strip(),vd.logPass.strip())))

  else:
    return jsonify('No Data')

@app.route('register', methods=['POST'])
def register():
  from backend.user import logUser
  from backend.validate import valid

  vd = valid(request.form)
  log = logUser()
  if vd.checkEmpty(
                  vd.regUsername.strip(),
                  vd.regPassword.strip(),
                  vd.regPasswordClar.strip(),
                  vd.regEmail):
    pass
  else:
    pass

@app.errorhandler(404)
def not_found(e):
  return 'ERROR 404 : Not Found';

if __name__ == '__main__':
  app.run()