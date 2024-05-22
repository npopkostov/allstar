import React from "react";
import x from "../images/icons/x.png";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";
import logoGray from "../images/AllstarGrey.png";

const RequestQuote = () => {
  return (
    <div id="slide" className=" grid grid-cols-[30%,70%]">
      <div className="bg-[#1D67CD] h-screen pr-2 pl-2">
        <NavLink className="flex flex-col items-end mt-5 " to="/">
          <img src={x} className=" size-8" />
        </NavLink>
        <div className="flex flex-col items-center">
          <img src={logo} className=" size-40 opacity-20" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-black text-6xl"> Request a quote</h1>
        </div>
        <div className="flex flex-col items-center text-center p-5 text-white font-light text-lg">
          <h3>
            {" "}
            If you wish to receive a rate, please fill out the form below and we
            will get in touch with you as quickly as we can.
          </h3>
        </div>
      </div>
      <div className="bg-mainColor h-screen flex flex-col justify-center ">
        <div className="pr-14 pl-14 mt-10">
          <div className="flex flex-col items-center">
            <img src={logoGray} className="size-24" />
            <h1 className="text-white font-bold text-4xl mt-5">
              {" "}
              Request a Quote
            </h1>
          </div>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
