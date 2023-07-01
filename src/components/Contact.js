import React, { useState, useRef, useEffect } from "react";
import ContactSvg from "./images/contactpage.svg";
import Form from "./form";

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [showForm]);

  const handleFormClick = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-12">
        <div className="lg:order-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-pink-conjury text-5xl pt-3 md:pt-12  lg:pt-1">
            Want To Work With Us?
          </h1>
          <p className="text-xl pt-6">
            Get in touch with us now! Fill out our contact form and let's start
            the conversation. We're here to listen and respond promptly.
          </p>
          <div className="flex-col pt-7 mx-auto lg:mx-0">
            <div className="flex justify-evenly duration-200 hover:scale-105 ease-in-out items-center bg-gray-100 dark:bg-slate-700 rounded-xl border shadow-xl  border-gray-500 my-5 w-64 sm:w-96 h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div className="flex-col">
                Email Us:
                <div className=" font-bold text-lg sm:text-xl">
                  support@conjury.dev
                </div>
              </div>
            </div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-evenly duration-200 hover:scale-105 ease-in-out items-center bg-gray-100 dark:bg-slate-700 rounded-xl border shadow-xl border-gray-500 my-5 w-64 sm:w-96 h-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <div className="flex-col">
                  Message Us:
                  <div className="font-bold text-lg sm:text-xl ">
                    Add Facebook link here
                  </div>
                </div>
              </div>
            </a>
            <div
              id="Form"
              onClick={handleFormClick}
              className="flex justify-evenly duration-200 hover:scale-105 ease-in-out items-center bg-gray-100 dark:bg-slate-700 rounded-xl border shadow-xl  border-gray-500 my-5 w-64 sm:w-96 h-24 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <div className="flex-col">
                Fill In Our Form:
                <div className=" font-bold text-lg sm:text-xl">
                  Click To Show The Form.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:order-2 flex justify-center">
          <img
            src={ContactSvg}
            alt="Contact Image"
            className="w-2/2 lg:w-2/3 mt-10"
          />
        </div>
      </div>
      <div
        style={{ visibility: showForm ? "visible" : "hidden" }}
        ref={formRef}
      >
        {showForm && <Form />}
      </div>
    </div>
  );
};

export default About;
