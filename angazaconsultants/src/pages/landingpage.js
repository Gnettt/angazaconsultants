import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/home');
  };

  const primaryColor = '#316c21';

  return (
    <div className="bg-white" style={{ color: primaryColor, fontFamily: 'sans-serif', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: primaryColor, padding: '8rem 1rem' }}>
        <h2 className="display-4 fw-bold mb-3">Sowing Seeds for a Greener Future</h2>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '40rem' }}>
          At <b>Angaza Consultants</b>, we empower farmers with sustainable agricultural solutions and support rural communities.
        </p>
        <button
          onClick={handleExplore}
        >
          Explore
        </button>
      </section>

      <div> {/* The main container for About and Services */}
        <section id="about" className="py-5 px-3 text-center mx-auto" style={{ maxWidth: '60rem', padding: '4rem 1rem' }}>
          <h3 className="h2 fw-semibold mb-3">Why Choose Angaza Consultants?</h3>
          <p className="text-muted">
            We offer innovative agricultural services and market access, helping farmers thrive while preserving the environment.
          </p>
        </section>

        <section id="services" className="py-5 bg-light px-3" style={{ padding: '4rem 1rem' }}>
          <div className="container text-center" style={{ maxWidth: '75rem' }}>
            <h3 className="h2 fw-semibold mb-4">Our Services</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card shadow rounded-3 h-100">
                  <div className="card-body p-4">
                    <h4 className="card-title h5 fw-bold mb-2">Farm Consultancy</h4>
                    <p className="card-text">
                      Angaza is an agri investment and agri-business advisory firm specialised in helping create world class farming and integrated agribusinesses across the value chain...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow rounded-3 h-100">
                  <div className="card-body p-4">
                    <h4 className="card-title h5 fw-bold mb-2">Value Addition</h4>
                    <p className="card-text">
                      Angaza is committed to training, developing, and accelerating groups and SME's focused on commercial agriculture. By transforming their produce into high-demand...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow rounded-3 h-100">
                  <div className="card-body p-4">
                    <h4 className="card-title h5 fw-bold mb-2">Market Access</h4>
                    <p className="card-text">
                      We connect farmers to profitable markets, ensuring their produce reaches the right buyers at the right time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;