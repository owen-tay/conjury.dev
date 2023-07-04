import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DownSvg from "./images/downarrow.svg";
import imageOne from "./images/home1.png";
import VideoWhite from "./images/video/whiteloop.mp4";
import VideoDark from "./images/video/darkloop.mp4";
import { scroller } from "react-scroll";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const scrollToServices = () => {
    scroller.scrollTo("services", {
      duration: 500,
      smooth: true,
      offset: -50, // Offset for the navbar height if needed
    });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme"));
    };

    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(localStorage.getItem("theme"));
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const getVideoSource = () => {
    if (theme === "dark") {
      return VideoDark;
    } else {
      return VideoWhite;
    }
  };

  return (
    <div>
      <div className="relative">
        <video
          className="fadein absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src={getVideoSource()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="homeHeader pb-10 h-screen flex flex-col justify-center md:justify-end relative z-10">
          <div className="flex flex-col m-10 md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 mb-10">
              <div className="text-xl">
                <div className="title fadein py-5 text-5xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl  text-black dark:text-white font-bold text-center md:text-left">
                  We are Conjury. We make great websites.
                </div>
                <div className=" title fadein relative text-xl text-center md:text-left md:text-2xl xl:text-2xl">
                  Conjury.dev, a recently established web development and design
                  agency based in Glasgow, passionately embraces the world of
                  digital creativity. With a genuine passion for crafting
                  exceptional websites, they warmly welcome clients to join them
                  on their exciting journey of creating captivating online
                  experiences.
                </div>
                <a className="downbutton w-5" onClick={scrollToServices}>
                  {" "}
                  <div className="hover:scale-110 ease-in-out duration-300">
                    <img
                      className="drop-shadow-xl pt-8 w-16 2xl:pt-12 2xl:w-24 slide-top-fast flex mx-auto ease-in-out duration-300"
                      src={DownSvg}
                      alt="down button"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="fadein w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="h-full">
                <div className="text-2xl font-bold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Home;
