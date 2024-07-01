import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import './animation.css';
import backgroundImage from './images/wp4924046-react-js-wallpapers.jpg'; // Import your image file

const TrajectorySimulation = () => {
    const [velocity, setVelocity] = useState(20);
    const [angle, setAngle] = useState(45);
    const [simulationData, setSimulationData] = useState({
        trajectoryPoints: [],
        flightTime: 0,
        horizontalDistance: 0,
    });
    const [animatedPoints, setAnimatedPoints] = useState([]);
    const intervalRef = useRef(null);

    useEffect(() => {
        // Clean up interval on component unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/calculate_trajectory', { velocity, angle });
            const { trajectory, time, distance } = response.data;
            setSimulationData({
                trajectoryPoints: trajectory,
                flightTime: time,
                horizontalDistance: distance,
            });
            animateTrajectory(trajectory);
        } catch (error) {
            console.error('Error calculating trajectory:', error);
        }
    };

    const animateTrajectory = (trajectory) => {
        setAnimatedPoints([]);
        let index = 0;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            if (index < trajectory.length) {
                setAnimatedPoints(prevPoints => {
                    const newPoints = [...prevPoints, trajectory[index]];
                    if (index === trajectory.length - 1) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    return newPoints;
                });
                index++;
            } else {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }, 50);
    };

    return (
        <div className="p-4 bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className="flex items-center mb-4">
                <h1 className="text-2xl font-bold mr-4 text-white">Projectile Motion Simulation</h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2 text-lg text-white">
                        Initial Velocity (m/s):
                        <input
                            type="number"
                            value={velocity}
                            onChange={(e) => setVelocity(parseFloat(e.target.value))}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        />
                    </label>
                </div>
                <div>
                    <label className="block mb-2 text-lg text-white">
                        Launch Angle (degrees):
                        <input
                            type="number"
                            value={angle}
                            onChange={(e) => setAngle(parseFloat(e.target.value))}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        />
                    </label>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Simulate
                    </button>
                </div>
            </form>
            <div className="flex justify-center mt-8">
                <div className="flex flex-col items-center">
                    <div id="plot">
                        <Plot
                            data={[
                                {
                                    type: 'scatter',
                                    mode: 'lines',
                                    x: animatedPoints.map(point => point.x),
                                    y: animatedPoints.map(point => point.y),
                                    marker: { color: 'blue' },
                                }
                            ]}
                            layout={{
                                width: 800,
                                height: 400,
                                title: 'Projectile Motion Trajectory',
                                xaxis: { title: 'Horizontal Distance (m)', titlefont: { color: 'white' } },
                                yaxis: { title: 'Vertical Height (m)', titlefont: { color: 'white' } },
                                margin: { t: 50 },
                                plot_bgcolor: 'rgba(0, 0, 0, 0)',
                                paper_bgcolor: 'rgba(0, 0, 0, 0)',
                                font: { color: 'white' }
                            }}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="text-lg text-white">Flight Time: {simulationData.flightTime.toFixed(2)} seconds</p>
                        <p className="text-lg text-white">Horizontal Distance: {simulationData.horizontalDistance.toFixed(2)} meters</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrajectorySimulation;
