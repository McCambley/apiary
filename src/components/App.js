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
