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
      <div className="h-screen" id="services">
        <h1 className=" py-36 text-6xl text-pink-conjury text-center">
          Our Services
        </h1>

        <div className="flex flex-col gap-10 lg:flex-row md:justify-evenly mx-6 lg:mx-32">
          <div className="w-full lg:w-1/2  flex flex-col items-center justify-center">
            <h2 className=" text-4xl text-center lg:text-left  lg:text-6xl text-pink-conjury">
              Wev Design and Development
            </h2>
            <div className="pt-4 text-2xl">
              We will help you bring your dream website to reality with a focus
              on responsive design and stunning aesthetics. Our comprehensive
              web design and development services are tailored to cater to your
              specific needs and goals, ensuring that your website not only
              looks and functions flawlessly across all devices and screen
              sizes, but also boasts an exceptional visual design that
              captivates your audience. We believe that a great website goes
              beyond functionality, and we strive to create visually stunning
              websites that leave a lasting impression on your visitors.
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-10 flex justify-center items-center">
            <img
              src={imageOne}
              className="rounded-2xl w-full "
              alt="image one"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row md:justify-evenly mx-6 lg:mx-32">
          <div className=" lg:w-1/2 flex flex-col items-center justify-center lg:order-last">
            <h2 className=" text-4xl text-center lg:text-left  lg:text-6xl text-pink-conjury">
              Ecommerce Solutions
            </h2>
            <div className="pt-4 text-2xl">
              Our Ecommerce Solutions service is tailored for companies seeking
              to create exceptional online shopping experiences. With expertise
              in designing and building ecommerce sites, we provide
              comprehensive functionality through platforms like WooCommerce and
              Shopify. Let us help you enhance your online presence and maximize
              your sales potential.
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-10 flex justify-center items-center lg:order-first">
            <img
              src={imageOne}
              className="rounded-2xl w-full"
              alt="image one"
            />
          </div>
        </div>
        <div className="">
          <h1 className=" pt-20 text-6xl text-pink-conjury text-center">
            Our Services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
