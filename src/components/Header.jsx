import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, target);
  };
  return (
    <>
      <div id="home" className="pt-5 pb-5 grid grid-cols-[10%,80%,10%] gap-5">
        <div>{/* left empty space */}</div>
        <div className="grid grid-cols-[25%,50%,25%] gap-7">
          <div className="flex items-center grid-cols-[40%,60%] ">
            {" "}
            <img className="flex-col size-16 " src={logo} alt="React Jobs" />
            <div className="flex flex-col justify-center">
              <p className="flex text-mainColor lg:text-sm sm:text-[0px] font-medium ml-4 ">
                Transportation Service
              </p>
              <p className=" ml-4 lg:text-2xl sm:text-[0px] text-mainColor font-bold -mt-2">
                Allstar Truckin Inc
              </p>
            </div>
          </div>
          <nav className="flex justify-around items-center lg:text-lg sm:text-sm">
            <NavLink
              onClick={(e) => handleNavClick(e, "#about")}
              className="p-2 text-mainColor hover:text-secondColor 
                      hover: font-black"
              to="#about"
            >
              {" "}
              ABOUT
            </NavLink>
            <NavLink
              onClick={(e) => handleNavClick(e, "#services")}
              className="p-2 text-mainColor hover:text-secondColor 
                      hover: font-black"
              to="#services"
            >
              {" "}
              SERVICES
            </NavLink>
            <NavLink
              className="p-2 text-mainColor hover:text-secondColor 
                      hover: font-black"
              to="https://www.triniumtech.com/user"
            >
              {" "}
              TRACK YOUR SHIPMENT
            </NavLink>
            <NavLink
              onClick={(e) => handleNavClick(e, "#contact")}
              className="p-2 text-mainColor hover:text-secondColor 
                      hover: font-black"
              to="#contact"
            >
              {" "}
              CONTACT
            </NavLink>
          </nav>
          <div className="text-right">
            <div className="mt-2 flex items-center justify-center">
              {" "}
              <div className="flex flex-col justify-center items-center">
                <p className="flex text-secondColor xl:text-xl lg:text-[0] font-bold md:text-[0px]  sm:text-[0px]">
                  +1 815-467-0022
                </p>
                <p className=" text-secondColor font-light -mt-2 xl:text-lg lg:text-[0px] sm:text-[0px]">
                  office phone
                </p>
              </div>
              <NavLink
                to="/joinOurTeam"
                className="ml-2 inline-block 
                      font-black bg-mainColor text-white px-1 py-2 
                      hover:bg-secondColor hover:text-mainColor
                      hover: font-black"
              >
                APPLY NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
