import React from "react";
import Statistics from "./Statistics";
import Handshake from "../images/icons/Handshake.png";
import Like from "../images/icons/Like.png";
import Strong from "../images/icons/Strong.png";

const OurSuccess = () => {
  return (
    <div className="w-full h-full flex justify-center items-center py-14">
      <div className="flex m-10 space-x-14  ">
        {/* First child div */}
        <div className="py-14 w-1/3  mr-2">
          <div className="flex flex-col justify-center items-center">
            <div className="h-1/3 mb-10 ">
              <img
                className="w-23 h-20  object-contain"
                src={Handshake}
                alt="Handshake"
              />
            </div>
            <div className="h-1/3 ">
              {" "}
              <Statistics end={15000} duration={9} inlineText="+" delay={2} />
            </div>
            <div className="h-1/3 text-center font-light text-xl text-mainColor">
              Customers we have served
            </div>
          </div>
        </div>
        {/* Second child div */}
        <div className="py-14 w-1/3  mr-2">
          <div className="flex flex-col justify-center items-center">
            <div className="h-1/3  mb-10 ">
              <img
                className="w-20 h-20 object-contain"
                src={Like}
                alt="Handshake"
              />
            </div>
            <div className="h-1/3 ">
              <Statistics end={97} duration={7} inlineText="%" delay={1} />
            </div>
            <div className="h-1/3  font-light text-center text-xl text-mainColor">
              Of our clients recommend us
            </div>
          </div>
        </div>
        {/* Third child div */}
        <div className="py-14 w-1/3 ">
          <div className="flex flex-col justify-center items-center">
            <div className="h-1/3  mb-10">
              <img
                className="w-20 h-20 object-contain"
                src={Strong}
                alt="Handshake"
              />
            </div>
            <div className="h-1/3 ">
              {" "}
              <Statistics end={15} duration={7} inlineText="+" delay={1} />
            </div>
            <div className="h-1/3 text-center font-light text-xl text-mainColor">
              Years of meeting client needs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
