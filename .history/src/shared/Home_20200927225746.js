import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/FormElements/Button'; 
import './Home.css'

const Home = () => {

    return(
        <>
        <div className="main-body">
        <p className="text1">Welcome to</p>
        <p className="text2"> Online Image Editing Bootcamp</p>
      </div>
      </>
    );
};

export default Home;