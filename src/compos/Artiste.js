import React from "react";
import data from "../data.json";
import "../App.css";
import Nav from "./Nav";
import Footer from "./Footer";

import striptags from "striptags";

import { useParams, Link } from "react-router-dom";

const Artist = () => {
  let idParams = useParams();

  console.log(idParams);
  console.log(data.artists);

  const artist = data.artists.filter((artist) => artist.id === idParams.id);

  console.log(artist);

  return (
    <div className="text-center">
      <Nav />
      {artist.map((dat) => {
        return (
          <div className="">
            <h1
              className="m-10  uppercase font-mono text-4xl sm:text-3xl  "
              key={dat.id}
            >
              {" "}
              {dat.name}{" "}
            </h1>

            {dat.texts.map((bod) => {
              return (
                <h2 className="m-10 uppercase text-3xl sm:text-3xl font-mono">
                  {" "}
                  {striptags(bod.body)}{" "}
                </h2>
              );
            })}

            {dat.artworks.map((art) => {
              return (
                <div className="m-10 uppercase font-mono text-3xl sm:text-3xl ">
                  {art.texts.map((text) => {
                    return (
                      <div className="body">
                        <h3> {striptags(text.body)} </h3>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Artist;
