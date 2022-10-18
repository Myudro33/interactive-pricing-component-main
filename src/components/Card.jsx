import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import check from "../assets/icon-check.svg";

const Card = () => {
  const [monthly, setmonthly] = useState(true);
  const [value, setValue] = useState(50);
  const [price, setPrice] = useState(0.0);
  const [pageViews, setPageViews] = useState("500K");
  useEffect(() => {
    getPageViews();
    if (!monthly) {
      if (value * 10000 > 10000 && value * 10000 < 50000) {
        const discount = 8 * 0.25;
        setPrice(`${8 - discount}.00`);
      } else if (value * 10000 > 50000 && value * 10000 < 100000) {
        const discount = 12 * 0.25;
        setPrice(`${12 - discount}.00`);
      } else if (value * 10000 > 100000 && value * 10000 < 500000) {
        const discount = 16 * 0.25;
        setPrice(`${16 - discount}.00`);
      } else if (value * 10000 === 500000) {
        const discount = 16 * 0.25;
        setPrice(`${16 - discount}.00`);
      } else if (value * 10000 > 500000 && value * 10000 < 1000000) {
        const discount = 24 * 0.25;
        setPrice(`${24 - discount}.00`);
      } else if (value * 10000 === 1000000) {
        const discount = 36 * 0.25;
        setPrice(`${36 - discount}.00`);
      }
    } else {
      if (value * 10000 > 10000 && value * 10000 < 50000) {
        setPrice(`${8}.00`);
      } else if (value * 10000 > 50000 && value * 10000 < 100000) {
        setPrice(`${12}.00`);
      } else if (value * 10000 > 100000 && value * 10000 < 500000) {
        setPrice(`${16}.00`);
      } else if (value * 10000 === 500000) {
        setPrice(`${16}.00`);
      } else if (value * 10000 > 500000 && value * 10000 < 1000000) {
        setPrice(`${24}.00`);
      } else if (value * 10000 === 1000000) {
        setPrice(`${36}.00`);
      }
    }
  }, [monthly, value]);

  const getPageViews = () => {
    const views = `${value * 10000}`;
    if (views > 10000) {
      const finalViews = views.slice(0, views.length - 3);
      setPageViews(`${finalViews}K`);
    }
  };

  const data = [
    {
      text: "Unlimited websites",
      image: check,
    },
    {
      text: "100% data ownership",
      image: check,
    },
    {
      text: "Email reports",
      image: check,
    },
  ];

  return (
    <div className="md:w-[34rem] md:h-[25rem] xs:h-[28rem] xs:w-[85%] flex flex-col xs:items-center absolute bg-white mx-auto -translate-y-52 md:mt-5 xs:mt-36 rounded-xl md:p-10 xs:p-4 shadow-lg">
      <div className="flex md:flex-row xs:flex-col w-full justify-between items-center">
        <h1 className="text-[#848EAD] tracking-wider md:font-bold">
          {pageViews === "1000K" ? "1M" : pageViews} PAGEVIEWS
        </h1>
        <div className="w-full mt-5 md:hidden">
          <input
            type="range"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            min={0}
            max={100}
            name=""
            id=""
          />
        </div>
        <span className="flex items-center md:mt-0 xs:mt-6">
          <h1 className="text-[#293356] font-bold xs:text-3xl md:text-5xl">
            ${price}
          </h1>
          <p className="text-[#848EAD] tracking-wider ml-2"> / month</p>
        </span>
      </div>
      <div className="w-full mt-10 md:block xs:hidden">
        <input
          type="range"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          min={0}
          max={100}
          name=""
          id=""
        />
      </div>
      <div className="w-full flex md:justify-end xs:justify-center mt-10">
        <div className="md:w-[77%] xs:w-full">
          <label
            className="flex text-[#848EAD] md:text-base xs:text-sm  justify-between w-full"
            htmlFor=""
          >
            Monthly Billing{" "}
            <label
              onChange={() => {
                setmonthly((prev) => !prev);
                setValue(50);
              }}
              className="switch"
            >
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>{" "}
            Yearly Billing
            <p className="font-bold flex text-[#FF8D68] bg-[#FEEDE8] rounded-2xl p-1  text-xs">
              <p className="md:hidden">-</p> 25%{" "}
              <p className="md:block ml-1 xs:hidden">discount</p>
            </p>
          </label>
        </div>
      </div>
      <hr className="md:-translate-x-10 md:w-[34rem] mx-auto my-4 xs:w-full  mt-14" />
      <div className="w-full flex md:flex-row xs:flex-col md:justify-between md:items-start xs:items-center">
        <div className="md:w-2/5 xs:w-full h-full flex flex-col xs:items-center md:items-start md:justify-start xs:mt-0 md:mt-3">
          {data.map((item) => (
            <span key={Math.random()} className="flex items-center my-1">
              <img className="mr-3" src={item.image} alt="img" />
              <p className="text-[#848EAD] text-sm md:font-semibold tracking-wider">
                {item.text}
              </p>
            </span>
          ))}
        </div>
        <div className="md:w-2/5 xs:w-full md:h-full  flex md:justify-start xs:justify-center  items-center md:mt-0 xs:mt-4">
          <button className="md:w-full xs:w-44 h-12 bg-[#293356] text-[#BECDFF] rounded-3xl md:font-semibold tracking-wider">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
