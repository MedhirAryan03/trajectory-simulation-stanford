import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-lg text-gray-700">Name:</label>
                        <p className="text-lg text-gray-900">Your Name Here</p>
                    </div>
                    <div>
                        <label className="block mb-2 text-lg text-gray-700">Email:</label>
                        <p className="text-lg text-gray-900">your.email@example.com</p>
                    </div>
                    <div>
                        <label className="block mb-2 text-lg text-gray-700">Message:</label>
                        <p className="text-lg text-gray-900">Feel free to reach out to us for any inquiries or support.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
