import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


const App = () => {

  

  
   
      <Switch>
        <Route path="/" exact>
          {/* <Users /> */}
        </Route>
        <Route path="/:userId/places" exact>
          {/* <UserPlaces /> */}
        </Route>
        <Route path="/places/new" exact>
          {/* <NewPlace /> */}
        </Route>
        <Route path='/places/:placeId'>
          {/* <UpdatePlace /> */}
        </Route>
        <Redirect to="/" />
      </Switch>
   
  

  return (
    <h1>welcome</h1>
  );
};

export default App;
