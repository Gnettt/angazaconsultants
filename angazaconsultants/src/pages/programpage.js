import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProgramPage() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/programs/${id}`)
      .then((res) => res.json())
      .then((data) => setProgram(data))
      .catch((err) => console.error("Failed to fetch program:", err));
  }, [id]);

  if (!program) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2>{program.name}</h2>
        <img
          src={program.avatar}
          alt={program.name}
          className="img-fluid mb-3"
          style={{ maxWidth: "300px" }}
        />
        <p><strong>Location:</strong> {program.location}</p>
        <p>{program.description}</p>
        <p><strong>Start:</strong> {program.startDate}</p>
        <p><strong>End:</strong> {program.endDate}</p>
      </div>
    </div>
  );
}

export default ProgramPage;
