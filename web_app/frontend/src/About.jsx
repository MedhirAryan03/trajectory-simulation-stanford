import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to our Trajectory Simulation app! This application is designed to help you understand the physics of projectile motion. By adjusting the initial velocity and launch angle, you can see how the trajectory of a projectile changes.
                </p>
                <p className="text-gray-700 mb-4">
                    Our goal is to provide a simple and interactive way for students and enthusiasts to visualize and learn about the principles of projectile motion.
                </p>
                <p className="text-gray-700 mb-4">
                    We hope you find this tool useful for your studies and experiments. If you have any questions or feedback, feel free to reach out to us.
                </p>
                <p className="text-gray-700">
                    Thank you for using our app!
                </p>
            </div>
        </div>
    );
};

export default About;
