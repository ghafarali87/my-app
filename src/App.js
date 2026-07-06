import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // yha pr alert ka state bnaya hai jo alert ko show krta hai
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('light');

  const togglemode = () => {

    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

    } else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }

  };

  return (
    <>
      {/* <Router> */}

        <Navbar
          title="TextUtils"
          abouttext="About"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />

        <div className="container">
           <Textform
                  heading="Enter and analyze text below"
                  mode={mode}
                  showAlert={showAlert}
                />
        </div>
{/* 
          <Routes>
            <Route path="/about" element={<About mode={mode} />} /> */}

            {/* <Route
              path="/"
              element={
                <Textform
                  heading="Enter and analyze text below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes> */}
  

      {/* </Router> */}
    </>
  );
}

export default App;