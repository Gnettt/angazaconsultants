import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = ({ programs }) => {
  return (
    <div className="bg-light p-3" style={{ width: "250px", borderRight: "1px solid #ccc" }}>
      <h4 className="mb-3">Programs</h4>
      <ul className="list-unstyled">
        {programs.map((program) => (
          <li key={program.id} className="nav-item" style={{ marginBottom: "0.5rem" }}>
            <Link 
              to={`/programs/${program.id}`} 
              className="nav-link text-dark fw-bold p-0"
            >
              {program.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;