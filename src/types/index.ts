
export interface TripDetails {
  destination: string;
  startDate: string;
  endDate: string;
  duration: number;
  travelers: number;
  activities: number;
  coverImage: string;
}

export interface FlightDetails {
  departureDate: string;
  departureTime: string;
  origin: {
    code: string;
    city: string;
    country: string;
  };
  destination: {
    code: string;
    city: string;
    country: string;
  };
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  checkIn: string;
  checkOut: string;
  rating?: number;
}

export interface Activity {
  id: string;
  name: string;
  image: string;
  timing: string;
  duration: string;
  location: string;
  date: string;
}

export type TravelParty = 'Solo' | 'Couple' | 'Family' | 'Friends';

export interface TripFormData {
  destination: string;
  duration: string;
  travelParty: TravelParty | null;
}
