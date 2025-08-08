import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "../App.css";

export default function CharacterCard({ searchTerm, setSearchTerm }) {
  const [dataObj, setDataObj] = useState([]);

  useEffect(() => {
    fetch("/naruto_shippuden_stats.json")
      .then((res) => res.json())
      .then((data) => setDataObj(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return (
    <div className="row ">
      {searchTerm === ""
        ? dataObj.map((char) => (
            <div key={char.name} className="col-xl-3 col-sm-6 -mb-4 ">
              <div className="card character-card shadow">
                <img src={char.image} className="card-img-top character-image " alt={char.name} />
                <div className="card-body">
                  <h5 className="card-title ">{char.name}</h5>
                  <p className=" character-role">{char.role}</p>
                  <div className="stats">
                    <h5>Stats</h5>
                    <div>{"Strength: " + char.stats.Strength}</div>
                    <div>{"Speed: " + char.stats.Speed}</div>
                    <div>{"Intelligence: " + char.stats.Intelligence}</div>
                    <div>{"Chakra: " + char.stats.Chakra}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : dataObj
            .filter((char) => char.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((char) => (
              <div key={char.name} className="col-3 mb-4">
                <div className="card character-card shadow">
                  <img src={char.image} className="card-img-top character-image" alt={char.name} />
                  <div className="card-body">
                    <h5 className="card-title">{char.name}</h5>
                    <p className="character-role">{char.role}</p>
                    <div className="stats">
                      <h5>Stats</h5>
                      <div>Strength: {char.stats.Strength}</div>
                      <div>Speed: {char.stats.Speed}</div>
                      <div>Intelligence: {char.stats.Intelligence}</div>
                      <div>Chakra: {char.stats.Chakra}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      {!CharacterCard && <p>No data available</p>}
    </div>
  );
}
