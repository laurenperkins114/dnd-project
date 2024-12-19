// /src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Dungeons & Dragons Dashboard</h1>
      {/* You can add other elements like a user avatar, notifications, or settings */}
    </div>
  );
};

export default Header;
