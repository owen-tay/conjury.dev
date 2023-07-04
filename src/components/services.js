import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import imageOne from "./images/home1.png";
import imageTwo from "./images/home2.png";
import { ReactComponent as DownArrow } from "./images/down-arrow.svg";
import { ReactComponent as UpArrow } from "./images/up-arrow.svg";

const Services = () => {
  const slideLeftRef = useRef(null);
  const slideRightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState({
    wordpress: false,
    custom: false,
    fullStack: false,
  });
  const [arrowDirection, setArrowDirection] = useState({
    wordpress: "down",
    custom: "down",
    fullStack: "down",
  });

  const handleTextToggle = (key) => {
    setShowText((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    setArrowDirection((prev) => ({
      ...prev,
      [key]: prev[key] === "down" ? "up" : "down",
    }));
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value as needed
    };

    const slideLeftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-left");
          setIsVisible(true);
        } else {
          entry.target.classList.remove("slide-left");
          setIsVisible(false);
        }
      });
    }, options);

    const slideRightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-right");
          setIsVisible(true);
        } else {
          entry.target.classList.remove("slide-right");
          setIsVisible(false);
        }
      });
    }, options);

    if (slideLeftRef.current) {
      slideLeftObserver.observe(slideLeftRef.current);
    }

    if (slideRightRef.current) {
      slideRightObserver.observe(slideRightRef.current);
    }

    return () => {
      if (slideLeftRef.current) {
        slideLeftObserver.unobserve(slideLeftRef.current);
      }

      if (slideRightRef.current) {
        slideRightObserver.unobserve(slideRightRef.current);
      }
    };
  }, []);

  return (
    <div className="fadein">
      <div className=" " id="services">
        <h1 className="py-10 my-10 text-6xl text-pink-conjury text-center ">
          Our Services
        </h1>

        <div className="flex flex-col gap-10 lg:flex-row md:justify-evenly mx-6 lg:mx-32">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center lg:text-left lg:text-6xl text-pink-conjury">
              Web Design and Development
            </h2>
            <div className="pt-4 text-xl lg:text-2xl">
              <div className="pb- pt-2" ref={slideLeftRef}>
                We will help you bring your dream website to reality with a
                focus on responsive design and stunning aesthetics. Our
                comprehensive web design and development services are tailored
                to different tiers to cater to your specific needs and goals.
              </div>
              <div>
                <h2
                  className="text-pink-conjury text-2xl lg:text-5xl my-2 cursor-pointer w-fit duration-100 hover:scale-105  underline pt-1"
                  onClick={() => handleTextToggle("wordpress")}
                >
                  Wordpress{" "}
                  {arrowDirection.wordpress === "down" ? (
                    <DownArrow className="inline h-6 w-6" />
                  ) : (
                    <UpArrow className="inline h-6 w-6" />
                  )}
                </h2>
                {showText.wordpress && (
                  <p className="fadeinfast text-lg lg:text-2xl">
                    We can create and host a WordPress website for you, tailored
                    to your unique needs and preferences. With our extensive
                    experience in WordPress development, we ensure seamless
                    integration of essential features and functionalities to
                    enhance your online presence. Whether you're an individual,
                    a small business, or a large enterprise, our WordPress
                    solutions are scalable and adaptable to grow alongside your
                    ambitions.
                  </p>
                )}
              </div>
              <h2
                className="text-pink-conjury text-2xl lg:text-5xl my-2 cursor-pointer w-fit duration-100 hover:scale-105  underline pt-3"
                onClick={() => handleTextToggle("custom")}
              >
                Custom Website{" "}
                {arrowDirection.custom === "down" ? (
                  <DownArrow className="inline h-6 w-6" />
                ) : (
                  <UpArrow className="inline h-6 w-6" />
                )}
              </h2>
              {showText.custom && (
                <p className="fadeinfast text-lg lg:text-2xl">
                  We specialize in crafting custom websites that perfectly align
                  with your unique vision. Our expertise lies in creating
                  tailored solutions that cater to your specific goals and
                  requirements. With meticulous attention to detail, we ensure
                  your website reflects your brand identity and delivers an
                  exceptional user experience. From striking design elements to
                  seamless functionality, we bring your ideas to life, making
                  sure your website stands out from the competition. Let us
                  build a custom website that showcases your distinct
                  personality and helps you achieve your online goals.
                </p>
              )}
              <h2
                className="text-pink-conjury text-2xl lg:text-5xl my-2 cursor-pointer w-fit duration-100 hover:scale-105  underline pt-3"
                onClick={() => handleTextToggle("fullStack")}
              >
                Full Stack Website{" "}
                {arrowDirection.fullStack === "down" ? (
                  <DownArrow className="inline h-6 w-6" />
                ) : (
                  <UpArrow className="inline h-6 w-6" />
                )}
              </h2>
              {showText.fullStack && (
                <p className="fadeinfast text-lg lg:text-2xl">
                  We excel in full stack web development, utilizing React and
                  other advanced technologies. Our expertise creates dynamic and
                  robust websites with captivating user interfaces and powerful
                  functionalities. By leveraging React's versatility, we deliver
                  highly responsive and interactive websites for an exceptional
                  user experience. Our optimized solutions ensure fast and
                  efficient navigation and data handling.
                </p>
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-10 flex justify-center items-center">
            <img
              ref={slideLeftRef}
              src={imageOne}
              className={`slide-left rounded-2xl w-full ${
                isVisible ? "" : "opacity-0"
              }`}
              alt="image one"
            />
          </div>
        </div>
        <div className="flex pt-16 flex-col gap-10 lg:flex-row md:justify-evenly mx-6 lg:mx-32 bg-sla">
          <div className="lg:w-1/2 flex flex-col items-center justify-center lg:order-last">
            <h2 className="text-4xl text-center lg:text-left lg:text-6xl text-pink-conjury">
              Ecommerce Solutions
            </h2>
            <div className="pt-4 text-2xl">
              <div ref={slideRightRef}>
                Our Ecommerce Solutions service is tailored for companies
                seeking to create exceptional online shopping experiences. With
                expertise in designing and building ecommerce sites, we provide
                comprehensive functionality through platforms like WooCommerce
                and Shopify. Let us help you enhance your online presence and
                maximize your sales potential.
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-10 flex justify-center items-center lg:order-first">
            <img
              ref={slideRightRef}
              src={imageTwo}
              className={`slide-right rounded-2xl w-full ${
                isVisible ? "" : "opacity-0"
              }`}
              alt="image one"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
