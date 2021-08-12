/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */

import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import Logo from '../../images/logo.png';
import Hamburger from '../../images/hamburger.svg';
import XIcon from '../../images/x-icon.svg';
import HeaderWrapper from '../header-wrapper/HeaderWrapper';

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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

  function onNavClick() {
    setIsMenuOpen(!isMenuOpen);

    props.setProfessionPage(false);
  }

  return (
    <header className="header" id="header">
      <div className="header__mobile-wrapper">
        <Link className="logo-link" to="/dummy-page" smooth={true}>
          <img className="logo" src={Logo} alt="" />
        </Link>
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
      <HeaderWrapper wrapMobileMenu={mobileWidth} isMenuOpen={isMenuOpen}>
        <ul className="header__navbar">
          <li className="header__list">
            <Link
              className="header__link"
              to={`${props.professionPage} ? './dummy-page' : './dummy-page'`}
              smooth={true}
              onClick={onNavClick}
            >
              {props.professionPage ? 'Back to homepage' : 'We can help!'}
            </Link>
          </li>
          <li className="header__list">
            <Link
              className="header__link"
              to={`${props.professionPage} ? './dummy-page' : './dummy-page'`}
              smooth={true}
              onClick={onNavClick}
            >
              {props.professionPage ? "Student's projects" : 'About'}
            </Link>
          </li>
          {!props.professionPage && (
            <>
              <li className="header__list">
                <Link className="header__link" to="/dummy-page" smooth={true} onClick={onNavClick}>
                  How to start
                </Link>
              </li>
              <li className="header__list">
                <Link className="header__link" to="/dummy-page" smooth={true} onClick={onNavClick}>
                  Projects
                </Link>
              </li>
              <li className="header__list">
                <Link className="header__link" to="/dummy-page" smooth={true} onClick={onNavClick}>
                  Contacts
                </Link>
              </li>
            </>
          )}
        </ul>
        <button className="header__button" to="" onClick={onNavClick}>
          Delegate a task
        </button>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
