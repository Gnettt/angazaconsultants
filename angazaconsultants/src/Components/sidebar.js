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
    <div style={{ width: "200px", borderRight: "1px solid #ccc", padding: "10px" }}>
      <h1>Programs</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {programs.map((program, index) => (
          <li
            key={index}
            style={{ cursor: "pointer", marginBottom: "8px", color: "black",  fontWeight: "bold"}}
            onClick={() => onProgramSelect(program)}
          >
            {program.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;