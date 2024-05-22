import React from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="  py-14 bg-gradient-to-l from-30% to-70% from-mainColor to-white w-full flex "
      >
        <div className=" w-3/5 flex flex-col justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <img className="size-3/12" src={Logo} alt="Allstar-logo" />
            </div>
          </div>
        </div>
        {/* TUKA E POLA */}
        <div className=" p-10 w-3/5 flex flex-col justify-center items-center">
          <div>
            <h1 className="  font-bold text-white text-4xl">ABOUT US</h1>
          </div>
          <div>
            <h3 className=" m-5 text-xl font-light text-white text-center text-justify">
              Allstar Trucking, Inc. is a family owned company which has
              specialized in the intermodal drayage industry for over 15 years.
              This experience has resulted in long-standing relationships with
              major railroad hubs and customers in the Chicagoland area. Our
              reputation has been built on servicing our customer’s needs, from
              making rail cut-offs to providing on-time pick-up and deliveries.
            </h3>
          </div>
          <div>
            <NavLink
              to="/joinOurTeam"
              className="inline-block bg-white text-mainColor px-4 py-2 hover:bg-mainColor hover:text-white hover:border"
            >
              <p className="text-l">Join our team</p>
            </NavLink>
          </div>
        </div>

        {/* TUKA ZAVRUSVA OVOJ DIV */}
      </div>
    </>
  );
};

export default About;
