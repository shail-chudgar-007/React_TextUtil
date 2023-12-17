import React, { useState } from "react";

export default function TextArea(propes) {
    const [text, setText] = useState("");
    const [previewText , setPreviewText] = useState("");

    const handleToUpperCase = ()=>{
        let newText = text.toUpperCase();
        setPreviewText(newText);
    };

    const handletoLowerCase = ()=>{
      let newText = text.toLocaleLowerCase();
      setPreviewText(newText);
    };

    const handleRequest = (event)=>{
        setText(event.target.value)
    }

    const handletoClearText = ()=>{
      setPreviewText('');
      setText('');
    };

    const handleToCopy = ()=>{
      navigator.clipboard.writeText(document.getElementById("previewText").value);
    };
  return (
    <>
    <div className="container "> 
      <div className={`mb-3 my-3  text-${propes.mode === 'light'?'dark':'light'}`}>
        <h3>{propes.heading}</h3>
        <textarea
          className={`form-control text-dark`}
          id="myBox"  value = {text} onChange={handleRequest}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleToUpperCase}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handletoLowerCase}>Conver To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handletoClearText}>Clear Text</button>
      <p className={`my-3 text-${propes.mode === 'light'?'dark':'light'}`}>{text.split(" ").length} Words and {text.length} Characters</p>
    </div>

    <div className="container my-3">
      <h3 className={`text-${propes.mode === 'light'?'dark':'light'}`}>Preview the Content</h3>
      <textarea
          className="form-control"
          id="previewText"  value = {previewText}
          rows="6"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleToCopy}>Copy Text</button>
    </div>

    </>
  );
}
