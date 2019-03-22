from flask import Flask, render_template, jsonify, request

app = Flask(__name__,
            static_folder = "./static",
            template_folder = "./template")

from backend.mysql import dataBase, cms
cms = cms(app)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/cms')
def content():
  res = cms.select('SELECT cms_txt FROM cms_tbl')
  return jsonify(res)

@app.route('/login', methods=['POST'])
def login():
  from backend.validate import valid, logUser

  log = logUser(request.form)
  if log.checkEmpty(log.logUsername) & log.checkEmpty(log.logPass):
    return jsonify(True)
  else:
    return jsonify(False)

@app.errorhandler(404)
def not_found(e):
  return 'ERROR_404_Not_Found';

if __name__ == '__main__':
  app.run()