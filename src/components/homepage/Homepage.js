/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-scroll';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Lead from '../lead/Lead';
import Requests from '../requests/Requests';
import ChooseUs from '../choose-us/ChooseUs';
import Projects from '../projects/Projects';
// import {
//   webDevProjects, // default display data for webdev profession page
//   dataAnalysisProjects, // default display data for dataAnalysis profession page
//   dataScienceProjects, // default display data for dataScience profession page
// } from '../../arrays/delegate-tasks';
import Form from '../form/Form';
import Footer from '../footer/Footer';

function Homepage({
  isProfessionPageFocused,
  setIsProfessionPageFocused,
  pageTitles,
  onNavClick,
  isMenuOpen,
  setIsMenuOpen,
}) {
  React.useEffect(() => {
    setIsProfessionPageFocused(false);
  }, [isProfessionPageFocused, setIsProfessionPageFocused]);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header
        name="header"
        onNavClick={onNavClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isProfessionPageFocused={isProfessionPageFocused}
        onButtonClick={handleButtonClick}
      >
        <li className="header__list">
          <Link className="header__link" to="requests" smooth="true" onClick={onNavClick}>
            We can help!
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="about" smooth="true" onClick={onNavClick}>
            About
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="start" smooth="true" onClick={onNavClick}>
            How to start
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="projects" smooth="true" onClick={onNavClick}>
            Projects
          </Link>
        </li>
        <li className="header__list">
          <Link className="header__link" to="footer" smooth="true" onClick={onNavClick}>
            Contacts
          </Link>
        </li>
      </Header>
      <Hero onButtonClick={handleButtonClick} />
      <Lead />
      <Requests name="requests" setIsProfessionPageFocused={setIsProfessionPageFocused} />
      <ChooseUs />
      <Projects
        name="projects"
        title={pageTitles.default.title}
        subtitle={pageTitles.default.subtitle}
        defaultDisplay={webDevProjects}
        displayCourseButtons={true}
      />
      <Footer name="footer" />
      <Form isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Homepage;
