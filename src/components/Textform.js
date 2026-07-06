import React, {useState} from 'react';

export default function Textform(props) {
    
    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);// iss sy hum text ko update krty hain jo user ne type kiya hai
    }
const handleUpClick =() =>{
    console.log("button was clicked");// yy console base bug chk krny liy lgya hai 
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
}
const handleloClick =() =>{
    console.log("button was clicked");// yy console base bug chk krny liy lgya hai 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");

}
const handlecopyClick =() =>{
    console.log("button was clicked");
 // yy function ko call krta hai jo text ko select krta hai
    navigator.clipboard.writeText(text); // yy function ko call krta hai jo text ko copy krta hai
    props.showAlert("Text copied to clipboard", "success");
}

const handleextraspacesClick =() =>{
    console.log("button was clicked");
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
}
const speak = () => {

    if (!text.trim()) {
        alert("Please enter some text first");
        return;
    }

    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);

    msg.lang = "en-US";
    msg.rate = 1;
    msg.pitch = 1;
    msg.volume = 1;

    window.speechSynthesis.speak(msg);
}
    const [text, setText] = useState("Enter text here2"); 
   
  return (
    <>
    <div className="container">
   <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control"   style={{
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    color: props.mode === "dark" ? "white" : "black"
  }}//yha pr humne textarea ka background color aur text color ko mode ke hisab sy change kr diya hai
   value={text} onChange={handleonchange} id="textform" rows="8"></textarea>
  <button className="btn btn-primary mx-3 my-3" onClick = {handleUpClick}>Convert into Upercase</button>
  <button className="btn btn-primary " onClick = {handleloClick}>Convert into Lowercase</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
   <button className="btn btn-primary mx-3 " onClick = {handlecopyClick}>Copy Text</button>
   <button className="btn btn-primary " onClick = {handleextraspacesClick}>Remove Extra Spaces</button>

   

 
</div>
</div>

<div className="container">

    <h1>summery your text </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p> 
    <h2>preview</h2>
    <p>{text.length>0 ? text : "Enter text to preview"}</p>
</div>


    </>

    
  );
}
