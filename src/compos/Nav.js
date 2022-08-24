import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const Nav = () => {
  return (
    <div className="fw-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 sticky top-0 z-50">
      <div className=" flex w-[25%] ml-10 ">
        <Link to="/" className="h-10 border   ">
          <h1 className="text-2xl font-bold md:text-3xl font-mono uppercase ">
            {" "}
            {data.title}{" "}
          </h1>
        </Link>
      </div>

      <div className=" flex w-[20%] md:w-[25%] sm:w-[35%] justify-around text-2xl mr-10  ">
        <h2 className="font-mono uppercase"> Contact</h2>

        <h2 className="font-mono uppercase"> About </h2>
      </div>
    </div>
  );
};

export default Nav;
