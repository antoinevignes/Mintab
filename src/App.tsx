import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/geist-mono";
import { IconSettings } from "@tabler/icons-react";

function App() {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [newName, setNewName] = useState(name || "");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const saveNewName = (e: React.FormEvent) => {
    e.preventDefault();
    setName(newName);
    localStorage.setItem("name", newName);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="absolute top-4 right-4 hover:border-neutral-100 bg-transparent"
        onClick={() => setIsModalOpen(true)}
      >
        <IconSettings />
      </button>

      <h1 className="mb-10 font-mono">Welcome {name}</h1>
      <p className="flex items-center justify-center text-4xl font-mono">
        {time.toLocaleDateString()} <br />
        {time.toLocaleTimeString()}
      </p>

      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-neutral-100">
            <h2 className="text-xl mb-4">Change your name</h2>
            <form onSubmit={saveNewName} className="flex flex-col items-center">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border p-2 rounded mb-4"
              />
              <button
                type="submit"
                className="p-2 rounded hover:border-neutral-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
