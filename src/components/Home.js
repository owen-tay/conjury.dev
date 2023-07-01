import React from "react";
import { Link } from "react-router-dom";
import DownSvg from "./images/downarrow.svg";

const Home = () => {
  return (
    <div>
      <div class="header pb-10 md:pb-60 h-full flex items-center justify-center">
        <div class="text-xl">
          <div class="fadeinslow"></div>
          <div class="fadein relative    text-pink-conjury text-xl mt-10 font-bold sm:m-24 sm:text-2xl md:text-4xl md:m-32  lg:m-32 xl:mx-64 lg:text-4xl flex items-center text-center justify-center h-full">
            We are Conjury. We make great websites.{" "}
          </div>
          <div class="fadein relative    text-xl m-10 sm:m-24 sm:text-2xl md:text-4xl md:m-32  lg:m-32 xl:mx-64 lg:text-4xl flex items-center text-center justify-center h-full">
            Conjury.dev, a recently established web development and design
            agency based in Glasgow, passionately embraces the world of digital
            creativity. With a genuine passion for crafting exceptional
            websites, they warmly welcome clients to join them on their exciting
            journey of creating captivating online experiences.
          </div>
          <a class="downbutton w-5" onclick="scrollToHerobot();">
            <img
              class="downbutton drop-shadow-xl w-16 slide-top-fast flex mx-auto hover:w-20 ease-in-out duration-300"
              src={DownSvg}
              alt="down button"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
