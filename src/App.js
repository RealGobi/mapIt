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

const [isLoggedin, setIsLoggedin] = useState(false);

const login = useCallback(() => {
  setIsLoggedin(true);
}, []);

const logout = useCallback(() => {
  setIsLoggedin(false);
}, []);

  return (
      <AuthContext.Provider value={{ 
        isLoggedin: isLoggedin, 
        login: login, 
        logout: logout 
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
