
import React from 'react';
import { Activity } from '../types';
import { Clock, MapPin } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  onClick?: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  return (
    <div 
      className="bg-travel-card rounded-xl overflow-hidden cursor-pointer mb-3"
      onClick={onClick}
    >
      <div className="flex">
        <div className="w-24 h-24">
          <img 
            src={activity.image} 
            alt={activity.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 flex-1">
          <h4 className="font-medium text-sm">{activity.name}</h4>
          <div className="flex items-center text-xs text-gray-400 mt-1">
            <Clock className="w-3 h-3 mr-1" />
            <span>{activity.timing}</span>
          </div>
          <div className="flex items-center text-xs text-gray-400 mt-1">
            <Clock className="w-3 h-3 mr-1" />
            <span>{activity.duration}</span>
          </div>
          <div className="flex items-center text-xs text-gray-400 mt-1">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{activity.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
