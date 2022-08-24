import React from "react";
import data from "../data.json";

import Nav from "./Nav";
import Artists from "./Artists";
import Footer from "./Footer";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="bg-white-300">
      <Nav />
      <Slider />

      <div className="mt-10 text-center flex justify-around  items-center   p-20 h-[500px]  ">
        <h1 className=" uppercase text-3xl sm:text-3xl font-mono ">
          {data.text}
        </h1>
      </div>

      <Artists />

      <Footer />
    </div>
  );
};

export default Home;
