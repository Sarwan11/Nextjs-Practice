"use client";
import React from "react";
import { useState } from "react";
import ResturantLogin from "../-components/ResturantLogin";
import ResturantSignup from "../-components/ResturantSignup";
import ResturantHeader from "../-components/ResturantHeader";
import ResturantFooter from "../-components/ResturantFooter";
const Resturant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <ResturantHeader />
      <div className=" text-center ">
        <h2 className="text-2xl font-bold">
          welcome to the login signup page.
        </h2>
        {login ? <ResturantLogin /> : <ResturantSignup />}
        <button onClick={() => setLogin(!login)} className="text-blue-500">
          {login ? "Dont have account? signup" : "Already have account? login"}
        </button>
        <ResturantFooter />
      </div>
    </div>
  );
};

export default Resturant;
