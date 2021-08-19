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

  // this variable is fed into the query string in order to search the database for course project lists
  // when updated, this will trigger a new query and update the visible list of projects
  const [courseQuery, setCourseQuery] = React.useState('Web');
  // ApolloClient returns from each search some data and a loading boolean that is true if the fetch is incomplete
  // when the fetch is complete and data is populated, loading is then false
  const { data, loading } = useQuery(QUERY, {
    variables: { classList: courseQuery },
  });

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
            onCourseClick={handleCourseClick}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            projectCollection={loading ? [] : data.projectCollection.items}
            isProjectCollectionLoading={loading}
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
            projectCollection={loading ? [] : data.projectCollection.items}
            isProjectCollectionLoading={loading}
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
