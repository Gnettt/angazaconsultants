
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import HomePage from './pages/homepage';
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import LandingPage from './pages/landingpage';
import ProgramPage from './pages/programpage';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function App() {
  return (
   <div className="App">
      <Navbar />
       <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/program" element={<HomePage />} />
        <Route path="/programs/:id" element={<ProgramPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
