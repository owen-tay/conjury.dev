import React from "react";
import conjure from "./images/conjuretext.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  const author = " - Owen Taylor";

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="flex items-center">
          <p className="text-gray-600 text-sm mr-4">
            &copy; {currentYear} | Made By
          </p>
          <a href="/">
            <img
              src={conjure}
              className="bg-pink-200 hover:bg-teal-200 rounded-sm w-16 negative-margin transition ease-in-out"
              alt="Logo"
            />
          </a>
          <p className="text-gray-600 text-sm">| All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
