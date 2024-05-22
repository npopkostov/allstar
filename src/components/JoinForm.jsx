import React from "react";

const JoinForm = () => {
  return (
    <form>
      <div className="flex flex-col">
        <label className="grid grid-cols-2 pl-5 pr-5 pt-5 gap-5">
          <div className="flex flex-col ">
            <div className="text-white font-light">First Name:</div>
            <input type="text" className="p-2" />
          </div>
          <div className="flex flex-col ">
            <div className="text-white font-light">Last Name:</div>
            <input type="text" className="p-2" />
          </div>
        </label>
      </div>
      {/* vtor red */}
      <div className="flex flex-col">
        <label className="grid grid-cols-2 pl-5 pr-5 pt-5 gap-5">
          <div className="flex flex-col ">
            <div className="text-white font-light">Email*:</div>
            <input type="email" className="p-2" />
          </div>
          <div className="flex flex-col ">
            <div className="text-white font-light">Phone*:</div>
            <input type="tel" className="p-2" />
          </div>
        </label>
      </div>
      <div className="flex flex-col">
        <label className="pr-5 pl-5">
          <div className="flex flex-col ">
            <div className="text-white font-light">Message:</div>
            <input type="text" className="pb-14" />
          </div>
          <div className="flex flex-col items-center justify-center pt-5">
            <button
              className=" text-white font-black text-sm p-2 bg-black
            hover:bg-white hover:text-black"
            >
              {" "}
              Submit
            </button>
          </div>
        </label>
      </div>
    </form>
  );
};

export default JoinForm;
