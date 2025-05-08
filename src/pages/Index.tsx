
import React from 'react';
import { Navigate } from 'react-router-dom';

// The Index page will simply redirect to the createTrip page
const Index = () => {
  return <Navigate to="/create" replace />;
};

export default Index;
