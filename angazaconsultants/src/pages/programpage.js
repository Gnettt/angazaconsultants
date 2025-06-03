import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../Components/sidebar'; 
const ProgramPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
 
    fetch("http://localhost:3001/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("Error fetching programs:", err));

   
    fetch(`http://localhost:3001/programs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Program not found');
        }
        return response.json();
      })
      .then((data) => {
        setProgram(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching program:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <h4>Loading program details...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-danger">Error: {error}</h4>
        <button onClick={() => navigate('/program')}>
          Return to Programs
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex">
      {/* Sidebar component */}
      <Sidebar programs={programs} onProgramSelect={() => {}} />
      
      <div className="container py-5" style={{ flexGrow: 1 }}>
        <h2 className="fw-bold">{program.name}</h2>
        <img
          src={program.avatar}
          alt={program.name || 'Program image'}
          className="img-fluid mb-3 rounded"
          style={{ maxWidth: '300px' }}
        />
        <p>{program.description}</p>
        <p><strong>Location:</strong> {program.location}</p>
        <p><strong>Start:</strong> {program.startDate}</p>
        <p><strong>End:</strong> {program.endDate}</p>
        <button onClick={() => navigate('/program')}>
          Return to Programs
        </button>
      </div>
    </div>
  );
};

export default ProgramPage;



