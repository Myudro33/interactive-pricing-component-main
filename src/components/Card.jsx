import React from "react";
import "../App.css";

const Card = () => {
  return (
    <div className="w-[34rem] h-[25rem] absolute bg-white mx-auto -translate-y-52 mt-10 rounded-xl p-10">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[#848EAD] font-bold">100K PAGEVIEWS</h1>
        <span className="flex items-center">
          <h1 className="text-[#293356] font-bold text-5xl">$16.00</h1>
          <p className="text-[#848EAD] tracking-wider ml-2"> / month</p>
        </span>
      </div>
      <div className="w-full mt-10">
        <input className="slider" type="range" defaulvalue={50} min={0} max={100} name="" id="" />
      </div>
    </div>
  );
};

export default Card;
