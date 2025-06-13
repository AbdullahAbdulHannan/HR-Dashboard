import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  LineChart, 
  Brain, 
  Menu, 
  X, 
  Home,
  Sun,
  Moon
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
const menuItems = [
  { title: 'Dashboard', path: '/', icon: 'home' },
  { title: 'Employee Management', path: '/employees', icon: 'users' },
  { title: 'Talent Acquisition', path: '/talent', icon: 'userPlus' },
  { title: 'Performance', path: '/performance', icon: 'lineChart' },
];

const Sidebar= () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'home': return <Home size={20} />;
      case 'users': return <Users size={20} />;
      case 'userPlus': return <UserPlus size={20} />;
      case 'lineChart': return <LineChart size={20} />;
      case 'brain': return <Brain size={20} />;
      default: return <Home size={20} />;
    }
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={toggleMobileSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md lg:hidden bg-white dark:bg-gray-800 shadow-md"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full z-50
          ${expanded ? 'w-64' : 'w-20'} 
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          transition-all duration-300 ease-in-out
          bg-white dark:bg-gray-800 shadow-lg
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo and toggle */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="bg-indigo-600 text-white p-2 rounded-md">
                <Users size={expanded ? 24 : 20} />
              </div>
              {expanded && <h1 className="ml-2 font-bold text-lg">HR System</h1>}
            </div>
            <button 
              onClick={toggleSidebar}
              className="hidden lg:block p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-5 px-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center p-3 rounded-md transition-colors
                      ${isActive 
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    <span className="flex-shrink-0">{getIcon(item.icon)}</span>
                    {expanded && <span className="ml-3">{item.title}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

         
        </div>
      </aside>
    </>
  );
};

export default Sidebar;