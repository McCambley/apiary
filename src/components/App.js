/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Hero from './hero/Hero';
import Header from './header/Header';
import Lead from './lead/Lead';
import Requests from './requests/Requests';
import DummyPage from './dummy-page/DummyPage';
import ChooseUs from './choose-us/ChooseUs';
import Projects from './projects/Projects';
import Form from './form/Form';
import Footer from './footer/Footer';
import pageTitles from '../arrays/projects-page-titles'; // import titles to be used in profession page
import {
  webDevProjects, // default display data for webdev profession page
  dataAnalysisProjects, // default display data for dataAnalysis profession page
  dataScienceProjects, // default display data for dataScience profession page
} from '../arrays/delegate-tasks';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleButtonClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Hero onButtonClick={handleButtonClick} />
      <Lead />
      <Route path="/dummy-page">
        <DummyPage />
      </Route>
      <Requests />
      <ChooseUs />
      <Projects
        // Colin these props will be the things you change when you route this component
        // For the profession pages select the corresponding titles from pageTitles
        // select the defaultDisplay from delegate-tasks
        // displayCourseButtons will be false
        title={pageTitles.default.title}
        subtitle={pageTitles.default.subtitle}
        defaultDisplay={webDevProjects}
        displayCourseButtons={true}
      />
      <Footer />
      <Form isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;
