import React,{useContext} from 'react';
import './NavLinks.css';
import {NavLink} from 'react-router-dom';
 import {InstructorAuthContext, StudentAuthContext} from '../../context/auth-context';

const NavLinks = props => {

    const student_auth = useContext(StudentAuthContext);
     const auth = useContext(InstructorAuthContext);
    return(
        <ul className="nav-links">
            
            {(auth.isLoggedIn || student_auth.isLoggedIn) && <li id="logout_element"><button id="logout" onClick={auth.logout}>Logout</button></li>}
            
        </ul>
    );
};

export default NavLinks;