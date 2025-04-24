import Program from "../Components/programs";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("Failed to fetch programs:", err));
  }, []);

  const filteredPrograms = programs.filter((program) =>
    Object.values(program)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-10 p-4">
          <input
            type="text"
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-4"
          />

          {selectedProgram ? (
            <div className="card mb-4 shadow rounded-3">
              <div className="card-body">
                <h2 className="card-title">{selectedProgram.name}</h2>
                <img
                  src={selectedProgram.avatar}
                  alt={selectedProgram.name}
                  className="img-fluid mb-3"
                  style={{ maxWidth: "300px" }}
                />
                <p className="card-text">{selectedProgram.description}</p>
                <p className="card-text">
                  <strong>Location:</strong> {selectedProgram.location}
                </p>
                <p className="card-text">
                  <strong>Start:</strong> {selectedProgram.startDate}
                </p>
                <p className="card-text">
                  <strong>End:</strong> {selectedProgram.endDate}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-muted">Search for a program to view its details.</p>
          )}

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <div className="col" key={index}>
                  <Program program={program} />
                </div>
              ))
            ) : (
              <p>No programs match your search.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
