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
import Instructor from './users/instructor/Instructor';


const App = () => {

//  let routes=(<Switch>
//     <Route path="/" exact>
//           <Home />
//         </Route>
//     <Route path="/auth" exact>
//       <Auth />
//     </Route>
//     <Route path="/studentauth">
//       <Student_Auth />
//     </Route>
//     <Redirect to="/" />
//   </Switch>);

  return (
    <>
    <Router>
      <MainNavigation />
      <main>
      <Switch>
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
    <Redirect to="/" />
  </Switch>
      </main>
    </Router>
    </>
  );
};

export default App;
