import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <Router>
        <Route path="/" exact component={Dashboard} />
    </Router>
  );
}

export default App;
