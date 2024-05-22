import React from "react";
import Services from "./video/Services.mp4";
import "../customStyles/styles.css";

const VideoBackground = () => {
  return (
    <video
      src={Services}
      muted
      autoPlay={"autoplay"}
      preLoad="auto"
      loop
      id="bg-video"
    ></video>
  );
};

export default VideoBackground;
