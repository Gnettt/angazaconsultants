import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="container my-5">
      <input
        type="text"
        placeholder="Search programs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-4"
      />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program) => (
            <div className="col" key={program.id}>
              <Link
                to={`/programs/${program.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={program.avatar}
                    alt={program.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{program.name}</h5>
                    <p className="card-text text-muted">{program.location}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No programs match your search.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
