import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/homepage');
  };

  return (
    <div className="bg-white text-[#316c21] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-[#316c21] text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Sowing Seeds for a Greener Future</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          At <b>Angaza Consultants</b>, we empower farmers with sustainable agricultural solutions and support rural communities.
        </p>
        <button
          onClick={handleExplore}
          className="bg-white text-[#316c21] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Explore
        </button>
      </section>

     
      <section id="about" className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Why Choose Angaza Consultants?</h3>
        <p className="text-gray-700">
          We offer innovative agricultural services and market access, helping farmers thrive while preserving the environment.
        </p>
      </section>

      
      <section id="services" className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-bold mb-2">Farm Consultancy</h4>
              <p>
                Angaza is an agri investment and agri-business advisory firm specialised in helping create world class farming and integrated agribusinesses across the value chain...
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-bold mb-2">Value Addition</h4>
              <p>
                Angaza is committed to training, developing, and accelerating groups and SME's focused on commercial agriculture. By transforming their produce into high-demand...
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-bold mb-2">Market Access</h4>
              <p>
                Angaza connects rural farmers to reliable markets through contract farming, ensuring fair prices, sustainable practices, and improved incomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
