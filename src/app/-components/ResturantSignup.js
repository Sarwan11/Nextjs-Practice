"use client";
import React from "react";
const ResturantSignup = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-green-500">SignUp</h3>
      <div className="">
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className=" text-xl px-3 py-1 border m-4 "
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your mail"
            className=" text-xl px-3 py-1 border m-4"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your address"
            className=" text-xl px-3 py-1 border m-4"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your data"
            className=" text-xl px-3 py-1 border m-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ResturantSignup;
