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

  // <Switch>
  //   <Route path="/" exact>
  //     {/* <Users /> */}
  //   </Route>
  //   <Route path="/:userId/places" exact>
  //     {/* <UserPlaces /> */}
  //   </Route>
  //   <Route path="/places/new" exact>
  //     {/* <NewPlace /> */}
  //   </Route>
  //   <Route path='/places/:placeId'>
  //     {/* <UpdatePlace /> */}
  //   </Route>
  //   <Redirect to="/" />
  // </Switch>

  return (
    <Router>
      <MainNavigation />
      <main className="main-body">
        <span className="text1">welcome to</span>
        <span className="text2"> Online Image Editing Bootcamp</span>
      </main>
    </Router>
  );
};

export default App;
