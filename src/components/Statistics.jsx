import React from "react";
import CountUp from "react-countup";

const Statistics = ({ end, duration, text, inlineText, delay }) => {
  return (
    <CountUp start={0} end={end} delay={delay} duration={duration}>
      {({ countUpRef }) => (
        <div className="text-mainColor text-3xl font-bold">
          <span ref={countUpRef} />
          <p className="inline">{inlineText}</p>
          <p className="font-light">{text}</p>
        </div>
      )}
    </CountUp>
  );
};

export default Statistics;
