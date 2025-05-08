
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, User, Users } from 'lucide-react';
import { TripFormData, TravelParty } from '../types';
import { toast } from 'sonner';

const PlanningForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TripFormData>({
    destination: '',
    duration: '',
    travelParty: null
  });
  
  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, destination: e.target.value }));
  };
  
  const handleTravelPartySelect = (party: TravelParty) => {
    setFormData(prev => ({ ...prev, travelParty: party }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.destination) {
      toast.error('Please enter a destination');
      return;
    }
    
    if (!formData.travelParty) {
      toast.error('Please select who you are traveling with');
      return;
    }
    
    // Mock API integration - would be a real API call in production
    setTimeout(() => {
      // Navigate to home page with the created trip
      navigate('/home');
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="flex-1">
        <div className="mb-6">
          <label className="block mb-2 text-white">Where would you like to go?</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Enter Destination"
              value={formData.destination}
              onChange={handleDestinationChange}
              className="w-full bg-travel-card border border-travel-black rounded-lg py-3 px-10 text-white placeholder:text-gray-400"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 text-white">How long will you stay?</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select 
              className="w-full bg-travel-card border border-travel-black rounded-lg py-3 px-10 text-white appearance-none"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
            >
              <option value="">Select Duration</option>
              <option value="weekend">Weekend (2-3 days)</option>
              <option value="week">Week (4-7 days)</option>
              <option value="twoweeks">Two Weeks (8-14 days)</option>
              <option value="month">Month (15-30 days)</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 text-white">Who are you traveling with?</label>
          <div className="grid grid-cols-2 gap-3">
            <button 
              type="button"
              className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${formData.travelParty === 'Solo' ? 'border-travel-blue bg-travel-blue/20' : 'border-travel-black bg-travel-card'}`}
              onClick={() => handleTravelPartySelect('Solo')}
            >
              <User className="w-5 h-5" />
              <span>Solo</span>
            </button>
            <button 
              type="button"
              className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${formData.travelParty === 'Couple' ? 'border-travel-blue bg-travel-blue/20' : 'border-travel-black bg-travel-card'}`}
              onClick={() => handleTravelPartySelect('Couple')}
            >
              <Users className="w-5 h-5" />
              <span>Couple</span>
            </button>
            <button 
              type="button"
              className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${formData.travelParty === 'Family' ? 'border-travel-blue bg-travel-blue/20' : 'border-travel-black bg-travel-card'}`}
              onClick={() => handleTravelPartySelect('Family')}
            >
              <Users className="w-5 h-5" />
              <span>Family</span>
            </button>
            <button 
              type="button"
              className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${formData.travelParty === 'Friends' ? 'border-travel-blue bg-travel-blue/20' : 'border-travel-black bg-travel-card'}`}
              onClick={() => handleTravelPartySelect('Friends')}
            >
              <Users className="w-5 h-5" />
              <span>Friends</span>
            </button>
          </div>
        </div>
      </div>
      
      <button 
        type="submit" 
        className="bg-travel-blue text-white py-3 rounded-lg w-full font-medium"
      >
        Continue
      </button>
    </form>
  );
};

export default PlanningForm;
