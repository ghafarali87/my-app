
// import React, {useState} from 'react';


// export default function Textform(props) {
    
//     const handleonchange = (event) => {
//         console.log("on change");
//         setText(event.target.value);// iss sy hum text ko update krty hain jo user ne type kiya hai
//     }
// const handleUpClick =() =>{
//     console.log("button was clicked");// yy console base bug chk krny liy lgya hai 
//     let newText = text.toUpperCase();
//     setText(newText);
//     props.showAlert("Text converted to uppercase", "success");
// }
// const handleloClick =() =>{
//     console.log("button was clicked");// yy console base bug chk krny liy lgya hai 
//     let newText = text.toLowerCase();
//     setText(newText);
//     props.showAlert("Text converted to lowercase", "success");

// }
// const handlecopyClick =() =>{
//     console.log("button was clicked");
//  // yy function ko call krta hai jo text ko select krta hai
//     navigator.clipboard.writeText(text); // yy function ko call krta hai jo text ko copy krta hai
//     props.showAlert("Text copied to clipboard", "success");
// }
// const handleclearClick =() =>{
//     console.log("button was clicked");
//     let newText = '';
//     setText(newText);
//     props.showAlert("Text cleared", "success");
// }

// const handleextraspacesClick =() =>{
//     console.log("button was clicked");
//     let newText = text.split(/[ ]+/).join(" ");
//     setText(newText);
//     props.showAlert("Extra spaces removed", "success");
// }
// const speak = () => {

//     if (!text.trim()) {
//         alert("Please enter some text first");
//         return;
//     }

//     window.speechSynthesis.cancel();

//     const msg = new SpeechSynthesisUtterance(text);

//     msg.lang = "en-US";
//     msg.rate = 1;
//     msg.pitch = 1;
//     msg.volume = 1;

//     window.speechSynthesis.speak(msg);
// }
//     const [text, setText] = useState(""); 
   
//   return (
//     <>
//     <div className="container">
//    <h1>{props.heading}</h1>
// <div className="mb-3">
  
//   <textarea className="form-control"   style={{
//     backgroundColor: props.mode === "dark" ? "#042743" : "white",
//     color: props.mode === "dark" ? "white" : "black"
//   }}//yha pr humne textarea ka background color aur text color ko mode ke hisab sy change kr diya hai
//    value={text} onChange={handleonchange} id="textform" rows="8"></textarea>
//   <button className="btn btn-primary mx-3 my-3" onClick = {handleUpClick}>Convert into Upercase</button>
//   <button className="btn btn-primary " onClick = {handleloClick}>Convert into Lowercase</button>
//   <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
//    <button className="btn btn-primary mx-3 " onClick = {handlecopyClick}>Copy Text</button>
//    <button className="btn btn-primary " onClick = {handleextraspacesClick}>Remove Extra Spaces</button>
//    <button className="btn btn-primary mx-3 " onClick = {handleclearClick}>Clear Text</button>
   

 
// </div>
// </div>

// <div className="container">

//     <h1>summery your text </h1>
//     <p>{text.split(" ").filter((Element) =>{return Element.length !== 0}).length} words and {text.length} characters</p>
//     <p>{0.008 * text.split(" ").length} Minutes read</p> 
//     <h2>preview</h2>
//     <p>{text.length>0 ? text : "Enter text to preview"}</p>
// </div>


//     </>

    
//   );
// }



import "./Css/TextForm.css";

import React from 'react';

