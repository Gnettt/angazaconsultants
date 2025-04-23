
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Angaza Consultants</h1>
      <p>Embark on our journey to empower farmers through sustainable agribusiness programs.</p>
      <div className="landing-buttons">
        <Link to="/home">
          <button className="explore-btn">Explore Programs</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
