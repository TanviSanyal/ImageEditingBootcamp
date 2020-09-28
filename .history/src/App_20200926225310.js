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
        <h1 className="text1">welcome to</h1>
        <h1 className="text2"> Online Image Editing Bootcamp</h1>
      </main>
    </Router>
  );
};

export default App;
