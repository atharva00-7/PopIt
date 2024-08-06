// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HowToPlay from './components/HowToPlay';
import BubbleGame from './components/BubbleGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/game" element={<BubbleGame />} />
      </Routes>
    </Router>
  );
}

export default App;
