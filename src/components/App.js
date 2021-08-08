import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import DummyPage from './dummy-page/DummyPage';

function App() {
  return (
    <div className="page">
      <Header />
      <Lead />
      <Route path="/dummy-page">
        <DummyPage />
      </Route>
    </div>
  )
}

export default App;
