import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert123 from './components/Alert123';
import About123 from './components/About123';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <Router>
      <Navbar title="Teaeser" mode={mode} toggleMode={toggleMode} />
      <Alert123 alert={alert} />
      
      <div className="container my-3" style={{ marginTop: "80px" }}>
        <Routes>
          {/* 👇 index route ensures homepage renders properly on first load */}
          <Route index element={
            <Textform
              showAlert={showAlert}
              heading="Enter the text as headline"
              mode={mode}
            />
          } />
          <Route path="/about" element={<About123 mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
