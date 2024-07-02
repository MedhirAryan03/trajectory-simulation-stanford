import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Centered Trajectory Simulation */}
                    <div className="flex items-center justify-center flex-1">
                        <span className="text-white text-lg font-medium">
                            Trajectory Simulation
                        </span>
                    </div>
                    
                    {/* Right-side Links (GitHub and LinkedIn) */}
                    <div className="flex items-center space-x-4 ml-auto">
                        <a
                            href="https://www.github.com/MedhirAryan03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/medhir-aryan-1b330826b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            LinkedIn
                        </a>
                        {/* Add more links as needed */}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                        href="https://www.github.com/MedhirAryan03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/medhir-aryan-1b330826b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        LinkedIn
                    </a>
                    {/* Add more mobile menu links as needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
