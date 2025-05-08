
import React from 'react';
import { Hotel } from '../types';
import { Star } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
  onClick?: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onClick }) => {
  return (
    <div 
      className="bg-travel-card rounded-xl overflow-hidden cursor-pointer mr-3 w-[160px] flex-shrink-0"
      onClick={onClick}
    >
      <div className="h-24 relative">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-full object-cover"
        />
        {hotel.rating && (
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full py-0.5 px-2 flex items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-0.5" />
            <span className="text-xs">{hotel.rating}</span>
          </div>
        )}
      </div>
      <div className="p-2">
        <h4 className="font-medium text-sm line-clamp-1">{hotel.name}</h4>
        <p className="text-xs text-gray-400 mt-1">Check-in: {hotel.checkIn}</p>
        <p className="text-xs text-gray-400">Check-out: {hotel.checkOut}</p>
      </div>
    </div>
  );
};

export default HotelCard;
