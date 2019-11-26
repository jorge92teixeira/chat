import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="chat__wrapper">
      <Route path='/' exact component={Join} />
      <Route path='/chat' exact component={Chat} />
    </div>
  </BrowserRouter>
);

export default App;
