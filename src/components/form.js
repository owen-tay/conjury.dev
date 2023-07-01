import React, { useState } from "react";

const Form = () => {
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = {};

    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);
    setResultMessage("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const responseData = await response.json();
      if (response.status === 200) {
        setResultMessage(responseData.message);
      } else {
        console.log(response);
        setResultMessage(responseData.message);
      }
    } catch (error) {
      console.log(error);
      setResultMessage("Something went wrong!");
    }

    form.reset();
    setTimeout(() => {
      setResultMessage("");
    }, 5000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-800">
      <div className="container mx-auto relative z-10">
        <div className="max-w-md mx-auto my-10 bg-gray-100 p-5  rounded-md shadow-sm dark:bg-slate-900">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-black dark:text-gray-200">
              Contact Us
            </h1>
            <p className="text-gray-400 dark:text-white">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit} id="form">
              <input
                type="hidden"
                name="access_key"
                value="855f0fc0-4ed1-4bfa-a206-7a31eb84d475"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full hover:scale-105 duration-200 ease-in-out px-3 py-4 text-white bg-pink-conjury rounded-md focus:bg-blue-conjury focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result">
                {resultMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
