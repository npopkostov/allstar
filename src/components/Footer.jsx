import React from "react";
import LocationIcon from "../icons/LocationIcon.gif";
import AllstarGrey from "../images/AllstarGrey.png";
import Clock from "../icons/Clock.gif";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, target);
  };
  return (
    <>
      <div
        id="contact"
        className=" bg-gradient-to-b from-70% to-100% from-mainColor to-black"
      >
        <div className="grid grid-cols-[20%,60%,20%] gap-1 bg-mainColor h-20vh">
          <div>{/* left empty space */}</div>
          <div className="text-white font-bold text-4xl pt-9">
            <h1>
              Count on us for you Drayage needs and transportation services
            </h1>
          </div>
          <div>{/* 03 */}</div>
        </div>
        <div className="pt-5 grid grid-cols-[20%,60%,20%] gap-1 bg-mainColor h-20vh">
          <div className="grid-cols-[40%,60%]">{/* empty space left */}</div>
          <div className="mt-5 grid grid-cols-[50%,20%,30%] border-b mb-5 pb-10 border-white border-1">
            <div className="text-left text-white text-l">
              {" "}
              <p>
                There is no room for inefficiency in Intermodal. We have the
                personnel, technology, and network to immediately impact your
                Drayage needs with our transportation services.
              </p>
            </div>
            <div>{/* empty space */}</div>
            <div className="flex items-center justify-center mr-14">
              <NavLink
                className=" text-white font-black text-sm p-2 bg-secondColor"
                to="/requestQuote"
              >
                {" "}
                GET A QUOTE TODAY
              </NavLink>
            </div>
          </div>
        </div>
        {/* FIRST SEGMENT */}
        <div className="mt-5 grid grid-cols-3 ">
          <div className="flex flex-col text-center justify-center">
            <img src={AllstarGrey} className="size-28 opacity-30 mx-auto" />
            <div className="mt-5 pt-5 flex flex-col items-center justify-center text-white font-bold gap-1 underline">
              <NavLink to="#home" onClick={(e) => handleNavClick(e, "#home")}>
                {" "}
                HOME
              </NavLink>
              <NavLink to="#about" onClick={(e) => handleNavClick(e, "#about")}>
                {" "}
                ABOUT
              </NavLink>
              <NavLink
                to="#services"
                onClick={(e) => handleNavClick(e, "#services")}
              >
                {" "}
                SERVICES
              </NavLink>
              <NavLink to="https://www.triniumtech.com/user">
                TRACK YOUR SHIPMENT
              </NavLink>
              <NavLink to="/joinOurTeam"> APPLY NOW</NavLink>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={LocationIcon} className="size-12 mx-auto flex-col" />
            <div className="text-center mt-5">
              <a className="font-bold text-xl text-white"> Allstar Trucking</a>
              <a
                href="https://maps.app.goo.gl/J4Lfe7ro8u8PsLjh9"
                className="text-white font-light flex items-center justify-center pl-10 pr-10"
              >
                24234S Northern Illionois Channahon, IL 60410, United States
              </a>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Clock} className="size-12 mx-auto flex-col mt-5" />
            </div>
            <div className="flex flex-col items-center justify-center font-bold text-xl text-white">
              Office hours :{" "}
            </div>
            <div className="flex flex-col text-white font-light  items-center justify-center">
              Monday-Friday: 8am - 5pm
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4 mt-7">
              <div className="flex flex-col font-bold text-xl text-white">
                {" "}
                Office phone:
              </div>
              <div className="flex flex-col text-white font-light ">
                {" "}
                +1 815-467-0022
              </div>
            </div>
            <div className="mb-4 flex flex-col items-center">
              <div className="flex flex-col font-bold text-xl text-white">
                {" "}
                Office fax:
              </div>
              <div className="flex flex-col text-white font-light ">
                {" "}
                +1 815-467-2244
              </div>
            </div>
            <div className="mb-2 flex flex-col items-center">
              <div className="flex flex-col font-bold text-xl text-white">
                {" "}
                Business email:
              </div>
              <div className="flex flex-col text-white font-light ">
                {" "}
                don@allstartrucking.us
              </div>
            </div>
          </div>
        </div>
        {/* second segment segond half */}

        {/* last segment */}
        <div className=" mt-5 grid grid-cols-[20%,60%,20%]">
          <div>{/* left empty space */}</div>
          <div className="flex flex-col text-white">
            <div className="flex flex-col items-center text-center text-xs mt-2 border-t border-white pt-5">
              Copyright Allstar Trucking - All rights reserved.
            </div>{" "}
            <div className="flex flex-col text-center text-xs mt-2">
              ALLSTAR TRUCKING @ 2024
            </div>
            <div className=" flex flex-col text-center text-xs mt-2">
              24234 S Northern Illinois Channahon, IL 60410, Phone: 815-467-0022
              2024
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
