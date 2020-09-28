import React,{createContext, useContext,useCallback,useState} from 'react';
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
import {InstructorAuthContext} from './shared/context/auth-context';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);                                     

 let routes;
 routes=(<Switch>
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
    <>
    <Router>
      <MainNavigation />
      <main>
      {routes}
      </main>
    </Router>
    </>
  );
};

export default App;
