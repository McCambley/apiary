/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-scroll';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Lead from '../lead/Lead';
import Requests from '../requests/Requests';
import ChooseUs from '../choose-us/ChooseUs';
import Projects from '../projects/Projects';
import {
  webDevProjects, // default display data for webdev profession page
  // dataAnalysisProjects, // default display data for dataAnalysis profession page
  // dataScienceProjects, // default display data for dataScience profession page
} from '../../arrays/delegate-tasks';
import Footer from '../footer/Footer';

function Homepage(props) {
  return (
    <>
      <Header name="header" onNavClick={props.onNavClick} isMenuOpen={props.isMenuOpen}>
        <li className="header__list">
          <Link className="header__link" to="requests" smooth="true" onClick={props.onNavClick}>
            We can help!
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="about" smooth="true" onClick={props.onNavClick}>
            About
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="start" smooth="true" onClick={props.onNavClick}>
            How to start
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="projects" smooth="true" onClick={props.onNavClick}>
            Projects
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="footer" smooth="true" onClick={props.onNavClick}>
            Contacts
          </Link>
        </li>
      </Header>
      <Hero />
      <Lead />
      <Requests name="requests" setProfessionPage={props.setProfessionPage} />
      <ChooseUs />
      <Projects
        name="projects"
        title={props.pageTitles.default.title}
        subtitle={props.pageTitles.default.subtitle}
        defaultDisplay={webDevProjects}
        displayCourseButtons={true}
      />
      <Footer name="footer" />
    </>
  );
}

export default Homepage;
