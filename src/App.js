import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
