import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Headlinecards from "./components/headlinecards";
import Food from "./components/food";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Headlinecards/>
      <Food/>
      </div>
  );
}

export default App;
