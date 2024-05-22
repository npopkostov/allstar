import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <nav className="py-3 bg-white  ">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="md:ml-auto mt-6">
                <div className="flex space-x-5">
                  <a
                    className="flex flex-shrink-0 items-center font-bold"
                    to="/"
                  >
                    <img
                      className="h-14 w-14 -ml-5 "
                      src={logo}
                      alt="React Jobs"
                    />
                    <span className="hidden md:block text-white text-2xl font-bold ml-5">
                      <p className="text-mainColor text-sm font-medium">
                        Transportation Service
                      </p>
                      <p className="text-mainColor font-bold -mt-2">
                        Allstar Truckin Inc
                      </p>
                    </span>
                  </a>
                  <button className="text-mainColor bg-white hover:bg-gray-900 mt-2 pl-10 hover:text-secondColor rounded-md px-3 py-2 font-black">
                    ABOUT
                  </button>
                  <a
                    to="/pages/PotHolesListAll"
                    className="text-mainColor bg-white hover:bg-gray-900 mt-2  hover:text-secondColor rounded-md px-3 py-2 font-black"
                  >
                    SERVICES
                  </a>
                  <a
                    to="/pages/ReportPotHole"
                    className="text-mainColor bg-white hover:bg-gray-900 mt-2 hover:text-secondColor rounded-md px-3 py-2 font-black"
                  >
                    TRACK YOUR SHIPMENT
                  </a>
                  <a
                    to="/pages/ReportPotHole"
                    className="text-mainColor bg-white hover:bg-gray-900 mt-2 hover:text-secondColor rounded-md px-3 py-2 font-black"
                  >
                    CONTACT
                  </a>
                  <a
                    className="flex flex-shrink-0 items-center mr-4 font-bold"
                    to="/"
                  >
                    <span className="hidden md:block text-white text-xl font-bold ml-5">
                      <p className="text-secondColor font-bold px-3 py-2">
                        +1 815-467-0022
                      </p>
                      <p className="text-secondColor text-sm font-extralight ml-3 -mt-3">
                        office phone
                      </p>
                    </span>
                    <a
                      href="/jobs.html"
                      className="inline-block 
                      font-black bg-mainColor text-white px-4 py-2 
                      hover:bg-secondColor hover:text-mainColor
                      hover: font-black"
                    >
                      APPLY NOW
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
