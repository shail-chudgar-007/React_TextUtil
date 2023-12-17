import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  const [mode , setMode ] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#454545';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtil" about="About TextUtil" mode ={mode} toggleMode ={toggleMode}/>
      <div className="container">
        <TextArea heading="Enter the Text below for Analyzing" mode ={mode}/>
      </div>
    </>
  );
}

export default App;
