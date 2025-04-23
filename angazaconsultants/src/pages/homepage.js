import Program from "../Components/programs";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/programs")
      .then(response => response.json())
      .then(data => setPrograms(data));
  }, []);

 
  const filteredPrograms = programs.filter(program =>
    Object.values(program)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ marginBottom: "20px", padding: "10px", width: "80%" }}
        />

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{ padding: "20px" }}>
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program, index) => (
              <Program key={index} program={program} />
            ))
          ) : (
            <p>No programs match your search.</p>
          )}
        </div>
      </div>
    </div>
);
}
export default HomePage;