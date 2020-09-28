import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import Button from './components/FormElements/Button'; 
import './Home.css'

const Home = () => {

  const onSubmit = () =>{
    return <Redirect to='/studentauth'/>
  };

    return(
        <>
        <div className="main-body">
        <p className="text1">Welcome to</p>
        <p className="text2"> Online Image Editing Bootcamp</p>
        <Link to="/auth">
          <button id="instructor">Instructor</button>
        </Link>
        {/* <Link to="studentauth"> */}
          <button id="student" onClick={onSubmit}>Student</button>
        {/* </Link> */}
      </div>
      </>
    );
};

export default Home;