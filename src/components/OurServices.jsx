import React from "react";
import "../customStyles/styles.css";
import Services from "./video/Services.mp4";
import VideoBackground from "./VideoBackground";
import { NavLink } from "react-router-dom";

const OurServices = () => {
  return (
    <>
      <div id="services" className="relative w-full h-60vh">
        <VideoBackground />

        <div className="absolute inset-0 flex justify-center items-center bg-transparent bg-opacity-50 z-10 ">
          {/* Content on top of the video */}
          <div className="trapezoid-right w-full flex justify-center items-center p-10 ">
            {/* <!-- Text divs --> */}
            <div className="w-1/2 text-center text-white "></div>
            <div className="w-1/2  text-center flex-col">
              <h1
                className="font-bold text-white 
               sm:text-l md:text-l lg:text-xl xl:text-4xl"
              >
                {" "}
                OUR SERVICES
              </h1>
              <p
                className="py-3 p-10 text-center text-justify font-light text-white 
              sm:text-sm md:text-m lg:text-l xl:text-xl"
              >
                We believe in engineered solutions for our partners, not a
                one-size-fits-all model. Allstar relies on Allstars of
                Intermodal - Its Drivers and Owner Operators, best-in-class
                proprietary technology, and a passion for customer service
                delivered by the industry's top talent. There is no room for
                inefficiency in Intermodal. At Allstar Trucking, we have the
                personnel, technology, and network to immediately impact your
                Drayage needs with our transportation services. Our strategic
                framework brings cost-optimizing solutions to your business. We
                are expanding our services to include warehousing & storage for
                our most valued customers.{" "}
              </p>
              <NavLink
                to="/requestQuote"
                className="inline-block bg-white text-mainColor mt-5 px-4 py-2 hover:bg-mainColor hover:text-white hover:border"
              >
                <p className="text-l">Rate Request</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
