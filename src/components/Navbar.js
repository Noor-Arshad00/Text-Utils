import React from 'react';

export default function Navbar(props) {
  const colorRed = () => {
    props.setMyStyle({
      color: "white",
      backgroundColor: "red",
      minHeight: "100vh",
    });
  };

  const colorBlack = () => {
    props.setMyStyle({
      color: "white",
      backgroundColor: "black",
      minHeight: "100vh",
    });
  };

  const colorYellow = () => {
    props.setMyStyle({
      color: "black",
      backgroundColor: "yellow",
      minHeight: "100vh",
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* Static Nav Links without Router */}
        <a className="nav-link active" href="#" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
>Home</a>
        <a className="nav-link" href="#"style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
>About</a>

        <div className="d-flex align-items-center ms-auto">
          {/* Theme buttons */}
          <button
            className="btn btn-sm mx-1"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={colorRed}
          >
            Red
          </button>
          <button
            className="btn btn-sm mx-1"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={colorBlack}
          >
            Black
          </button>
          <button
            className="btn btn-sm mx-1"
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={colorYellow}
          >
            Yellow
          </button>

          {/* Dark Mode Toggle */}
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
