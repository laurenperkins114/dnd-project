// /src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import required components
import LoginPage from './pages/LoginPage'; // Import LoginPage
import HomePage from './pages/HomePage'; // Import HomePage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Route for LoginPage */}
        <Route path="/home" element={<HomePage />} /> {/* Route for HomePage */}
      </Routes>
    </Router>
  );
};

export default App;
