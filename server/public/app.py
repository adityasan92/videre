from flask import Flask, render_template

import os
temp_folder = os.path.abspath(__file__)
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
