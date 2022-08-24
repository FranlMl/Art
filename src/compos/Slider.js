import data from "../data.json";

import street from "../assets/street.jpg";
import dali from "../assets/dali.jpg";
import hoku from "../assets/hoku.png";
import hokus from "../assets/hokus.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Typewriter from "typewriter-effect";

const Slider = () => {
  return (
    <Carousel
      autoPlay
      interval={9000}
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      <div className="relative">
        <img src={street} />
        <p className=" absolute top-20 left-20 w-1/5 text-5xl text-white md:w-48">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Artpoint welcomes you..")
                .pauseFor(500)
                .deleteAll()
                .typeString("To a visual odyssey.")
                .start();
            }}
          />
        </p>
      </div>
      <div>
        <img src={hokus} />
      </div>
      <div>
        <img src={dali} />
      </div>
      <div>
        <img src={hoku} />
      </div>
    </Carousel>
  );
};

export default Slider;
