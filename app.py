from flask import Flask, jsonify, render_template, redirect, request

import re



app = Flask(__name__)




@app.route("/")
def home():
    return render_template("landingpage.html")

@app.route("/dnn")
def dnn():
    return render_template("dnn.html")

@app.route("/predict", methods=['POST'])
def predict():
    handle = request.form['handle']
    algoname = request.form['algoname']
    print(f'Predicting for handle: {handle} via algorithm: {algoname}')
    return render_template("dnn.html")

@app.route("/buzzwordmap/<buzzword>")
def buzzwordmap(buzzword):
    print(f'map buzz word {buzzword}')
    return render_template("map_buzzwordmap.html", buzzword=buzzword)








if __name__ == "__main__":
    app.run(debug=True)