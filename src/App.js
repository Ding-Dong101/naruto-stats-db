// import logo from "./logo.svg";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="container">
        <CharacterCard searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </section>
    </div>
  );
}

export default App;
