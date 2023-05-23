from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
app.config['DEBUG'] = True

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/data', methods=['GET'])
def get_data():
    response = requests.get('https://courselistings.wpi.edu/assets/prod-data.json')
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run()
