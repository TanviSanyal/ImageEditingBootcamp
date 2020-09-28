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
        <form action="/auth">
        <input type ="submit" name ="submit" value="Instructor" id="instructor"  />
        </form>
        <form action="/studentauth">
        <input type ="submit" name ="submit" value="Student" id="student"  />
        </form>
      </div>
      </>
    );
};

export default Home;