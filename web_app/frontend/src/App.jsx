// src/App.jsx
import React from 'react';
import TrajectorySimulation from './TrajectorySimulation';
import Navbar from './Navbar.jsx';
const App = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <TrajectorySimulation />
            </div>
            <div>
                <div class="flex flex-row justify-around space-x-4 bg-slate-700 p-4">
                    <div class="w-1/3 bg-black text-white p-4 rounded shadow">
                        <h2 class="text-xl font-bold mb-2">Understanding Projectile Motion</h2>
                        <p class="text-base">
                            Projectile motion describes the motion of an object launched into the air and moving under the influence of gravity. The key factors include the initial velocity, the launch angle, and the acceleration due to gravity. The initial velocity is divided into horizontal and vertical components using trigonometric functions. The horizontal component is given by the initial velocity times the cosine of the launch angle, and the vertical component is given by the initial velocity times the sine of the launch angle.
                        </p>
                    </div>
                    <div class="w-1/3 bg-black text-white p-4 rounded shadow">
                        <h2 class="text-xl font-bold mb-2">Horizontal Motion</h2>
                        <p class="text-base">
                            The horizontal distance traveled by the projectile is determined by the horizontal velocity and time. Since there is no horizontal acceleration (assuming negligible air resistance), this component remains constant throughout the flight. This results in a uniform horizontal motion, simplifying the calculations of horizontal distance.
                        </p>
                    </div>
                    <div class="w-1/3 bg-black text-white p-4 rounded shadow">
                        <h2 class="text-xl font-bold mb-2">Vertical Motion</h2>
                        <p class="text-base">
                            The vertical motion of the projectile is influenced by gravity. The vertical position can be described by the initial vertical velocity times time minus one-half of the gravitational acceleration times the square of the time. This results in a parabolic trajectory, with the projectile reaching a peak height before descending back to the ground. The time of flight and maximum height can be calculated using these principles.
                        </p>
                    </div>
                </div>

            </div>
            <div>
            <footer className="bg-black text-white py-4 text-center">
            <div className="max-w-7xl mx-auto">
                <p>&copy; 2024 Medhir Aryan. All rights reserved.</p>
            </div>
        </footer>
            </div>
        </div>


    );
};

export default App;
