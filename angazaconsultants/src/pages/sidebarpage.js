
import React, { useEffect, useState } from "react";
import ProgramCard from "../Components/ProgramCard"; // Assuming you have a component to display each program

function SideBarPage() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/programs")
      .then(res => res.json())
      .then(data => setPrograms(data))
      .catch(err => console.error("Error fetching programs:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>All Programs</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {programs.map((program, index) => (
          <div key={index} className="col">
            <ProgramCard program={program} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarPage;