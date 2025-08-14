import React from "react";
import Header from "./components/Header";
import NavLinks from "./components/Nav";  
import About from './components/About';
import Experience from "./components/Experience";
import Software from "./components/Software";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience/>
      <Software/>
    </div>
  );
}

export default App;
