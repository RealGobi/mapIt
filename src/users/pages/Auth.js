import React, { useState } from 'react'
import Input from '../../shared/components/FormElements/Input';
import './Auth.css';
const Auth = () => {
  const loginHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <div>
      <Card className="authentication">
        <h2>Login</h2>
        <hr />
        <form onSubmit={loginHandler}>
          {!isLogin && <Input element='input' id='name' type='text' label='Name' validators={[VALIDATOR_REQUIRE]} errorText='Enter a name' onInput={inputHandler} /> }
          <Input id="email" 
                type="email" 
                label="Email" 
                element='input' 
                onInput={inputHandler} 
                validators={[VALIDATOR_EMAIL()]} 
                errorText={'Enter a vaild email'}
                />
          <Input id="password" 
                type="password" 
                label="Password" 
                element='input' 
                onInput={inputHandler} 
                validators={[VALIDATOR_MINLENGTH(6)]}  
                errorText={'Enter a vaild password, at least 6 characters'} 
                />
          <Button type='submit' disabled={!formState.isValid} >{isLogin ?  'Login' : 'Signup'}</Button>
        </form>
        <Button inverse onClick={switchSignupHandler}>{isLogin ? 'Switch to Signup' : 'Switch to Login'}</Button>
      </Card>
    </div>
  )
}

export default Auth
