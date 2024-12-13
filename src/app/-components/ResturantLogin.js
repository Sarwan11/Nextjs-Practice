import React from "react";

const ResturantLogin = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-red-600">login</h2>
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
      </div>
    </div>
  );
};
export default ResturantLogin;
