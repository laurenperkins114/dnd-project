// /src/pages/HomePage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';  // Import the Header component
import { dashboardItems } from '../models/dashboardModel';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState(dashboardItems[0]); // Default to the first item

  return (
    <div className="flex flex-col h-screen">
      <Header /> {/* Place the header at the top */}
      <div className="flex flex-1">
        <Sidebar setCurrentSection={setCurrentSection} />
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">{currentSection.title}</h1>
          <div className="content-area">
            {/* Render the selected component */}
            <currentSection.component />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
