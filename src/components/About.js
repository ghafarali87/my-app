import React, { useState } from 'react';

export default function About() {

  const [mystyle, setMystyle] = useState({
    backgroundColor: 'black',
    color: 'white'
  });

  const [btntext, setBtntext] = useState("Enable Light Mode");

  const toggleStyle = () => {

    if (mystyle.backgroundColor === 'black') {

      // Light Mode
      setMystyle({
        backgroundColor: 'white',
        color: 'black'
      });

      setBtntext("Enable Dark Mode");

    } else {

      // Dark Mode
      setMystyle({
        backgroundColor: 'black',
        color: 'white'
      });

      setBtntext("Enable Light Mode");
    }
  };

  return (
    <div className="container my-3" style={mystyle}>

      <h1>About Us</h1>

      <div className="accordion accordion-flush" id="accordionFlushExample">

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>

          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is Accordion Item 1.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>

          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is Accordion Item 2.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>

          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is Accordion Item 3.
            </div>
          </div>
        </div>

      </div>

      <button
        className="btn btn-primary my-3"
        onClick={toggleStyle}
      >
        {btntext}
      </button>

    </div>
  );
}