import React, { createContext, useContext, useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css'
import MainNavigation from '../src/shared/components/navigation/MainNavigation';
import Auth from './users/instructor/Auth';
import Student_Auth from './users/student/Student_Auth'
import Home from './shared/Home';
import Instructor from './users/instructor/Instructor';
import { InstructorAuthContext } from './shared/context/auth-context';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {

    routes = (<Switch>
              <Route path="/">
                <Instructor />
              </Route>
              <Redirect to="/" /></Switch>);

  }
  else {
    routes = (<Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Route path="/studentauth">
        <Student_Auth />
      </Route>
      <Route path="/instructor">
                <Instructor />
              </Route>
      <Redirect to="/auth" />
    </Switch>);
  }


  return (
    <InstructorAuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }} >
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </InstructorAuthContext.Provider>
  );
};

export default App;
