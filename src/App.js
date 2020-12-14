import React,  {useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/contex/auth-context';

const App = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);

const logIn = useCallback(() => {
  setIsLoggedIn(true);
}, []);

const logOut = useCallback(() => {
  setIsLoggedIn(false);
}, []);

let routes;

if(isLogin){
  routes = ();
} else {
  routes = ();
};

  return (
      <AuthContext.Provider value={{ 
        isLoggedIn: isLoggedIn, 
        logIn: logIn, 
        logOut: logOut 
        }} >
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/auth" exact>
                <Auth />
              </Route>
              <Route path="/" exact>
                <Users />
              </Route>
              <Route path="/:userId/places/" exact>
                <UserPlaces />
              </Route>
              <Route path="/places/new" exact>
                <NewPlace />
              </Route>
              <Route path="/places/:placeId">
                <UpdatePlace />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
      </AuthContext.Provider>
  )};

export default App;
