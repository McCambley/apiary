import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Hero from './hero/Hero.js';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import DummyPage from './dummy-page/DummyPage.js';
import ChooseUs from './choose-us/ChooseUs.js';
import ProfessionHero from './profession-hero/ProfessionHero.js';
import Footer from './footer/Footer';
import Requests from './requests/Requests';

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Lead />
      <Requests />
      <Route path="/dummy-page">
        <DummyPage />
      </Route>
      <ChooseUs />
      <ProfessionHero />
      <Footer />
    </div>
  );
}

export default App;
