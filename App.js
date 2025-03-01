import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import './App.css';
import Toogle from "./components/Toogle";

function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Toogle />  
      </div>
  );
}

export default App;
