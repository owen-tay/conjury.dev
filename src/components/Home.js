import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DownSvg from "./images/downarrow.svg";
import imageOne from "./images/home1.png";
import VideoWhite from "./images/video/whiteloop.mp4";
import VideoDark from "./images/video/darkloop.mp4";
import PcPic from "./images/pc.jpg";
import Logo from "./images/NavImage.svg";

import { scroller } from "react-scroll";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const scrollTohome2 = () => {
    scroller.scrollTo("homescreen2", {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };
  const scrollTohome3 = () => {
    scroller.scrollTo("homescreen3", {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };

  const scrolltotop = () => {
    scroller.scrollTo("homeHeader", {
      duration: 500,
      smooth: true,
      offset: -100,
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
                  We are a recently established web development and design
                  agency based in Glasgow who passionately embraces the world of
                  digital creativity. We have a genuine passion for crafting
                  exceptional websites and we are open to new clients.
                </div>
                <a className="downbutton w-5" onClick={scrollTohome2}>
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
      <div className=" h-24">
        <h2
          id="homescreen2"
          class="py-3 my-6 pb-3 md:pb-7 text-center text-4xl md:text-5xl text-pink-conjury dark:text-white"
        >
          We can provide all your development needs.
        </h2>
      </div>

      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full text-center md:w-1/2 px-4 pt-3"></div>
          <div class="w-full text-center md:text-left lg:w-1/2 px-4 pt-3"></div>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:text-left lg:w-1/2 px-4 pt-0 md:pt-3">
            <ul class="tracking-wide text-center ml-6 pt-6 md:pt-24 text-3xl list-none md:text-5xl">
              <li class="mb-2 hover:scale-105 duration-100 ease-in-out">
                Web Design
              </li>
              <li class="mb-2 pt-2 hover:scale-105 duration-100 ease-in-out">
                Branding
              </li>
              <li class="mb-2 pt-2 hover:scale-105 duration-100 ease-in-out">
                Web Development
              </li>
              <li class="mb-2 pt-2 hover:scale-105 duration-100 ease-in-out">
                Hosting
              </li>
              <li class="mb-2 pt-2 hover:scale-105 duration-100 ease-in-out">
                Ecommerce Solutions
              </li>
            </ul>
            <a className="downbutton w-5" onClick={scrollTohome3}>
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

          <div class="w-full lg:w-1/2 mb-32 flex justify-center items-center ">
            <img
              src={PcPic}
              class="flex  m-6 rounded-2xl lg:w-fit items-center"
              alt="image one"
            />
          </div>
        </div>
      </div>
      <div className="roundededge bg-pink-conjury  dark:bg-slate-700 mt-6"></div>
      <div
        id="homescreen3"
        className="h-[50vh] bg-pink-conjury dark:bg-slate-700"
      >
        <h3 className="text-3xl md:text-5xl text-center text-white ">
          Trust Us With Your Web Presence.
        </h3>
        <p className="fadeinfast text-md sm:text-xl lg:text-4xl mx-7 lg:mx-72 text-white pt-8">
          We are a newly established agency eager to make a mark in the market,
          so we offer highly competitive rates. We are available to discuss all
          aspects of your new website or provide professional consultations.
          Feel free to reach out to us at your convenience.
        </p>
        <div
          id="homescreen3"
          className="h-[50vh] bg-pink-conjury dark:bg-slate-700"
        >
          <div className="flex pt-10 justify-center  sm:mx-52">
            <div className="">
              <Link to="/Services">
                <div
                  className="bg-white shadow-md
                 dark:bg-slate-800 py-4 px-5 text-2xl sm:text-3xl rounded-3xl text-center w-60 sm:w-72 hover:scale-105 duration-150 ease-in-out"
                >
                  View Our Services
                </div>
              </Link>
              <Link to="/contact">
                <div className="bg-white dark:bg-slate-800 shadow-md text-2xl sm:text-3xl py-4 px-5 rounded-3xl text-center w-60 sm:w-72 hover:scale-105 duration-150 ease-in-out mt-5">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
