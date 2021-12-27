import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';


//componenet 
import Section from './Components/section';


function App() {

  return (
    <div className="app">
      <Router>
        <Section />
      </Router>
    </div>
  );
}

export default App;
