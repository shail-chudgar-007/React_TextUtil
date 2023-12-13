import React, { useState } from "react";

export default function TextArea(propes) {
    const [text, setText] = useState("Enter Some Text");

    const handleToUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleRequest = (event)=>{
        setText(event.target.value)
    }
    //setText("Hello");
  return (
    <div>
      <div className="mb-3 my-3">
        <h1>{propes.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"  value = {text} onChange={handleRequest}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleToUpperCase}>Convert to UpperCase</button>
    </div>
  );
}
