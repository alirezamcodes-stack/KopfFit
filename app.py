from datetime import datetime
from pathlib import Path

from flask import Flask, render_template


app = Flask(__name__)


# ==================================================
# MAIN PAGES
# ==================================================

@app.route("/")
def home():
    return render_template("home.html")


@app.route("/spiele")
def spiele():
    return render_template("spiele.html")


@app.route("/garden")
def garden():
    return render_template("garden.html")


@app.route("/fortschritt")
def fortschritt():
    return render_template("fortschritt.html")


# ==================================================
# GAME PAGES
# ==================================================

@app.route("/spiele/kartenpaare")
def kartenpaare():
    return render_template("kartenpaare.html")


@app.route("/spiele/augenblick")
def augenblick():
    return render_template("augenblick.html")


@app.route("/spiele/alltags-reihenfolge")
def alltags_reihenfolge():
    return render_template("alltags_reihenfolge.html")


@app.route("/spiele/merk_mix")
def merk_mix():
    image_folder = (
        Path(app.static_folder)
        / "images"
        / "games"
        / "merk_mix"
    )

    image_files = []

    for file in image_folder.iterdir():
        if file.is_file() and file.suffix.lower() == ".png":
            image_files.append(file.name)

    return render_template(
        "merk_mix.html",
        image_files=image_files,
    )


# ==================================================
# GLOBAL TEMPLATE DATA
# ==================================================

@app.context_processor
def inject_current_year():
    return {
        "current_year": datetime.now().year,
    }


# ==================================================
# START APPLICATION
# ==================================================

if __name__ == "__main__":
    app.run(debug=True)