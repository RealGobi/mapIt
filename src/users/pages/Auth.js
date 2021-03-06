import React, { useState, useContext } from 'react'
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/contex/auth-context';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const auth = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    }, 
    password: {
      value: '',
      isValid: false
    }
  },
  false
  );


  const loginHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
    console.log(auth.isLoggedIn);
    auth.logIn();
  };

  const switchSignupHandler = () => {
    if(!isLogin) {
      setFormData({
        ...formState.inputs, 
        name: undefined
      },
         formState.inputs.email.isValid && formState.inputs.password.isValid);
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false)
    }
    setIsLogin(prevMode => !prevMode);
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
