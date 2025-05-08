
import React from 'react';
import { FlightDetails } from '../types';

interface FlightCardProps {
  flight: FlightDetails;
  onClick?: () => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onClick }) => {
  return (
    <div 
      className="bg-travel-card rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Flight Details</h3>
            <p className="text-sm text-gray-400">{flight.departureDate}, {flight.departureTime}</p>
          </div>
          <div className="text-travel-blue text-sm">See all</div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col items-center text-center">
            <div className="text-lg font-bold">{flight.origin.code}</div>
            <div className="text-xs text-gray-400">{flight.origin.city}, {flight.origin.country}</div>
          </div>
          
          <div className="flex-1 mx-4 relative">
            <div className="h-[1px] bg-white/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white/50">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="text-lg font-bold">{flight.destination.code}</div>
            <div className="text-xs text-gray-400">{flight.destination.city}, {flight.destination.country}</div>
          </div>
        </div>
      </div>
      <div className="bg-travel-blue/10 h-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/af84fb59-6f8f-4f2a-9f67-18d1bcef55b0.png" 
            alt="Flight" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
