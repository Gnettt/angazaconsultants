import Program from "../Components/programs";
import React, { useEffect, useState } from "react";
import Sidebar from "../Components/sidebar";

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
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-light min-vh-100 p-3 border-end">
          <Sidebar onProgramSelect={setSelectedProgram} />
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-4"
          />

          {/* Selected Program Info */}
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
                <p className="card-text"><strong>Location:</strong> {selectedProgram.location}</p>
                <p className="card-text"><strong>Start:</strong> {selectedProgram.startDate}</p>
                <p className="card-text"><strong>End:</strong> {selectedProgram.endDate}</p>
              </div>
            </div>
          ) : (
            <p className="text-muted">Select a program from the sidebar to view its details.</p>
          )}

          {/* Program Cards */}
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

