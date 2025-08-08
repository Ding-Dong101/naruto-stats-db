import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { useState } from "react";

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 mb-5">
      {/* Logo div */}
      <div className="d-flex align-items-center me-3">
        <img src="/title.ico" alt="Logo" style={{ height: "40px" }} />
      </div>

      {/* Title div */}
      <div className="navbar-brand me-auto">Naruto Shippuden Power Stats</div>

      {/* Search box */}
      <form className="d-flex">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search character..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </form>
    </nav>
  );
}
