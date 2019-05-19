import React from 'react';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={'/'} component={Header} />
        <section className={'content'}>Content goes here</section>
      </Router>
    </div>
  );
}

export default App;
