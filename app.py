from flask import Flask, render_template
from datetime import datetime
import requests


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/spiele")
def spiele():
    return render_template("spiele.html")


@app.route("/quiz")
def quiz():
    return render_template("quiz.html")


@app.route("/result")
def result():
    return render_template("result.html")




@app.context_processor
def inject_current_year():
    return {"current_year": datetime.now().year}


if __name__ == "__main__":
    app.run(debug=True)
