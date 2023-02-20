from flask import Flask, render_template, redirect, make_response
import sys, os
import datetime
import math

index = os.path.abspath(os.path.join('..', 'templates'))

app = Flask(__name__)

@app.route('/')
def index():
    resp = make_response(redirect('https://hub.doare.xyz'))
    resp.set_cookie('been', 'true', max_age=86400)
    
    return resp

@app.route('/new')
def new():
    return render_template('doarexyz.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True)