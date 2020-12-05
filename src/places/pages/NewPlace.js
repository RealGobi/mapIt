import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validator';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';
import Button from '../../shared/components/FormElements/Button';

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        },
        address: {
          value: '',
          isValid: false
        }
      },
       false
    );

    const placeSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input id='title' element='input' type="text" lable="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a vailid title" onInput={inputHandler} />
      <Input id='description' element="textarea" lable="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a vailid description (min 5 characters)." onInput={inputHandler} />
      <Input id='address' element="input" lable="Address" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a vailid address." onInput={inputHandler} />
      <Button type='submit' disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  )
}

export default NewPlace;
