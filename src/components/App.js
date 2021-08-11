/* eslint-disable react/button-has-type */
import React from 'react';
import './App.css';
import './hero/Hero.css';
import { Route } from 'react-router-dom';

import Hero from './hero/Hero';
import Header from './header/Header';
import Lead from './lead/Lead';
import Requests from './requests/Requests';
import DummyPage from './dummy-page/DummyPage';
import ChooseUs from './choose-us/ChooseUs';
import Footer from './footer/Footer';
import Message from './messages/Message';
import messages from '../arrays/what-is-practicum';

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
      <Message.Container>
        <Message.Title>What is Practicum by Yandex?</Message.Title>
        {messages.map((item) => (
          <Message key={item.id} direction={item.direction}>
            <Message.Image displayLogo={item.displayLogo} src={item.backgroundImage} />
            <Message.Bubble borderRadius={item.borderRadius} backgroundColor={item.backgroundColor}>
              <Message.Reply text={item.text}>{item.message}</Message.Reply>
            </Message.Bubble>
          </Message>
        ))}
        <div className="hero__cta-wrapper" style={{ alignSelf: 'center' }}>
          <button className="hero__cta-button">Delegate a task</button>
        </div>
      </Message.Container>
      <ChooseUs />
      <Footer />
    </div>
  );
}

export default App;
