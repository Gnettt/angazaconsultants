import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './pages/homepage';
import './App.css';

function App() {
  return (
   <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
