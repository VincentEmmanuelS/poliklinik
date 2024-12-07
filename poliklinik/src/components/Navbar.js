import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-500 position-sticky top-0 shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 text-white font-bold text-xl">Logo</div>
                <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                    <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
                </div>
            </div>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
