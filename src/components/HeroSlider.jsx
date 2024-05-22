import React, { useEffect, useState } from "react";
import Arrow from "../images/Arrow.png";
import AllstarTruck from "../images/AllstarTruck.png";
import AllstarVan from "../images/AllstarVan.png";
import AllstarShip from "../images/AllstarShip.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../customStyles/HeroStyle.css";

const HeroSlider = () => {
  return (
    <>
      <div className="sliderHero">
        <img src={Arrow} alt="Image 1" class="image1" />
        <img src={AllstarTruck} alt="Image 2" class="image2" />
        <img src={Arrow} alt="Image 3" class="image3" />
        <img src={AllstarVan} alt="Image 4" class="image4" />
        <img src={Arrow} alt="Image 5" class="image5" />
        <img src={AllstarShip} alt="Image 6" class="image6" />
      </div>
    </>
  );
};

export default HeroSlider;
