import React from "react";
import './App.css'
import bgPattern from './assets/bg-pattern.svg'
import circles from './assets/pattern-circles.svg'
import Card from "./components/Card";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full md:h-2/3 xs:h-2/5 flex justify-center items-start">
        <img className="w-full xs:h-full" src={bgPattern} alt='pattern' />
        <img className="absolute mt-20" src={circles} alt='circles' />
        <h1 className="absolute md:text-3xl xs:text-lg   mt-28 text-[#293356] font-extrabold tracking-wider">Simple, traffic-based pricing</h1>
        <p className="absolute md:mt-40 xs:mt-36 text-[#848EAD] text-base md:font-bold xs:text-center md:text-start">Sign-up for our 30-day trial.<br className="md:hidden" /> No credit card required. </p>
      </div>
      <div className="w-full h-1/2 flex justify-center">
      <Card />
      </div>
    </div>
  );
};

export default App;
