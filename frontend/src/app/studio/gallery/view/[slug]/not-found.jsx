import React from "react";
import Svg_400_2 from "../../../../../SVG/Svg_400_2";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className=" w-full overflow-hidden p-16 font-lora">
        <div className=" flex items-center justify-center">
          <Svg_400_2 height={400} width={400} />
        </div>
        <div className=" flex items-center flex-col space-y-3">
          <h1 className=" text-3xl font-semibold text-center">I guess I haven't clicked it... yet. 🤷‍♂️</h1>
          <div className=" w-fit">
            <Link aria-label="Click to return to the studio to browse image" className=" mt-4" href={"/studio"}>
              <div className=" active:scale-95 overflow-hidden bg-gray-300  px-3 py-2 rounded-md group/download-btn  relative">
                <div className=" justify-center size-full">
                  <h4 className=" group-hover/download-btn:-translate-x-40 text-sm transition-all duration-700">Go to studio</h4>
                  <div className=" translate-x-32 group-hover/download-btn:-translate-x-0 absolute flex inset-0  items-center justify-center z-10 transition-all duration-500">🌄</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
