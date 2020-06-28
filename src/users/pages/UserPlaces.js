import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from './components/PlaceList';

const DUMMY_DATA = [
  {
    id:'p1',
    title: 'Empire State Building',
    description: 'One big bulding in New York!',
    imageUrl: 'https://picsum.photos/300/400',
    address: 'New York, NY 10001',
    location: {
      lat: 40.7485452,
      lng: -73.9857635
    },
    creator: 'u1'
  },
  {
    id:'p2',
    title: 'Empire State Building',
    description: 'One big bulding in New York!',
    imageUrl: 'https://picsum.photos/200/300',
    address: 'New York, NY 10001',
    location: {
      lat: 40.7485452,
      lng: -73.9857635
    },
    creator: 'u2'
  },
]

const  UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_DATA.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;
