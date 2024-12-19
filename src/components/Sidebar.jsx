import React, { useState } from 'react';
import { dashboardItems } from '../models/dashboardModel';
import { FaClipboardList, FaDiceD20, FaMapSigns, FaHeart, FaCogs, FaUserAlt, FaFolderOpen, FaClipboardCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Sidebar = ({ setCurrentSection, currentSectionId }) => {
  const [isExpanded, setIsExpanded] = useState(true); // To track if the sidebar is expanded or minimized

  // Function to map the icon based on the section
  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <FaClipboardList />;
      case 2:
        return <FaDiceD20 />;
      case 3:
        return <FaMapSigns />;
      case 4:
        return <FaHeart />;
      case 5:
        return <FaClipboardCheck />;
      case 6:
        return <FaFolderOpen />;
      case 7:
        return <FaUserAlt />;
      case 8:
        return <FaClipboardList />;
      case 9:
        return <FaCogs />;
      default:
        return <FaClipboardList />;
    }
  };

  // Toggle function for expanding/collapsing the sidebar
  const toggleSidebar = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div
      className={`bg-gray-800 text-white p-4 relative`}
    >
      <ul className="flex flex-col items-center">
        {dashboardItems.map((item) => (
          <li
            key={item.id}
            className={`p-2 cursor-pointer flex items-center ${item.id === currentSectionId ? 'bg-blue-600' : 'hover:bg-gray-600'} w-full`}
            onClick={() => setCurrentSection(item)}
          >
            {/* Icon */}
            <span
              className={`mr-2 ${isExpanded ? 'block' : 'inline-block'} text-2xl`}
              style={{
                fontSize: '24px', // Fixed icon size (24px for both states)
              }}
            >
              {getIcon(item.id)}
            </span>
            
            {/* Title */}
            <span
              className={`${isExpanded ? 'block' : 'hidden'} ml-2`}
              style={{
                whiteSpace: isExpanded ? 'normal' : 'nowrap', // Control wrapping
                overflow: 'hidden',                           // Hide overflowed text
                textOverflow: 'ellipsis',                     // Show ellipsis if text overflows
                visibility: isExpanded ? 'visible' : 'hidden', // Hide title while collapsed
              }}
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>

      {/* Toggle Button */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-4" // Fixed position for button at the bottom center
      >
        <button
          onClick={toggleSidebar} // Switches the sidebar state
          className="bg-gray-600 text-white rounded-full p-2"
        >
          {isExpanded ? <FaArrowLeft /> : <FaArrowRight />} {/* Toggle button icon */}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
