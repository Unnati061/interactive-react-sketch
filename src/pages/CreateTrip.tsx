
import React from 'react';
import StatusBar from '../components/StatusBar';
import PlanningForm from '../components/PlanningForm';

const CreateTrip: React.FC = () => {
  return (
    <div className="app-screen">
      <StatusBar />
      
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-2">Plan Your Journey, Your Way!</h1>
        <p className="text-gray-400 mb-8">Let's create your personalised travel experience.</p>
        
        <PlanningForm />
      </div>
    </div>
  );
};

export default CreateTrip;
