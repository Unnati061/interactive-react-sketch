
import { TripDetails, FlightDetails, Hotel, Activity } from './types';

export const tripDetails: TripDetails = {
  destination: 'TOKYO',
  startDate: '27.01.2025',
  endDate: '02.02.2025',
  duration: 8,
  travelers: 4,
  activities: 14,
  coverImage: '/lovable-uploads/cfe16887-4f6a-4c4c-b438-efbe35a9b613.png'
};

export const flightDetails: FlightDetails = {
  departureDate: '26.01.2025',
  departureTime: '10:50 am',
  origin: {
    code: 'DEL',
    city: 'Delhi',
    country: 'India'
  },
  destination: {
    code: 'NRT',
    city: 'Narita',
    country: 'Tokyo'
  }
};

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Shinjuku Prince Hotel',
    image: '/lovable-uploads/64697fd6-861c-44cb-b9e2-47721dfd1bd2.png',
    checkIn: '27.01.2025, 15:00',
    checkOut: '30.01.2025, 11:00',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Akasaka Tokyo Hotel',
    image: '/lovable-uploads/75537345-2702-43c7-b5a7-2d99493ec46c.png',
    checkIn: '30.01.2025, 15:00',
    checkOut: '02.02.2025, 10:00',
    rating: 4.2
  }
];

export const activities: Activity[] = [
  {
    id: '1',
    name: 'Sensoji Temple & Nakamise Shopping Street',
    image: '/lovable-uploads/cfe16887-4f6a-4c4c-b438-efbe35a9b613.png',
    timing: '10 am - 1 pm',
    duration: '3 hours',
    location: 'Asakusa, Tokyo',
    date: '28.01.2025'
  },
  {
    id: '2',
    name: 'Tokyo Sky Tree',
    image: '/lovable-uploads/f2e7cc4e-2508-4e4a-9f69-305c76744e06.png',
    timing: '4:30 pm - 6:00 pm',
    duration: '1.5 hours',
    location: 'Sumida, Tokyo',
    date: '28.01.2025'
  },
  {
    id: '3',
    name: 'Shibuya Crossing',
    image: '/lovable-uploads/f2e7cc4e-2508-4e4a-9f69-305c76744e06.png',
    timing: '7:00 pm - 9:00 pm',
    duration: '2 hours',
    location: 'Shibuya, Tokyo',
    date: '29.01.2025'
  }
];
