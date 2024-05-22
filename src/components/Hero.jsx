import React from "react";
import HeroSlider from "./HeroSlider";
import { NavLink } from "react-router-dom";

export function Hero() {
  return (
    <div className="grid grid-cols-2">
      <div className=" flex h-500px flex m-auto py-44 bg-white items-center justify-center">
        <div className="w-1/2 h-500px bg-white flex items-center justify-center">
          <div>
            <div className="h-500px flex justify-center  flex-col  ">
              <h1
                className="text-center text-mainColor font-black 
             text-6xl -mb-9"
              >
                AMERICA'S MOST
              </h1>
              <h1
                className="text-black font-black text-[111px] -mb-9 
            "
              >
                RELIABLE
              </h1>
              <h1
                className="bg-mainColor text-white font-black 
             text-6xl"
              >
                DRAYAGE CARIER
              </h1>
              <div className="flex flex-col">
                <div className="text-[25px] font-extralight ">
                  Thousands of successful miles
                </div>
              </div>
              <div className="items-left mt-10">
                <NavLink
                  to="/requestQuote"
                  className="inline-block 
                      font-black bg-mainColor text-white px-4 py-2 
                      hover:bg-secondColor hover:text-mainColor
                      hover: font-black"
                >
                  RATE REQUEST
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <HeroSlider />
      </div>
    </div>
  );
}

export default Hero;
