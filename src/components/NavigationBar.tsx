
import React from 'react';
import { Home, Search, Plus, Heart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const iconClass = (path: string) => {
    return `w-6 h-6 ${isActive(path) ? 'text-travel-blue' : 'text-gray-400'}`;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-travel-card h-16 flex items-center justify-around max-w-md mx-auto border-t border-travel-black">
      <Link to="/" className="flex flex-col items-center">
        <Home className={iconClass('/')} />
      </Link>
      <Link to="/search" className="flex flex-col items-center">
        <Search className={iconClass('/search')} />
      </Link>
      <Link to="/create" className="flex flex-col items-center">
        <div className="bg-travel-blue rounded-full p-3 -mt-6">
          <Plus className="w-6 h-6 text-white" />
        </div>
      </Link>
      <Link to="/favorites" className="flex flex-col items-center">
        <Heart className={iconClass('/favorites')} />
      </Link>
      <Link to="/profile" className="flex flex-col items-center">
        <User className={iconClass('/profile')} />
      </Link>
    </div>
  );
};

export default NavigationBar;
