
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import HomePage from './pages/homepage';
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import LandingPage from './pages/landingpage';
import './App.css';

function App() {
  return (
   <div className="App">
      <Navbar />
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
