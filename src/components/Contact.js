import React from "react";
import ContactSvg from "./images/contactpage.svg";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="lg:order-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-pink-conjury text-5xl pt-12  lg:pt-1">Want To Work With Us?</h1>
          <p className="text-xl pt-3">
            Get in touch with us now! Fill out our contact form and let's start
            the conversation. We're here to listen and respond promptly.
          </p>
        </div>
        <div className="lg:order-2">
          <img src={ContactSvg} alt="Contact Image" className="w-full mt-10"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
