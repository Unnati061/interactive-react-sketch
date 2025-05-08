
import React from 'react';

interface StatusBarProps {
  time?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time = "9:41" }) => {
  return (
    <div className="status-bar">
      <div className="text-sm font-medium">{time}</div>
      <div className="flex items-center gap-1">
        <div className="h-3 w-3 rounded-full bg-white"></div>
        <div className="h-3 w-3 rounded-full bg-white"></div>
        <div className="h-3 w-3 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default StatusBar;
