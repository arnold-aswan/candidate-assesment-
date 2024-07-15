import React from 'react';
import { Link } from 'react-router-dom';

// Test comment

const Header = () => (
  <header className="mb-4">
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="text-lg font-semibold">
          Simple Formations Limited.
        </Link>
      </div>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/instructions">Instructions</Link>
      </div>
    </nav>
  </header>
);

export default Header;
