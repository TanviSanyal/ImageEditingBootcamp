import React,{useContext} from 'react';
import './NavLinks.css';
import {NavLink} from 'react-router-dom';
// import {AuthContext} from '../../context/auth-context';

const NavLinks = props => {

    // const auth = useContext(AuthContext);
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Instructor</NavLink>
            </li>
           <li>
                <NavLink to="/u1/places">Student</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;