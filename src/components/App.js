/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import ProfessionPage from './profession-page/ProfessionPage';
import PageNotFound from './page-not-found/PageNotFound';
import Footer from './footer/Footer';
import pageTitles from '../arrays/projects-page-titles'; // import titles to be used in profession page

function App() {
  const [professionPage, setProfessionPage] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleNavClick() {
    setIsMenuOpen(!isMenuOpen);
    setProfessionPage(false);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Homepage
            professionPage={professionPage}
            setProfessionPage={setProfessionPage}
            pageTitles={pageTitles}
            onNavClick={handleNavClick}
            isMenuOpen={isMenuOpen}
          />
        </Route>
        <Route exact path="/profession-hero/:id">
          <ProfessionPage
            professionPage={professionPage}
            setProfessionPage={setProfessionPage}
            pageTitles={pageTitles}
            displayCourseButtons={false}
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
