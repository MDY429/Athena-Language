from flask import Flask, flash, redirect, jsonify, render_template, request, url_for
from flask_jsglue import JSGlue
import os
import re

# configure application
app = Flask(__name__)
JSGlue(app)

# ensure responses aren't cached
if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response

@app.route("/")
def index():
    """Render map."""
    if not os.environ.get("API_KEY"):
        raise RuntimeError("API_KEY not set")
    return render_template("index.html", key=os.environ.get("API_KEY"))

@app.route("/concept")
def concept():
    return render_template("concept.html")

@app.route("/history")
def history():
    return render_template("history.html")

@app.route("/environment")
def environment():
    return render_template("environment.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/activity")
def activity():
    return render_template("activity.html")

@app.route("/joinus")
def joinus():
    return render_template("joinus.html")

@app.route("/hire")
def hire():
    return render_template("hire.html")

@app.route("/teachers")
def teachers():
    return render_template("teachers.html")

@app.route("/classes")
def classes():
    return render_template("classes.html")

@app.route("/thanks")
def thanks():
    return render_template("thanks.html")
	
	
if __name__ == '__main__':
    app.run(debug=True)