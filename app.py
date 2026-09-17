from flask import Flask, render_template
from datetime import datetime
import requests

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/spiele")
def spiele():
    return (render_template("spiele.html"))


@app.route("/spiele/kartenpaare")
def kartenpaare():
    return render_template("kartenpaare.html")


@app.route("/spiele/merk_mix")
def merk_mix():
    return (render_template("merk_mix.html"))


@app.route("/spiele/augenblick")
def augenblick():
    return render_template("augenblick.html")


@app.route("/spiele/alltags-reihenfolge")
def alltags_reihenfolge():
    return render_template("alltags_reihenfolge.html")


@app.route("/garden")
def garden():
    return (render_template("garden.html"))


@app.route("/fortschritt")
def fortschritt():
    return render_template("fortschritt.html")


@app.context_processor
def inject_current_year():
    return {"current_year": datetime.now().year}


if __name__ == "__main__":
    app.run(debug=True)
