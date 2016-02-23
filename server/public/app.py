from flask import Flask, render_template, request, jsonify
from flask_restful import Resource, Api, reqparse
import logging
import sys
sys.stdout.flush()
app = Flask(__name__,  static_url_path='')
api = Api(app)
parser = reqparse.RequestParser()

@app.route('/')
def index():
    return render_template('index.html')

#
# @app.route('/api/scrapeUrl', methods=['POST'])
# def scrapeUrl():
#     app.logger.info(request.json)

@app.route('/api/scrapeUrl', methods=['POST'])
def scrapeUrl():
    json_data = request.__dict__
    app.logger.info(json_data)
    return {'hello': 'world'}

# class HelloWorld(Resource):
#     def get(self):
#         return {'hello': 'world'}
#     def post(self):
#         json_data = request.get_json()
#         #args = parser.parse_args()
#         app.logger.info(json_data)
#         return {'hello': 'world'} #json_data
#
# api.add_resource(HelloWorld, '/api/scrapeUrl')


if __name__ == '__main__':
    app.run(debug=True)

#!flask/bin/python
# from flask import Flask,  render_template, request
# import logging
#
# app = Flask(__name__)
#
# @app.route('/')
# def index():
#     return render_template('index.html')
#
# @app.route('/api/scrapeUrl', methods=['POST'])
# def create_task():
#     app.logger.info(request)
#
# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask, render_template
#
# app = Flask(__name__)
#
# @app.route('/')
# def index():
#     return render_template('index.html')
#
# if __name__ == '__main__':
#     app.run(debug=True)
