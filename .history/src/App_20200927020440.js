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
import studentAuth from './users/student/Student_Auth'


const App = () => {

  <Switch>
    <Route path="/auth" exact>
      <Auth />
    </Route>
    <Route path="/studentauth" exact>
      <studentAuth />
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
