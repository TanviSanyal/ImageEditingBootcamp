import React,{useContext} from 'react';
import './NavLinks.css';
import {NavLink} from 'react-router-dom';
// import {AuthContext} from '../../context/auth-context';

const NavLinks = props => {

    // const auth = useContext(AuthContext);
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Register</NavLink>
            </li>
           <li>
                <NavLink to="/u1/places">Login</NavLink>
            </li>
           
        </ul>
    );
};

export default NavLinks;