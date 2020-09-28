import React, { useState } from 'react';
import logo from '../../../../src/images/image.jpg';

import MainHeader from './MainHeader';
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
        {/* <div className="main-navigation__header-nav">
          <NavLinks />
        </div> */}
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
