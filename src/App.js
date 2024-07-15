import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Instructions from './pages/Instructions';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
