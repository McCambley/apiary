/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import ProfessionPage from './profession-page/ProfessionPage';
import PageNotFound from './page-not-found/PageNotFound';
import pageTitles from '../arrays/projects-page-titles'; // import titles to be used in profession page
import { QUERY } from '../utils/api';

function App() {
  const [isProfessionPageFocused, setIsProfessionPageFocused] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [courseQuery, setCourseQuery] = React.useState('Web');
  const { data, loading, error } = useQuery(QUERY, {
    variables: { classList: courseQuery },
  });
  // const [currentCourseData, setCurrentCourseData] = React.useState({});

  function handleNavClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleCourseClick(queryString) {
    setCourseQuery(queryString);
  }

  return (
    <div className="page">
      <div
        className={`header__menu-overlay ${
          isMenuOpen ? 'header__menu-overlay_type_active' : 'header__menu-overlay_type_inactive'
        }`}
        onClick={handleNavClick}
      />
      <Switch>
        <Route exact path="/">
          <Homepage
            isProfessionPageFocused={isProfessionPageFocused}
            setIsProfessionPageFocused={setIsProfessionPageFocused}
            pageTitles={pageTitles}
            onNavClick={handleNavClick}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          )
        </Route>
        <Route exact path="/profession-hero/:id">
          <ProfessionPage
            isProfessionPageFocused={isProfessionPageFocused}
            setIsProfessionPageFocused={setIsProfessionPageFocused}
            pageTitles={pageTitles}
            displayCourseButtons={false}
            onNavClick={handleNavClick}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import Hero from './hero/Hero';
// import Header from './header/Header';
// import Lead from './lead/Lead';
// import Requests from './requests/Requests';
// import DummyPage from './dummy-page/DummyPage';
// import ChooseUs from './choose-us/ChooseUs';
// import Projects from './projects/Projects';
// import Footer from './footer/Footer';
