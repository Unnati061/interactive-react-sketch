
import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import UserAvatar from '../components/UserAvatar';
import NavigationBar from '../components/NavigationBar';
import DestinationCard from '../components/DestinationCard';
import FlightCard from '../components/FlightCard';
import HotelCard from '../components/HotelCard';
import ActivityCard from '../components/ActivityCard';
import DetailPane from '../components/DetailPane';
import { tripDetails, flightDetails, hotels, activities } from '../mockData';
import { TripDetails, FlightDetails, Hotel, Activity } from '../types';

const HomeScreen: React.FC = () => {
  const [detailPane, setDetailPane] = useState<{
    isOpen: boolean;
    content: 'trip' | 'flight' | 'hotel' | 'activity';
    data: TripDetails | FlightDetails | Hotel | Activity | null;
  }>({
    isOpen: false,
    content: 'trip',
    data: null
  });
  
  const openDetailPane = (content: 'trip' | 'flight' | 'hotel' | 'activity', data: TripDetails | FlightDetails | Hotel | Activity) => {
    setDetailPane({
      isOpen: true,
      content,
      data
    });
  };
  
  const closeDetailPane = () => {
    setDetailPane(prev => ({
      ...prev,
      isOpen: false
    }));
  };
  
  return (
    <div className="app-screen pb-20">
      <StatusBar />
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
          <p className="text-sm text-gray-400">Ready for the trip?</p>
        </div>
        <UserAvatar />
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-3">Your Upcoming Trip</h2>
        <DestinationCard 
          trip={tripDetails} 
          onClick={() => openDetailPane('trip', tripDetails)}
          onDetailsClick={() => openDetailPane('trip', tripDetails)}
        />
      </div>
      
      <div className="mb-6">
        <div className="section-header">
          <h2 className="section-title">Flight Details</h2>
          <span className="see-all">See all</span>
        </div>
        <FlightCard 
          flight={flightDetails} 
          onClick={() => openDetailPane('flight', flightDetails)}
        />
      </div>
      
      <div className="mb-6">
        <div className="section-header">
          <h2 className="section-title">Accommodation</h2>
          <span className="see-all">See all</span>
        </div>
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4">
          {hotels.map(hotel => (
            <HotelCard 
              key={hotel.id} 
              hotel={hotel} 
              onClick={() => openDetailPane('hotel', hotel)}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="section-header">
          <h2 className="section-title">Activities</h2>
          <span className="see-all">See all</span>
        </div>
        <div className="flex flex-col">
          {activities.map(activity => (
            <ActivityCard 
              key={activity.id} 
              activity={activity} 
              onClick={() => openDetailPane('activity', activity)}
            />
          ))}
        </div>
      </div>
      
      <NavigationBar />
      
      <DetailPane 
        isOpen={detailPane.isOpen}
        onClose={closeDetailPane}
        content={detailPane.content}
        data={detailPane.data}
      />
    </div>
  );
};

export default HomeScreen;
