import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/image.jpg';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
  // const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // const openDrawerHandler = () => {
  //   setDrawerIsOpen(true);
  // };

  // const closeDrawerHandler = () => {
  //   setDrawerIsOpen(false);
  // };

  return (
    <React.Fragment>
      

      <MainHeader>
        
        <div >
        <a className="main-navigation__logo" href="/"><img src={logo}/></a>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
