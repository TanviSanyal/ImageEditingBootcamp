import React,{useContext} from 'react';
import './NavLinks.css';
import {NavLink} from 'react-router-dom';
// import {AuthContext} from '../../context/auth-context';

const NavLinks = props => {

    // const auth = useContext(AuthContext);
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact><b>Instructor</b></NavLink>
            </li>
           <li>
                <NavLink to="/u1/places"><b>Student</b></NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;