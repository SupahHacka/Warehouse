from flask import Flask, render_template

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