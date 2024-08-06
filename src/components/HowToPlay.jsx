// src/components/HowToPlay.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HowToPlay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">How to Play</h1>
      <p className="text-2xl mb-6">Pop the bubble with the displayed number. You have 60 seconds to score as many points as possible.</p>
      <Link to="/" className="text-3xl font-bold bg-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default HowToPlay;
