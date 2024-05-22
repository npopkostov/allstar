import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto h-30vh">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={2000}
        className=" "
      >
        {/* FIRST SLIDE */}
        <div className="py-14">
          <div className="flex justify-center items-center p-14">
            <h2 className="text-2xl text-mainColor font-bold pt-5 ">
              “Allstar saves us time, money, and lets us focus on our core
              business."
            </h2>
          </div>
          <div>
            <h3 className="font-bold text-l text-secondColor text-right pr-14">
              {" "}
              - Allstar Trucking Partner
            </h3>
          </div>
        </div>
        {/* SECOND SLIDE */}
        <div className="py-14">
          <div className="flex justify-center items-center p-14">
            <h2 className="text-2xl text-mainColor font-bold pt-5 ">
              "These guys provide excellent customer service and you can count
              on them to deliver your freight on time. If you have anything that
              needs to be delivered in Chicago, you can count on All Star
              Trucking to deliver your cargo on time."
            </h2>
          </div>
          <div>
            <h3 className="font-bold text-l text-secondColor text-right pr-14">
              - Allstar Trucking Partner
            </h3>
          </div>
        </div>
        {/* THIRD SLIDE */}
        <div className="py-14">
          <div className="flex justify-center items-center p-14">
            <h2 className="text-2xl text-mainColor font-bold pt-5 ">
              "Allstar Trucking is a family oriented company with the best
              management team that really cares about their employees. Great
              pay. Excellent miles. New and well maintained equipment."
            </h2>
          </div>
          <div>
            <h3 className="font-bold text-l text-secondColor text-right pr-14">
              - Allstar Trucking Partner
            </h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
