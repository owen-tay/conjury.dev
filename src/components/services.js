import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imageOne from "./images/home1.png";
import imageTwo from "./images/home2.png";
import DownSvg from "./images/downarrow.svg";
import { scroller } from "react-scroll";

const Services = () => {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    wordpress: false,
    custom: false,
    fullStack: false,
  });

  // Check for dark mode by looking at the HTML class
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

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

  // Toggle expanded sections
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Scroll functions
  const scrollToEcommerce = () => {
    scroller.scrollTo("ecommerce-section", {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };

  const scrollToTop = () => {
    scroller.scrollTo("services-header", {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div id="services-header" className="py-16 relative overflow-hidden">
        {/* Simple background */}
        <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="mb-12 text-center text-5xl md:text-6xl lg:text-7xl text-pink-conjury font-bold fadein">
            Our Services
          </h1>
          
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
            We create awesome websites that bring your ideas to life. From simple designs to complex web apps, we've got you covered.
          </p>
        </div>
      </div>

      {/* Web Design and Development Section */}
      <div className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <div className="backdrop-blur-sm bg-white/30 dark:bg-slate-800/30 p-8 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-pink-conjury font-bold mb-6">
                  Web Design and Development
                </h2>
                
                <p className="text-gray-800 dark:text-white/90 text-lg mb-8">
                  Ready to get your perfect website? We'll help turn your vision into reality with an eye-catching design that works on all devices. We offer a few different options to fit what you need.
                </p>
                
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSection('wordpress')} 
                    className="group flex items-center text-left w-full"
                  >
                    <h3 className="text-2xl md:text-3xl text-pink-conjury font-semibold hover:scale-105 transition-transform duration-300">
                      WordPress
                    </h3>
                    <div className={`ml-3 w-6 h-6 rounded-full bg-pink-conjury/20 flex items-center justify-center transition-transform duration-300 ${expandedSections.wordpress ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-conjury" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {expandedSections.wordpress && (
                    <div className="mt-4 pl-1 text-gray-700 dark:text-gray-300 fadeinfast">
                      <h4 className="font-medium text-xl mb-2">Need a website fast? We can set up WordPress to match your style.</h4>
                      <p className="text-base">
                        WordPress is perfect for blogs, small business sites, and basic online stores. We'll customize it with your colors, logo, and the features you need. It's easy to update yourself later too, which makes it great for businesses that want to add new content regularly.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSection('custom')} 
                    className="group flex items-center text-left w-full"
                  >
                    <h3 className="text-2xl md:text-3xl text-pink-conjury font-semibold hover:scale-105 transition-transform duration-300">
                      Custom Website
                    </h3>
                    <div className={`ml-3 w-6 h-6 rounded-full bg-pink-conjury/20 flex items-center justify-center transition-transform duration-300 ${expandedSections.custom ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-conjury" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {expandedSections.custom && (
                    <div className="mt-4 pl-1 text-gray-700 dark:text-gray-300 fadeinfast">
                      <h4 className="font-medium text-xl mb-2">Want something totally unique? Let's build a custom site that's 100% you.</h4>
                      <p className="text-base">
                        We'll start from scratch to create exactly what you're imagining. Custom websites give you complete control over how everything looks and works. This is perfect if you have specific features in mind or want a site that really stands out from the crowd.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Full Stack Website Section */}
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSection('fullStack')} 
                    className="group flex items-center text-left w-full"
                  >
                    <h3 className="text-2xl md:text-3xl text-pink-conjury font-semibold hover:scale-105 transition-transform duration-300">
                      Full Stack Website
                    </h3>
                    <div className={`ml-3 w-6 h-6 rounded-full bg-pink-conjury/20 flex items-center justify-center transition-transform duration-300 ${expandedSections.fullStack ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-conjury" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {expandedSections.fullStack && (
                    <div className="mt-4 pl-1 text-gray-700 dark:text-gray-300 fadeinfast">
                      <h4 className="font-medium text-xl mb-2">Need a site with all the bells and whistles? Our React-powered websites are the way to go.</h4>
                      <p className="text-base">
                        We build super smooth, interactive websites using React and other modern tools. These sites feel more like apps than regular websites - they're fast, responsive, and can handle complex features like user accounts, dashboards, or anything else you can dream up.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Down arrow to next section */}
              <div className="flex justify-center mt-8">
                <button onClick={scrollToEcommerce} className="hover:scale-110 ease-in-out duration-300">
                  <img
                    className="drop-shadow-xl w-12 md:w-16 animate-bounce"
                    src={DownSvg}
                    alt="Scroll down"
                  />
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="backdrop-blur-sm bg-white/20 dark:bg-slate-800/20 p-3 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 transition-all duration-300 hover:shadow-xl">
                <img
                  src={imageOne}
                  className="rounded-xl w-full shadow-lg"
                  alt="Web development"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="ecommerce-section" className="py-16 relative bg-gray-100 dark:bg-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Image with glass effect */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="backdrop-blur-sm bg-white/20 dark:bg-slate-800/20 p-3 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 transition-all duration-300 hover:shadow-xl">
                <img
                  src={imageTwo}
                  className="rounded-xl w-full shadow-lg"
                  alt="Ecommerce solutions"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="backdrop-blur-md bg-white/30 dark:bg-slate-800/30 p-8 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-pink-conjury font-bold mb-6">
                  Ecommerce Solutions
                </h2>
                
                <p className="text-gray-800 dark:text-white/90 text-lg mb-6">
                  Want to sell your products online? We'll set you up with an online store that looks great and works even better. Whether you have a few products or hundreds, we've got you covered.
                </p>
                
                <p className="text-gray-800 dark:text-white/90 text-lg mb-8">
                  We work with platforms like WooCommerce and Shopify to create stores that are easy to manage. Your customers will enjoy secure checkout, and you'll be able to keep track of inventory, orders, and shipping without breaking a sweat.
                </p>
                
                <div className="flex justify-center">
                  <Link to="/contact">
                    <button className="backdrop-blur-md bg-white/40 dark:bg-slate-800/40 hover:bg-white/60 dark:hover:bg-slate-800/60 py-3 px-6 text-lg md:text-xl rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/20 dark:border-slate-700/30 text-gray-800 dark:text-white">
                     Contact us
                    </button>
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button onClick={scrollToTop} className="hover:scale-110 ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-conjury/70 drop-shadow-xl animate-bounce transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center text-pink-conjury font-bold mb-12">
            More Ways We Can Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hosting Card */}
            <div className="backdrop-blur-sm bg-white/30 dark:bg-slate-800/30 p-6 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">Web Hosting</h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-center">
                We'll take care of keeping your site online and running smoothly. No need to worry about servers, backups, or technical stuff - we handle all that behind the scenes.
              </p>
            </div>
            
            {/* Maintenance Card */}
            <div className="backdrop-blur-sm bg-white/30 dark:bg-slate-800/30 p-6 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">Maintenance</h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-center">
                We'll keep your site up-to-date and secure with regular check-ups. Think of us as your website's mechanic - we'll fix any issues before they become problems.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/30 dark:bg-slate-800/30 p-6 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">SEO Boost</h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Want more visitors? We'll tune up your website so it ranks better in Google. More visibility means more customers finding you when they search online.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-200 dark:bg-slate-700 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="backdrop-blur-md bg-white/30 dark:bg-slate-800/30 p-8 md:p-12 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl text-center text-gray-800 dark:text-white font-bold mb-6">
              Let's Build Something Great Together
            </h3>
            
            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
              Ready to chat about your project? Drop us a line and we'll get back to you quickly. No pressure, just friendly conversation about how we can help.
            </p>
            
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="backdrop-blur-md bg-white/40 dark:bg-slate-800/40 hover:bg-white/60 dark:hover:bg-slate-800/60 py-3 px-6 text-lg md:text-xl rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/20 dark:border-slate-700/30 text-gray-800 dark:text-white">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;