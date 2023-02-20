from flask import Flask, render_template, redirect, make_response
import sys, os
import datetime
import math

index = os.path.abspath(os.path.join('..', 'templates'))

app = Flask(__name__)

@app.route('/')
def index():
    resp = make_response(render_template('index.html'))
    resp.set_cookie('been', 'true', max_age=86400)
    
    return resp

@app.route('/index')
def redirect_index():
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)