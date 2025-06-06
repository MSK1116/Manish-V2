"use client";
import React from "react";
import { Link } from "react-scroll";

const Footer_scroll = () => {
  return (
    <>
      <div aria-label="click to scroll to home" className=" cursor-pointer absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <Link to="Home" duration={900} offset={-70} activeClass="active" smooth={true}>
          <div data-aos="zoom-in-down" data-aos-duration="2000" className="inline-block rounded-full  bg-teal-600 hover:bg-red-600 transition-all duration-700 p-2 text-white shadow  sm:p-3 lg:p-4" href="#MainContent">
            <span className="sr-only">Back to top</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer_scroll;
