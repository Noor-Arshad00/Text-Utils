import React from 'react';
import { Link } from 'react-router-dom'; // 👈 import Link

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* Nav Links using Router Link */}
        <Link className="nav-link active" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          Home
        </Link>
        <Link className="nav-link ms-3" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          About
        </Link>

        <div className="d-flex align-items-center ms-auto">
          <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label ms-2" htmlFor="switchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
