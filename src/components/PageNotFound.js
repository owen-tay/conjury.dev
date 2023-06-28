import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="justify-center mt-9 items-center text-center h-screen w-screen bg-slate-100 dark:bg-slate-800 dark:text-white pt-9">
      <h1 className="text-3xl animate-spin">&#x1F480;</h1>
      <h1 className="text-3xl">404</h1>
      <p>
        Page not found! Return{" "}
        <Link className=" text-pink-400" to="/">
          {" "}
          Here{" "}
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
