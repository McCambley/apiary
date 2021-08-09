import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import Hero from './hero/Hero.js';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import DummyPage from './dummy-page/DummyPage.js';
import ChooseUs from './choose-us/ChooseUs.js';
import Projects from './projects/Projects';
=======
import Hero from './hero/Hero';
import Header from './header/Header';
import Lead from './lead/Lead';
import Requests from './requests/Requests';
import DummyPage from './dummy-page/DummyPage';
import ChooseUs from './choose-us/ChooseUs';
>>>>>>> main
import Footer from './footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Lead />
      <Route path="/dummy-page">
        <DummyPage />
      </Route>
      <Requests />
      <ChooseUs />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
