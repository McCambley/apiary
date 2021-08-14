/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/logo.png';
import Hamburger from '../../images/hamburger.svg';
import XIcon from '../../images/x-icon.svg';
// import HeaderWrapper from '../header-wrapper/HeaderWrapper';

function Header(props) {
  // const [mobileWidth, setMobileWidth] = React.useState(false);

  // React.useState(() => {
  //   function checkWidth() {
  //     const windowWidth = window.matchMedia('(max-width: 640px)');
  //     if (windowWidth.matches) {
  //       setMobileWidth(true);
  //     } else {
  //       setMobileWidth(false);
  //     }
  //   }
  //   checkWidth();
  //   window.addEventListener('resize', checkWidth);
  //   return () => window.removeEventListener('resize', checkWidth);
  // });

  return (
    <header className="header" id="header">
      <div className="header__mobile-wrapper">
        <NavLink className="logo-link" exact to="/" smooth="true">
          <img className="logo" src={Logo} alt="" />
        </NavLink>
        <button
          className={`header__hamburger-button ${
            props.isMenuOpen ? '' : 'header__hamburger-button_active'
          }`}
        >
          <img src={Hamburger} alt="" onClick={props.onNavClick} />
        </button>
        <button
          className={`header__x-icon-button ${
            props.isMenuOpen ? 'header__x-icon-button_active' : ''
          }`}
        >
          <img src={XIcon} alt="" onClick={props.onNavClick} />
        </button>
      </div>
      <ul className="header__navbar">{props.children}</ul>
      <button className="header__button" to="" onClick={props.onNavClick}>
        Delegate a task
      </button>
    </header>
  );
}

export default Header;

// wrapMobileMenu={mobileWidth} isMenuOpen={isMenuOpen}
