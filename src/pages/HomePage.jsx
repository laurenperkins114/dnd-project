// /src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to the Home Page!</h1>
        <p className="text-center text-lg text-gray-700">You're logged in successfully!</p>
      </div>
    </div>
  );
};

export default HomePage;
