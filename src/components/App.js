import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';

function App() {
  return <div className="page"><Header/><Lead /></div>;
}

export default App;
