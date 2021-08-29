import React from 'react';
import { Link } from 'react-scroll';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import SellingPoints from '../selling-points/SellingPoints';
import Requests from '../requests/Requests';
import HowToStart from '../how-to-start/HowToStart';
import Projects from '../projects/Projects';
import Form from '../form/Form';
import Footer from '../footer/Footer';
import MessageContainer from '../message/messageContainer';
import sellingPointsTitles from '../../arrays/selling-points-titles';
import chooseUsArray from '../../arrays/why-choose-us';
import usefulArray from '../../arrays/why-is-it-useful.js';

function Homepage({
  isProfessionPageFocused,
  setIsProfessionPageFocused,
  pageTitles,
  onNavClick,
  onCourseClick,
  isMenuOpen,
  setIsMenuOpen,
  projectCollection,
  isProjectCollectionLoading,
  handleButtonClick,
  isModalOpen,
  closeModal,
}) {
  React.useEffect(() => {
    setIsProfessionPageFocused(false);
  }, [isProfessionPageFocused, setIsProfessionPageFocused]);

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
      <SellingPoints
        title={sellingPointsTitles.lead.title}
        subtitle={sellingPointsTitles.lead.subtitle}
        data={usefulArray}
      />
      <Requests
        name="requests"
        setIsProfessionPageFocused={setIsProfessionPageFocused}
        onCourseClick={onCourseClick}
      />
      <MessageContainer name="about" handleButtonClick={handleButtonClick} />
      <HowToStart name="start" handleButtonClick={handleButtonClick} />
      <SellingPoints
        title={sellingPointsTitles.chooseUs.title}
        subtitle={sellingPointsTitles.chooseUs.subtitle}
        data={chooseUsArray}
      />
      <Projects
        name="projects"
        title={pageTitles.default.title}
        subtitle={pageTitles.default.subtitle}
        onCourseClick={onCourseClick}
        displayCourseButtons
        projectCollection={projectCollection}
        isProjectCollectionLoading={isProjectCollectionLoading}
        onButtonClick={handleButtonClick}
      />
      <Footer name="footer" />
      <Form isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Homepage;
