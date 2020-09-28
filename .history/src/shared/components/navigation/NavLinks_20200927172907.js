import React,{useContext} from 'react';
import './NavLinks.css';
import {NavLink} from 'react-router-dom';
 import {InstructorAuthContext, instructorAuthContext} from '../../context/auth-context';

const NavLinks = props => {

     const auth = useContext(InstructorAuthContext);
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/auth" exact><b>Instructor</b></NavLink>
            </li>
           <li>
                <NavLink to="/studentauth"><b>Student</b></NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;