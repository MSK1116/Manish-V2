import React from "react";
import Link from "next/link";
import Svg_400 from "../SVG/Svg_400";

export default function NotFound() {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center  flex items-center flex-col">
          <Svg_400 />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

          <p className="mt-4 text-gray-500">I can't find that page.</p>
          <Link className=" mt-4" aria-label="Click to return to the Home Page" href={"/"}>
            <div className=" active:scale-95 overflow-hidden bg-gray-300  px-3 py-2 rounded-md group/download-btn  relative">
              <div className=" justify-center size-full">
                <h4 className=" group-hover/download-btn:-translate-x-40 text-sm transition-all duration-700">Return to portfolio</h4>
                <div className=" translate-x-32 group-hover/download-btn:-translate-x-0 absolute flex inset-0  items-center justify-center z-10 transition-all duration-500">↩️</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
