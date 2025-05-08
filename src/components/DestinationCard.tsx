
import React from 'react';
import { TripDetails } from '../types';
import { Calendar, Users, Menu } from 'lucide-react';

interface DestinationCardProps {
  trip: TripDetails;
  onClick?: () => void;
  onDetailsClick?: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ trip, onClick, onDetailsClick }) => {
  return (
    <div className="destination-card" onClick={onClick}>
      <img 
        src={trip.coverImage} 
        alt={trip.destination} 
        className="w-full h-full object-cover"
      />
      <div className="destination-card-overlay">
        <div className="flex justify-end">
          {onDetailsClick && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDetailsClick();
              }}
              className="bg-white/20 backdrop-blur-sm p-1 rounded-full"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{trip.destination}</h2>
          <p className="text-sm text-white/90 mb-2">{trip.startDate} - {trip.endDate}</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">
                {trip.duration} Days
                <span className="text-xs block -mt-1">Duration</span>
              </span>
            </div>
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <Users className="w-4 h-4" />
              <span className="text-xs">
                {trip.travelers} {trip.travelers === 1 ? 'Person' : 'People'}
                <span className="text-xs block -mt-1">Group Size</span>
              </span>
            </div>
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-xs">
                {trip.activities}
                <span className="text-xs block -mt-1">Activities</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
