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
import HeaderWrapper from '../header-wrapper/HeaderWrapper';

function Header({
  onButtonClick,
  isMenuOpen,
  setIsMenuOpen,
  onNavClick,
  isProfessionPageFocused,
  children,
}) {
  const [mobileWidth, setMobileWidth] = React.useState(false);

  React.useState(() => {
    function checkWidth() {
      const windowWidth = window.matchMedia('(max-width: 640px)');
      if (windowWidth.matches) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  });

  function closeMenu() {
    setIsMenuOpen(false);
  }

  // When user clicks on CTA-button, mobile menu closes and form is displayed
  function onDelegateTaskClick() {
    onNavClick();
    onButtonClick();
  }

  return (
    <header className="header" id="header">
      <div className="header__mobile-wrapper">
        <NavLink className="logo-link" exact to="/" smooth="true" onClick={closeMenu}>
          <img className="logo" src={Logo} alt="" />
        </NavLink>
        <button
          className={`header__hamburger-button ${
            isMenuOpen ? '' : 'header__hamburger-button_active'
          }`}
        >
          <img src={Hamburger} alt="" onClick={onNavClick} />
        </button>
        <button
          className={`header__x-icon-button ${isMenuOpen ? 'header__x-icon-button_active' : ''}`}
        >
          <img src={XIcon} alt="" onClick={onNavClick} />
        </button>
      </div>
      <HeaderWrapper
        wrapMobileMenu={mobileWidth}
        isMenuOpen={isMenuOpen}
        isProfessionPageFocused={isProfessionPageFocused}
      >
        <ul className="header__navbar">{children}</ul>
        <button className="header__button" to="" onClick={onDelegateTaskClick}>
          Delegate a task
        </button>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
