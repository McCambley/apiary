import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Hero from './hero/Hero';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import DummyPage from './dummy-page/DummyPage';
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
      <Footer></Footer>
    </div>
  );
}

export default App;
