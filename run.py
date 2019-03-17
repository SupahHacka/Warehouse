from flask import Flask, render_template, jsonify

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
  query = 'SELECT cms_txt FROM cms_tbl'
  return str(cms.select(query))

@app.errorhandler(404)
def not_found(e):
    return 'ERROR_404_Not_Found';

if __name__ == '__main__':
  app.run()