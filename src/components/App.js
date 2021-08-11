import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Hero from './hero/Hero';
import client from './client';
import Header from './header/Header';
import Lead from './lead/Lead';
import Requests from './requests/Requests';
import DummyPage from './dummy-page/DummyPage';
import ChooseUs from './choose-us/ChooseUs';
import Footer from './footer/Footer';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
  });

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
      <Footer />
    </div>
  );
}

export default App;
