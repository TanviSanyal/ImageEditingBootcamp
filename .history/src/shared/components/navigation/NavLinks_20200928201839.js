import React,{useContext} from 'react';
import './NavLinks.css';
 import {InstructorAuthContext, StudentAuthContext} from '../../context/auth-context';

const NavLinks = props => {

    const student_auth = useContext(StudentAuthContext);
     const auth = useContext(InstructorAuthContext);
    return(
        <ul className="nav-links">
            
            {auth.isLoggedIn && <li id="logout_element"><button id="logout" onClick={auth.logout}>Logout</button></li>}
            {student_auth.isLoggedIn && <li id="logout_element"><button id="logout" onClick={student_auth.logout}>Logout</button></li>}
            
        </ul>
    );
};

export default NavLinks;