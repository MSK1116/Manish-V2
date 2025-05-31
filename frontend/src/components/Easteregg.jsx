"use client";
import React from "react";
import { useEasterEgg } from "./EasterEggContext";

const Easteregg = () => {
  const { showEgg, count } = useEasterEgg();

  return (
    <>
      {showEgg && (
        <div data-aos="zoom-in-up" data-aos-offset="-900" className="fixed z-50 bottom-10 right-5 md:right-10">
          <div className="w-32 h-8 flex items-center justify-between shadow-md rounded-2xl px-2 py-1 bg-gray-300/75">
            <div className="w-[60%] flex items-center flex-col justify-end  ">
              <span className="text-xs ">Easter egg</span>
              <span className=" text-xs  mt-0 text-red-600">
                {count} <span className=" text-gray-700">of 2</span>
              </span>
            </div>
            <div className="w-[40%] h-full">
              <img className="w-full h-full object-cover" src="/clipart/Easteregg.gif" alt="Easter Egg" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Easteregg;
