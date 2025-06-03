import React from "react";

function Program({ program }) {
  return (
    <div className="card shadow rounded-3 border-5 border-light h-100">
      <div className="card-body p-3">
        <img
          src={program.avatar_url}
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
  );
}

useEffect(() => {
  fetch("http://localhost:5000/programs")
    .then((res) => res.json())
    .then(setPrograms);
}, []);

export default Program;