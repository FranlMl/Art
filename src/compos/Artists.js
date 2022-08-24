import data from "../data.json";

import { Link } from "react-router-dom";
import React from "react";
import Nav from "./Nav";

console.log(data);

const Home = () => {
  return (
    <div className="mt-10  p-20  h-2/3 bg-[#0a192f] text-white  ">
      <h1 className="uppercase text-4xl sm:text-3xl font-mono mb-10">
        Our Artists :
      </h1>
      {data.artists.map((dat) => {
        return (
          <div className="flex justify-center h-[100px] " key={dat.id}>
            <Link
              className="border rounded-lg scale-100 h-20 flex justify-around items-center w-60  "
              style={{ textDecoration: "none", color: "black" }}
              to={`/artist/${dat.id} `}
            >
              <h2 className="text-gray-300 uppercase font-mono text-xl sm:text-1xl ">
                {" "}
                {dat.name}{" "}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
