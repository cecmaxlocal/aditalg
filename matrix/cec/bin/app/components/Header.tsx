
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 text-center">
      <h1 className="font-orbitron text-5xl font-bold tracking-wider">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Aditalg
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-400">AI Digital Art Gallery</p>
    </header>
  );
};

export default Header;
