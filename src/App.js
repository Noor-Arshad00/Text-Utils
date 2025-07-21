import React, { useState } from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert123 from './components/Alert123';
// import About123 from './components/About123';
// import Not from './components/Not';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      document.body.style.color="white";
        showAlert("Dark Mode Enable", "success");
        document.title = 'TextUtils- DarkMode';
        // setInterval(() => {
        //   document.title = 'Its very Amazing'
        // },2000);
        // setInterval(() => {
        //   document.title='Download it'
        // },1500);
    } else {
      setMode("light");
      document.body.style.background = "white";        
     document.body.style.color="black";
     showAlert("Light Mode Enable", "success");
     document.title = 'TextUtils- LightMode';

    }
  };

  const [myStyle, setMyStyle] = useState({
    color: "black",
    // minHeight: "100vh",
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <div style={myStyle}>
        <Navbar
          title="Teaeser"
          myStyle={myStyle}
          setMyStyle={setMyStyle}
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert123 alert={alert} />
 <Textform
            showAlert={showAlert}
            heading="Enter the text as headline"
            myStyle={myStyle}
            mode={mode}
          />
        <div className="container my-3">
          {/* <About123 /> */}

          
        </div>
      </div>
    </>
  );
}

export default App;
