import React from "react";
import './App.css'
import bgPattern from './assets/bg-pattern.svg'
import iconCheck from './assets/icon-check.svg'
import iconSlider from './assets/icon-slider.svg'
import circles from './assets/pattern-circles.svg'
import Card from "./components/Card";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full bg-red-300 flex justify-center items-start">
        <img src={bgPattern} alt='pattern' />
        <img className="absolute mt-20" src={circles} alt='circles' />
        <h1 className="absolute text-3xl mt-28 text-[#293356] font-extrabold tracking-wider">Simple, traffic-based pricing</h1>
        <p className="absolute mt-40 text-[#848EAD] text-base font-bold">Sign-up for our 30-day trial. No credit card required. </p>
      </div>
      <div className="w-full h-1/2 flex justify-center bg-red-400">
      <Card />
      </div>
    </div>
  );
};

export default App;
