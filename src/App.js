// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component

const App = () => {
  return (
    <Router>
      <Routes> {/* Wrap your routes inside <Routes> */}
        <Route path="/" element={<Homepage />} /> {/* Use element prop to render component */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Define other routes similarly */}
      </Routes>
    </Router>
  );
};

export default App;
