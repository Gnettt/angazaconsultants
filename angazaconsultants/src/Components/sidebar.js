import React, { useEffect, useState } from "react";

const Sidebar = ({ onProgramSelect }) => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/programs")
      .then(res => res.json())
      .then(data => setPrograms(data))
      .catch(err => console.error("Error fetching programs:", err));
  }, []);

   return (
    <div className="bg-light p-3" style={{ width: "250px", borderRight: "1px solid #ccc" }}>
      <h4 className="mb-3">Programs</h4>
      <ul className="list-unstyled">
        {programs.map((program, index) => (
          <li
            key={index}
            className="nav-item"
            style={{ cursor: "pointer", marginBottom: "0.5rem" }}
          >
            <button
              className="nav-link text-dark fw-bold p-0"
              onClick={() => onProgramSelect(program)}
            >
              {program.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;