import React from "react";
import People from "../icons/People.gif";
import Growth from "../icons/Growth.gif";
import Home from "../icons/Home.gif";
import X from "../images/icons/x.png";
import logo from "../images/logo.png";
import JoinForm from "../components/JoinForm";
import { NavLink } from "react-router-dom";

const JoinOurTeam = () => {
  return (
    <div id="slide" className=" grid grid-cols-[70%,30%]">
      <div className="bg-mainColor h-screen  pr-20">
        <div className="grid grid-cols-2">
          <div className="">{/* HELLO LEFT 1/2 */}</div>
          <div className="flex flex-col items-center justify-center h-screen space-x-3 space-y-2">
            <div className="flex-col">
              <img src={People} className=" size-32" />
            </div>
            <div className="flex-col text-center pr-10 pl-10 text-white font-light">
              {" "}
              Allstar Drivers earn an industry competitive pay package and enjoy
              access to a number of benefit plans.
            </div>
            <div className="flex-col">
              <img src={Growth} className=" size-32" />
            </div>
            <div className="flex-col text-center pr-10 pl-10 text-white font-light">
              {" "}
              Our equipment is a “Top of the line” in the industry, it is
              maintained by professional technicians, out management team
              understands and listens to the needs of drivers.
            </div>
            <div className="flex-col">
              <img src={Home} className=" size-32" />
            </div>
            <div className="flex-col text-center pr-10 pl-10 text-white font-light">
              {" "}
              With most of our work done within 100 Air-mile radius, reset your
              hours at home, at the diner table, watching your kids’ practice
              and sleeping in your own bed.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1D67CD] h-screen flex flex-col justify-center ">
        <div className="flex flex-col items-end mr-5 ">
          <NavLink to="/">
            <img src={X} className=" size-8 " />
          </NavLink>
        </div>
        <div className="flex flex-col items-center">
          <img src={logo} className="size-40 opacity-20 " />
        </div>
        <div className="flex flex-col text-white font-black text-6xl text-center">
          {" "}
          Join Our Team
        </div>
        <div className="flex flex-col items-center justify-center te pr-14 pl-14 mt-10 text-xl text-white font-light">
          {" "}
          At Allstar Trucking, you're more than a number - you're part of our
          Family! Come Join us and be part of our Team! You choose your
          schedule. Local and mid range runs to select from.
        </div>
        <div className="flex flex-col items-start justify-center te pr-14 pl-14 mt-10 text-xl text-white font-light">
          {" "}
          Hiring Owner Operators!
        </div>
        <div className="flex flex-col">
          <JoinForm />
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
