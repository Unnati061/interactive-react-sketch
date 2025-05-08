
import React from 'react';
import { X } from 'lucide-react';
import { TripDetails, FlightDetails, Hotel, Activity } from '../types';

interface DetailPaneProps {
  isOpen: boolean;
  onClose: () => void;
  content: 'trip' | 'flight' | 'hotel' | 'activity';
  data: TripDetails | FlightDetails | Hotel | Activity | null;
}

const DetailPane: React.FC<DetailPaneProps> = ({ 
  isOpen, 
  onClose, 
  content,
  data
}) => {
  if (!isOpen || !data) return null;
  
  return (
    <div className={`fixed inset-0 z-50 flex justify-end`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className={`relative w-[90%] max-w-md bg-travel-background h-full slide-in overflow-y-auto`}>
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-travel-card rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </button>
          
          {content === 'trip' && renderTripDetails(data as TripDetails)}
          {content === 'flight' && renderFlightDetails(data as FlightDetails)}
          {content === 'hotel' && renderHotelDetails(data as Hotel)}
          {content === 'activity' && renderActivityDetails(data as Activity)}
        </div>
      </div>
    </div>
  );
};

const renderTripDetails = (trip: TripDetails) => (
  <>
    <h2 className="text-2xl font-bold mt-8 mb-4">{trip.destination} Trip Details</h2>
    <img 
      src={trip.coverImage}
      alt={trip.destination}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Trip Information</h3>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Destination</span>
        <span>{trip.destination}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Dates</span>
        <span>{trip.startDate} - {trip.endDate}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Duration</span>
        <span>{trip.duration} days</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-gray-400">Travelers</span>
        <span>{trip.travelers} people</span>
      </div>
    </div>
    
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Trip Overview</h3>
      <p className="text-gray-400">
        Your {trip.duration}-day trip to {trip.destination} includes {trip.activities} planned activities.
        All travel arrangements and accommodations have been confirmed. Check the detailed itinerary
        for daily plans.
      </p>
    </div>
  </>
);

const renderFlightDetails = (flight: FlightDetails) => (
  <>
    <h2 className="text-2xl font-bold mt-8 mb-4">Flight Details</h2>
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{flight.origin.code} to {flight.destination.code}</h3>
          <p className="text-sm text-gray-400">{flight.departureDate}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 border-b border-travel-black pb-4 mb-4">
        <div className="w-16 h-16 bg-travel-blue/20 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-travel-blue">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-400">Departure</p>
          <p className="font-semibold">{flight.departureTime}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-2xl font-bold">{flight.origin.code}</p>
            <p className="text-sm text-gray-400">{flight.origin.city}, {flight.origin.country}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{flight.destination.code}</p>
            <p className="text-sm text-gray-400">{flight.destination.city}, {flight.destination.country}</p>
          </div>
        </div>
        
        <div className="relative h-[2px] bg-travel-black my-4">
          <div className="absolute left-0 -top-1.5 w-3 h-3 bg-travel-blue rounded-full"></div>
          <div className="absolute right-0 -top-1.5 w-3 h-3 bg-travel-blue rounded-full"></div>
        </div>
      </div>
      
      <div className="bg-travel-card/50 p-3 rounded-lg border border-travel-black">
        <h4 className="font-medium mb-2">Flight Information</h4>
        <div className="flex justify-between py-1">
          <span className="text-gray-400 text-sm">Flight Number</span>
          <span className="text-sm">JL7080</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-400 text-sm">Aircraft</span>
          <span className="text-sm">Boeing 787-9</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-400 text-sm">Duration</span>
          <span className="text-sm">8h 35m</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-400 text-sm">Class</span>
          <span className="text-sm">Economy</span>
        </div>
      </div>
    </div>
  </>
);

const renderHotelDetails = (hotel: Hotel) => (
  <>
    <h2 className="text-2xl font-bold mt-8 mb-4">{hotel.name}</h2>
    <img 
      src={hotel.image}
      alt={hotel.name}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Stay Information</h3>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Check-in</span>
        <span>{hotel.checkIn}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Check-out</span>
        <span>{hotel.checkOut}</span>
      </div>
      {hotel.rating && (
        <div className="flex justify-between py-2">
          <span className="text-gray-400">Rating</span>
          <div className="flex items-center">
            <span className="mr-1">{hotel.rating}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
    
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Hotel Features</h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-travel-blue/20 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-travel-blue">
              <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
          <span>Free WiFi</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-travel-blue/20 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-travel-blue">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198c.03-.028.061-.056.091-.086L12 5.432Z" />
            </svg>
          </div>
          <span>Pool</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-travel-blue/20 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-travel-blue">
              <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
              <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006-1.457a.75.75 0 1 1 .512 1.41l-.512.186V18a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-9.599l-1.5.546V18a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-8.51l-1.006.364v9.021a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-8.695l-1.5.545v8.776a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-8.336l-1.006.364v8.597a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-8.262l-1.25.454v7.808a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-7.537l-.731.265a.75.75 0 0 1-.512-1.41l.512-.187v-3.325Z" clipRule="evenodd" />
            </svg>
          </div>
          <span>Spa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-travel-blue/20 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-travel-blue">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
            </svg>
          </div>
          <span>24/7 Service</span>
        </div>
      </div>
    </div>
  </>
);

const renderActivityDetails = (activity: Activity) => (
  <>
    <h2 className="text-2xl font-bold mt-8 mb-4">{activity.name}</h2>
    <img 
      src={activity.image}
      alt={activity.name}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Activity Information</h3>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Date</span>
        <span>{activity.date}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Time</span>
        <span>{activity.timing}</span>
      </div>
      <div className="flex justify-between py-2 border-b border-travel-black">
        <span className="text-gray-400">Duration</span>
        <span>{activity.duration}</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-gray-400">Location</span>
        <span>{activity.location}</span>
      </div>
    </div>
    
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Description</h3>
      <p className="text-gray-400">
        Enjoy this exciting activity in {activity.location}. The experience will last approximately {activity.duration}.
        Make sure to arrive at least 15 minutes before the scheduled time. Comfortable clothing and footwear are recommended.
      </p>
    </div>
    
    <div className="bg-travel-card rounded-xl p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Meeting Point</h3>
      <div className="h-40 bg-travel-black/50 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">Map location</span>
      </div>
    </div>
  </>
);

export default DetailPane;
