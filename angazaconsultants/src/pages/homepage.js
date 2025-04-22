import ProgramList from "../Components/programs";

function HomePage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Our Programs</h1>
      <ProgramList />
    </div>
  );
}

export default HomePage;