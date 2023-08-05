import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState,useEffect } from "react";
import Reservation from './Reservation';
import Navbar from './NavBar';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
    </Router>
  );
}

export default App;
