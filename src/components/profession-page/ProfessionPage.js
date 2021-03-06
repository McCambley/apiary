import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import ProfessionHero from '../profession-hero/ProfessionHero';
import Header from '../header/Header';
import Projects from '../projects/Projects';
import professionHeroTitles from '../../arrays/profession-hero-titles';
import professionHeroCards from '../../arrays/profession-hero-cards';
import projectsPageTitles from '../../arrays/projects-page-titles'; // import titles to be used in profession page
import Footer from '../footer/Footer';
import Form from '../form/Form';

function ProfessionPage({
  isProfessionPageFocused,
  setIsProfessionPageFocused,
  displayCourseButtons,
  onNavClick,
  isMenuOpen,
  setIsMenuOpen,
  projectCollection,
  isProjectCollectionLoading,
  handleButtonClick,
  isModalOpen,
  closeModal,
}) {
  const { id } = useParams();
  const professionTitle = professionHeroTitles.find((page) => page.id === id);
  const professionCard = professionHeroCards.find((cardGroup) => cardGroup.id === id);

  const [projectTitle, setProjectTitle] = React.useState(projectsPageTitles.webDev.title);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  React.useEffect(() => {
    setIsProfessionPageFocused(true);
  }, [setIsProfessionPageFocused]);

  React.useEffect(() => {
    if (id === 'web-dev') {
      setProjectTitle(projectsPageTitles.webDev.title);
    } else if (id === 'data-analysis') {
      setProjectTitle(projectsPageTitles.dataAnalysis.title);
    } else if (id === 'data-science') {
      setProjectTitle(projectsPageTitles.dataScience.title);
    }
  }, [id]);

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
          <NavLink className="header__link" exact to="/" smooth="true" onClick={onNavClick}>
            Back to homepage
          </NavLink>
        </li>
        <li className="header__list">
          <Link className="header__link" to="projects" smooth="true" onClick={onNavClick}>
            Students' projects
          </Link>
        </li>
      </Header>
      <ProfessionHero professionTitle={professionTitle} professionCard={professionCard} />
      <Projects
        name="projects"
        title={projectTitle}
        displayCourseButtons={displayCourseButtons}
        projectCollection={projectCollection}
        isProjectCollectionLoading={isProjectCollectionLoading}
        onButtonClick={handleButtonClick}
      />
      <Footer name="footer" />
      <Form isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default ProfessionPage;
