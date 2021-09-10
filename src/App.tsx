import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
    </div>
  );
}

export default App;
