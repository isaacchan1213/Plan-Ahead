from flask import Flask
app = Flask(__name__)

@app.route("/") #Decorator. "/" for homepage
@app.route("/home") # / and /home are the same page
def home():
    return "<h1>Hello World<h1>"

@app.route("/about") #Decorator. "/" for homepage
def about():
    return "<h1>About Page<h1>"


if __name__ == '__main__':
    app.run(debug=True)

# export FLASK_APP=flask_test.py
# flask run

# export FLASK_APP=flask_test.py
# export FLASK_DEBUG=1
# flask run