// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Bubble Popping Game</h1>
            <div className="flex flex-col space-y-4">
                <Link to="/game" className="text-3xl font-bold text-white bg-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition">
                    Start Game
                </Link>
                <Link to="/how-to-play" className="text-3xl font-bold text-white bg-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition">
                    How to Play
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
