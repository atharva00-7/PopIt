import React, { useState, useEffect, useRef } from 'react';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const BubbleGame = () => {
    const [bubbles, setBubbles] = useState([]);
    const [targetNumber, setTargetNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameOver, setGameOver] = useState(false);
    const timerRef = useRef(null);
    const clickSound = useRef(new Audio('/sounds/clickSound.wav'))
    useEffect(() => {
        resetGame();
        startTimer();
        return () => clearInterval(timerRef.current); // Clean up on unmount
    }, []);

    const resetGame = () => {
        const newBubbles = Array.from({ length: 25 }, () => generateRandomNumber(1, 9));
        setBubbles(newBubbles);
        setTargetNumber(newBubbles[generateRandomNumber(0, newBubbles.length - 1)]);
    };

    const handleBubbleClick = (number) => {
        if (!gameOver && number === targetNumber) {
            setScore(score + 1);
            resetGame();
            clickSound.current.play();
        }
    };

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    clearInterval(timerRef.current);
                    setGameOver(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Bubble Popping Game</h1>
            {gameOver ? (
                <div className="text-center text-white">
                    <p className="text-4xl mb-4">Game Over!</p>
                    <p className="text-3xl mb-4">Your score: <span className="font-extrabold">{score}</span></p>
                </div>
            ) : (
                <>
                    <p className="text-2xl text-white mb-4">Pop the bubble with number: <span className="font-extrabold">{targetNumber}</span></p>
                    <p className="text-2xl text-white mb-4">Time left: <span className="font-extrabold">{timeLeft}s</span></p>
                    <p className="text-2xl text-white mb-4">Score: <span className="font-extrabold">{score}</span></p>
                    <div className="grid grid-cols-5 gap-4">
                        {bubbles.map((number, index) => (
                            <button
                                key={index}
                                onClick={() => handleBubbleClick(number)}
                                className={`w-20 h-20 bg-white text-purple-500 text-2xl font-extrabold rounded-full flex items-center justify-center shadow-lg transition transform ${!gameOver && 'hover:scale-110'
                                    }`}
                                disabled={gameOver}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default BubbleGame;
