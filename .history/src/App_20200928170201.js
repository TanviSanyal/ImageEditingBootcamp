import React, { useCallback, useState } from 'react';
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
import Student from './users/student/Student';
import CreateTask from './users/instructor/CreateTask';
import Submissions from './users/instructor/Submissions';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  console.log(isLoggedIn);

  let routes;
   if (isLoggedIn) {

    routes = (<Switch>
              <Route path="/instructor/instructorId" exact>
                <Instructor />
              </Route>
              <Route path='/instructor/instructorId/addtask' exact>
                <CreateTask/>
              </Route>
              <Route path="/student">
                <Student />
              </Route>
              <Route path="/instructor/InstructorId/:taskId/submissions" exact>
                <Submissions />
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
      
              
      <Redirect to="/" />
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