export default function Textform(props) {

    const [text, setText] = React.useState("");
    // Function to handle text change
    const handleonchange = (event) => {
          window.speechSynthesis.cancel();
  setText(event.target.value);
};
// Function to handle uppercase conversion
    const handleUpClick = () => {
  if (text.trim() === "") {
    props.showAlert("Please enter some text first", "warning");
    return;
  }

  setText(text.toUpperCase());
  props.showAlert("Text converted to Uppercase", "success");
};
// Function to handle lowercase conversion
const handleloClick = () => {
  if (text.trim() === "") {
    props.showAlert("Please enter some text first", "warning");
    return;
  }

  setText(text.toLowerCase());
  props.showAlert("Text converted to Lowercase", "success");
};
// Function to handle copy action
const handlecopyClick = () => {
  if (text.trim() === "") {
    props.showAlert("Nothing to copy", "warning");
    return;
  }

  navigator.clipboard.writeText(text);
  props.showAlert("Text copied successfully", "success");
};
// Function to handle clear action
const handleclearClick = () => {
  if (text.trim() === "") {
    props.showAlert("Textbox is already empty", "warning");
    return;
  }

  setText("");
  props.showAlert("Text cleared", "success");
};
// Function to handle extra spaces removal
const handleextraspacesClick = () => {
  if (text.trim() === "") {
    props.showAlert("Please enter some text first", "warning");
    return;
  }

  let newText = text.split(/\s+/).join(" ");

  setText(newText);

  props.showAlert("Extra spaces removed", "success");
};
// Function to handle speaking
const speak = () => {

  if (text.trim() === "") {
    props.showAlert("Please enter some text first", "warning");
    return;
  }

  window.speechSynthesis.cancel();

  const msg = new SpeechSynthesisUtterance(text);

  msg.lang = "en-US";
  msg.rate = 1;
  msg.pitch = 1;
  msg.volume = 1;

  window.speechSynthesis.speak(msg);

  props.showAlert("Speaking...", "success");
};
// Function to handle stopping speech
 const handlestopClick = () => {
  window.speechSynthesis.cancel();
  props.showAlert("Speech stopped", "success");
}

  return (
  <>
    <div className={`p-4 rounded-4 shadow-lg ${
    props.mode === "dark" ? "bg-dark text-light" : "bg-white text-dark"
  }`}>

      {/* Hero Card */}
      <div
       
      >
        <h1 className="fw-bold display-5">
          Transform Your Text
        </h1>

        <p
          className="lead"
          style={{
            color: props.mode === "dark" ? "#dcdcdc" : "#666",
          }}
        >
          Convert, Analyze & Optimize your text in seconds.
        </p>

        <div className="mt-4">

          <textarea
            className="form-control shadow"
            value={text}
            onChange={handleonchange}
            rows="8"
            placeholder=" Start typing here..."
            style={{
              borderRadius: "15px",
              resize: "none",
              backgroundColor:
                props.mode === "dark"
                  ? "#063251"
                  : "white",

              color:
                props.mode === "dark"
                  ? "white"
                  : "black",

              border:
                props.mode === "dark"
                  ? "1px solid #0d6efd"
                  : "1px solid #ddd",
            }}
          ></textarea>

        </div>

        {/* Buttons */}

        <div className="mt-4 d-flex flex-wrap gap-2">

          <button
            className="btn btn-primary"
            onClick={handleUpClick}
             disabled={text.trim().length === 0}
          >
            ⬆ Uppercase
          </button>

          <button
            className="btn btn-success"
            onClick={handleloClick}
                disabled={text.trim().length === 0}
          >
            ⬇ Lowercase
          </button>

          <button
            className="btn btn-warning"
            onClick={speak}
            disabled={text.trim().length === 0}
          >
            🔊 Speak
          </button>

           <button
            className="btn btn-primary"
            onClick={handlestopClick}
             disabled={text.trim().length === 0}
          >
           ⏹ Stop
          </button>

          <button
            className="btn btn-info"
            onClick={handlecopyClick}
            disabled={text.trim().length === 0}
          >
            
            📋 Copy
          </button>


          <button
            className="btn btn-secondary"
            onClick={handleextraspacesClick}
            disabled={text.trim().length === 0}
          >
            ✨ Remove Spaces
          </button>

          <button
            className="btn btn-danger"
            onClick={handleclearClick}
            disabled={text.trim().length === 0}
          >
            🗑 Clear
          </button>

        </div>

      </div>
      </div>
      <div
       className={`mt-5 p-4 rounded-4 shadow ${
props.mode==="dark"?"bg-dark text-light":"bg-white text-dark"
}`}
      >
        <h2 className="fw-bold mb-4">
          Text Statistics
        </h2>

        <div className="row g-3">

          <div className="col-md-3">

            <div className="card shadow border-0 text-center h-100">

              <div className="card-body">

                <h2 className="text-primary">
                  {text.split(" ").filter((Element) => Element.length !== 0).length}
                </h2>

                <p className="text-muted">
                  Words
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card shadow border-0 text-center h-100">

              <div className="card-body">

                <h2 className="text-success">
                  {text.length}
                </h2>

                <p className="text-muted">
                  Characters
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card shadow border-0 text-center h-100">

              <div className="card-body">

                <h2 className="text-warning">
                  {(0.008 * text.split(" ").filter((Element) => Element.length !== 0).length).toFixed(2)}
                </h2>

                <p className="text-muted">
                  Minutes Read
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card shadow border-0 text-center h-100">

              <div className="card-body">

                <h2 className="text-danger">
                  {text === "" ? 0 : text.split("\n").length}
                </h2>

                <p className="text-muted">
                  Lines
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
        <div
       className={`mt-4 p-4 rounded-4 shadow ${
props.mode==="dark"?"bg-dark text-light":"bg-white text-dark"
}`}
      >

        <h2 className="fw-bold">
           Live Preview
        </h2>

        <hr />

        <div
          className="p-3 rounded"
          style={{
            minHeight: "160px",
            backgroundColor:
              props.mode === "dark"
                ? "#063251"
                : "#f8f9fa",

            border: "1px solid #ddd",
          }}
        >

          {text.length > 0
            ? text
            : " Start typing to see preview..."}

        </div>

      </div>
</>

    
  );
}
