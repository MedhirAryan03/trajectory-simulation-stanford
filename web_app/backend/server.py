from flask import Flask, jsonify, request
from flask_cors import CORS
import math

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/calculate_trajectory', methods=['POST'])
def calculate_trajectory():
    data = request.get_json()
    velocity = float(data['velocity'])
    angle = float(data['angle'])
    
    # Constants
    g = 9.81  # acceleration due to gravity (m/s^2)
    
    # Convert angle to radians
    theta = math.radians(angle)
    
    # Calculate time of flight
    time_of_flight = 2 * velocity * math.sin(theta) / g
    
    # Calculate horizontal distance
    horizontal_distance = velocity ** 2 * math.sin(2 * theta) / g
    
    # Generate trajectory points (assuming uniform time intervals)
    num_points = 100
    time_interval = time_of_flight / num_points
    trajectory = []
    for t in range(num_points + 1):
        x = velocity * math.cos(theta) * t * time_interval
        y = velocity * math.sin(theta) * t * time_interval - 0.5 * g * (t * time_interval) ** 2
        trajectory.append({'x': x, 'y': y})
    
    return jsonify({
        'trajectory': trajectory,
        'time': time_of_flight,
        'distance': horizontal_distance
    })

if __name__ == '__main__':
    app.run(debug=True)
