import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';


import './PlaceForm.css';


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
    description: 'One big building in New York!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: 'New York, NY 10001',
    location: {
      lat: 40.7485452,
      lng: -73.9857635
    },
    creator: 'u2'
  },
  {
    id:'p3',
    title: 'Building',
    description: 'One big building in New York!',
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

  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;
  
  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    }, 
    description: {
      value: '',
      isValid: false
    }
  },
  false
  );
  
  const identifier = DUMMY_DATA.find(p => p.id === placeId);

  useEffect(() => {
    if(identifier){
      setFormData({
        title: {
          value: identifier.title,
          isValid: true
        },
      }, 
        },
        description: {
          value: identifier.description,
          isValid: true
        }
      },
      true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifier])


  const updateSubmitHandler = e  => {
    e.preventDefault();
    console.log(formState.inputs);
  }


  if (!identifier) {
    return ( 
      <div className='center'>
        <h2>No place found</h2>
      </div>
    );
  };

  console.log(formState.isValid);

  if(isLoading) {
    return ( 
      <div className='center'>
        <h2>Looooading!</h2>
      </div>
    );
  };

  return (
    <form className='place-form'onSubmit={updateSubmitHandler}>
      <Input 
        id='title' 
        element='input' 
        label='Titel' 
        type='text' 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText='Please input a valid title.' 
        onInput={inputHandler} 
        initialValue={formState.inputs.title.value} 
        initialValid={formState.inputs.title.isValid} 
      />
      <Input 
        id='description' 
        element='textarea' 
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText='Please input a valid description, min 5 character.' 
        onInput={inputHandler} 
        initialValue={formState.inputs.description.value} 
        initialValid={formState.inputs.description.isValid} 
      />
      <Button type='submit' disabled={!formState.isValid}>Update Place</Button>
    </form>
  );
};

export default UpdatePlace;
