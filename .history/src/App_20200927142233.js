import React from 'react';
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


const App = () => {

 let routes=(<Switch>
    <Route path="/" exact>
          <Home />
        </Route>
    <Route path="/auth" exact>
      <Auth />
    </Route>
    <Route path="/studentauth">
      <Student_Auth />
    </Route>
    <Redirect to="/" />
  </Switch>);

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  );
};

export default App;
