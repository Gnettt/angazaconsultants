import logo from './logo.svg';
import React from 'react';
import Navbar from './Components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
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
