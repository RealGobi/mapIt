import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contex/auth-context';

import './NavLinks.css'


const  NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
    <li><NavLink to="/" exact>All USERS</NavLink></li>
    { auth.isLoggedIn && (
    <li><NavLink to="/u1/places">MY PLACES</NavLink></li>
    )}
    { auth.isLoggedIn && (
    <li><NavLink to="/places/new">ADD PLACE</NavLink></li>
    )}
    { !auth.isLoggedIn && (
    <li><NavLink to="/auth">AUTHENTICATION</NavLink></li>
    )}
    { auth.isLoggedIn && (
    <li><button to="/auth" onClick={auth.logOut}>LOG OUT</button></li>
    )}
    </ul>
  )
}

export default NavLinks
