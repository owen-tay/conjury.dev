import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DownSvg from "./images/downarrow.svg";
import VideoWhite from "./images/video/whiteloop.mp4";
import VideoDark from "./images/video/darkloop.mp4";
import PcPic from "./images/pc.jpg";
import { scroller } from "react-scroll";

//react scroll stuff (scroll to id)
const Home = () => {
  // Check for dark mode by looking at the HTML class
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  // Scroll functions
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

  // Observer for theme changes
  useEffect(() => {
    // Initialize the state based on the current class
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    // Set up a MutationObserver to watch for changes to the classList
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'class' &&
          mutation.target === document.documentElement
        ) {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Get video source based on theme state
  const getVideoSource = () => {
    if (isDarkMode) {
      return VideoDark;
    } else {
      return VideoWhite;
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      {/* Hero section with video background */}
      <div className="relative">
        <video
          className="fadein absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          key={isDarkMode ? 'dark-video' : 'light-video'} // Key forces remount when theme changes
        >
          <source src={getVideoSource()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Main content overlay */}
        <div className="homeHeader pb-10 min-h-screen flex flex-col justify-center md:justify-end relative z-10">
          <div className="flex flex-col m-4 md:m-10 md:flex-row md:justify-between">
            {/* Text content in a glass container */}
            <div className="w-full md:w-1/2 mb-10">
              <div className="backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 p-6 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30">
                <div className="title fadein py-5 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl dark:text-white text-gray-800 font-bold text-center md:text-left">
                  We are Conjury. We make great websites.
                </div>
                <div className="title fadein relative text-xl text-center md:text-left md:text-2xl xl:text-2xl dark:text-white/90">
                  We are a recently established web development and design
                  agency based in Glasgow who passionately embraces the world of
                  digital creativity. We have a genuine passion for crafting
                  exceptional websites and we are open to new clients.
                </div>
                <div className="flex justify-center md:justify-start mt-6">
                  <button 
                    onClick={scrollTohome2}
                    className="bg-white/50 dark:bg-slate-800/50 hover:bg-white/70 dark:hover:bg-slate-800/70 px-6 py-3 rounded-lg shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 text-gray-800 dark:text-white border border-white/20 dark:border-slate-700/30"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>

      {/* Services section - Improved layout */}
      <div className="bg-gray-50 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2
            id="homescreen2"
            className="mb-16 text-center text-4xl md:text-5xl text-pink-conjury dark:text-white font-bold"
          >
            We can provide all your development needs.
          </h2>

          {/* New balanced layout with large offset */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap">
              {/* Services cards in a 2-column grid layout */}
              <div className="w-full lg:w-7/12 px-4 mb-12 lg:mb-0">
                <div className="backdrop-blur-sm bg-white/50 dark:bg-slate-800/40 p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Web Design */}
                    <div className="p-4 bg-white/70 dark:bg-slate-700/70 rounded-xl shadow-sm border border-white/40 dark:border-slate-600/40 transition-all duration-200 hover:shadow-md">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full mb-4 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Web Design</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Create stunning, modern websites tailored to your brand</p>
                      </div>
                    </div>
                    
                    {/* Branding */}
                    <div className="p-4 bg-white/70 dark:bg-slate-700/70 rounded-xl shadow-sm border border-white/40 dark:border-slate-600/40 transition-all duration-200 hover:shadow-md">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full mb-4 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Branding</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Develop a cohesive visual identity for your business</p>
                      </div>
                    </div>
                    
                    {/* Web Development */}
                    <div className="p-4 bg-white/70 dark:bg-slate-700/70 rounded-xl shadow-sm border border-white/40 dark:border-slate-600/40 transition-all duration-200 hover:shadow-md">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full mb-4 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Web Development</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Build robust and scalable web applications</p>
                      </div>
                    </div>
                    
                    {/* Hosting */}
                    <div className="p-4 bg-white/70 dark:bg-slate-700/70 rounded-xl shadow-sm border border-white/40 dark:border-slate-600/40 transition-all duration-200 hover:shadow-md">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full mb-4 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Hosting</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Reliable and secure hosting solutions for your website</p>
                      </div>
                    </div>
                    
                    {/* Ecommerce Solutions - Spanning both columns for emphasis */}
                    <div className="p-4 bg-white/70 dark:bg-slate-700/70 rounded-xl shadow-sm border border-white/40 dark:border-slate-600/40 transition-all duration-200 hover:shadow-md md:col-span-2">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full mb-4 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Ecommerce Solutions</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Complete online store solutions with secure payment processing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-5/12 px-4 flex justify-center lg:justify-end items-center">
                <div className="backdrop-blur-sm bg-white/20 dark:bg-slate-800/20 p-3 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 transition-all duration-300 hover:shadow-xl max-w-md">
                  <img
                    src={PcPic}
                    className="rounded-xl w-full shadow-lg"
                    alt="Modern computer setup"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a onClick={scrollTohome3} className="inline-block cursor-pointer">
                <div className="hover:scale-110 ease-in-out duration-300">
                  <img
                    className="drop-shadow-xl w-12 md:w-16 2xl:w-20 slide-top-fast mx-auto ease-in-out duration-300 animate-bounce"
                    src={DownSvg}
                    alt="down button"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div
        id="homescreen3"
        className="relative bg-gray-200 dark:bg-slate-700 py-12 overflow-hidden"
      >
        {/* Enhanced gradient with Tailwind classes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-pink-conjury/10 opacity-60 animate-pulse-slow"></div>
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-pink-conjury/20 to-purple-400/5 rounded-full blur-3xl opacity-60 animate-float"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-pink-conjury/15 to-purple-400/0 rounded-full blur-3xl opacity-50 animate-float-reverse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="backdrop-blur-md bg-white/30 dark:bg-slate-800/30 p-8 md:p-12 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl text-center dark:text-white text-gray-800 font-bold mb-8">
              Trust Us With Your Web Presence.
            </h3>
            <p className="fadeinfast text-md sm:text-xl lg:text-2xl mx-2 lg:mx-8 dark:text-white text-gray-800 mb-10 text-center">
              We are a newly established agency eager to make a mark in the market,
              so we offer highly competitive rates. We are available to discuss all
              aspects of your new website or provide professional consultations.
              Feel free to reach out to us at your convenience.
            </p>
            
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 md:gap-8">
              <Link to="/Services">
                <div className="backdrop-blur-md bg-white/40 dark:bg-slate-800/40 hover:bg-white/60 dark:hover:bg-slate-800/60 py-4 px-6 text-xl md:text-2xl rounded-xl text-center w-64 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/20 dark:border-slate-700/30 text-gray-800 dark:text-white">
                  View Our Services
                </div>
              </Link>
              <Link to="/contact">
                <div className="backdrop-blur-md bg-white/40 dark:bg-slate-800/40 hover:bg-white/60 dark:hover:bg-slate-800/60 py-4 px-6 text-xl md:text-2xl rounded-xl text-center w-64 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/20 dark:border-slate-700/30 text-gray-800 dark:text-white">
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