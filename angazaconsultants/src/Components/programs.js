import { useEffect, useState} from 'react';

function Program() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/programs') 
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error('Failed to fetch programs:', err));
  }, []);

  return (
    <div className="p-4 grid gap-4">
      {programs.map((program, index) => (
        <div key={index} style={{ border: "5px solid #ccc", padding: "20px", marginBottom: "20px", borderRadius: "8px" }} className="bg-white shadow-md rounded-lg p-4">
         <img src={program.avatar} alt={program.name} className="program-avatar" style={{ width: "auto" }} />
          <h2 className="text-xl font-bold">{program.name}</h2>
          <p className="text-sm text-gray-500">{program.location}</p>
          <p className="mt-2">{program.description}</p>
          <p className="mt-2 text-sm">
            <strong>Start:</strong> {program.startDate} | <strong>End:</strong> {program.endDate}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Program;