import Program from "../Components/programs";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{ padding: "20px" }}>
      <h1 className="text-2xl font-bold mb-4">Our Programs</h1>
      <div className="min-h-screen p-6 bg-gray-100">
      <Program />
      </div>
    </div>
  );
}

export default HomePage;