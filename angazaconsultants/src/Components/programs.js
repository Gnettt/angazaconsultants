import { useEffect, useState} from 'react';

function Program() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/programs') 
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error('Failed to fetch programs:', err));
  }, []);

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {programs.map((program, index) => (
          <div key={index} className="col">
            <div className="card shadow rounded-3 border-5 border-light">
              <div className="card-body p-3">
                <img
                  src={program.avatar}
                  alt={program.name}
                  className="img-fluid rounded mb-2"
                  style={{ maxHeight: '200px', width: 'auto' }}
                />
                <h5 className="card-title fw-bold">{program.name}</h5>
                <p className="card-subtitle mb-2 text-muted small">{program.location}</p>
                <p className="card-text mt-2">{program.description}</p>
                <p className="card-text mt-2 small">
                  <strong>Start:</strong> {program.startDate} | <strong>End:</strong> {program.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;