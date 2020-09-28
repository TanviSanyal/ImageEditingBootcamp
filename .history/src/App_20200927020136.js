import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css'
import MainNavigation from '../src/shared/components/navigation/MainNavigation';


const App = () => {

  <Switch>
    <Route path="/" exact>
      <Users />
    </Route>
    <Route path="/:userId/places" exact>
      <UserPlaces />
    </Route>
    <Redirect to="/" />
  </Switch>

  return (
    <Router>
      <MainNavigation />
      <main className="main-body">
        <p className="text1">Welcome to</p>
        <p className="text2"> Online Image Editing Bootcamp</p>
      </main>
    </Router>
  );
};

export default App;
