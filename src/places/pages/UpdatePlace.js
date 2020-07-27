import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/UIElements/util/validator';


const DUMMY_DATA = [
  {
    id:'p1',
    title: 'Empire State Building',
    description: 'One big bulding in New York!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: 'New York, NY 10001',
    location: {
      lat: 40.7485452,
      lng: -73.9857635
    },
    creator: 'u2'
  },
]


const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifier = DUMMY_DATA.find(p => p.id === placeId);

  if (!identifier) {
    return ( 
      <div className='center'>
        <h2>No place found</h2>
      </div>
    );
  };

  return (
    <form>
      <Input 
        id='title' 
        element='input' 
        label='Titel' 
        type='text' 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText='Please input a valid title.' 
        onInput={()=> {}} 
        value={identifier.title} 
        valid={true} 
      />
      <Input 
        id='description' 
        element='textarea' 
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText='Please input a valid description, min 5 character.' 
        onInput={()=> {}} 
        value={identifier.description} 
        valid={true} 
      />
      <Button type='submit' disabled={true}>Update Place</Button>
    </form>
  );
};

export default UpdatePlace;
