import ProgramList from "../components/ProgramList";

function MainPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Available Programs</h1>
      <ProgramList />
    </div>
  );
}

export default MainPage;