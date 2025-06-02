"use client";
import React, { useEffect, useState } from "react";

const Laptop_mockup = ({ decreaseFactor, imageData }) => {
  const scaleFactor = 1 - decreaseFactor / 100;
  const scale = (value) => `${value * scaleFactor}px`;
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formatted = date.toLocaleString("default", options);

  return (
    <>
      <div className="">
        <div
          style={{
            borderWidth: scale(8),
            borderTopRightRadius: scale(12),
            borderTopLeftRadius: scale(12),
            height: scale(windowWidth > 768 ? 294 : 172),
            maxWidth: scale(windowWidth > 768 ? 512 : 301),
          }}
          className="relative mx-auto border-gray-800  bg-gray-800 ">
          <div
            style={{
              height: scale(windowWidth > 768 ? 278 : 156),
            }}
            className="rounded-lg overflow-hidden bg-white  ">
            <div className=" absolute md:top-7 top-3 flex flex-col items-center  h-full w-full text-white">
              <span className=" md:text-sm text-[12px]">
                {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()} : {date.getMinutes()}
              </span>
              <span className=" md:text-xs text-[10px] ">{formatted}</span>
            </div>
            <img
              style={{
                height: scale(windowWidth > 768 ? 278 : 156),
                borderRadius: scale(8),
              }}
              src={`/studio/${imageData.link_low}`}
              className="object-cover  w-full "
              alt=""
            />
          </div>
        </div>
        {/* keyboard part */}
        <div
          style={{
            borderBottomLeftRadius: scale(12),
            borderBottomRightRadius: scale(12),
            borderTopRightRadius: scale(2),
            borderTopLeftRadius: scale(2),
            width: scale(windowWidth > 768 ? 600 : 351),
            maxWidth: scale(windowWidth > 768 ? 600 : 351),
            height: scale(windowWidth > 768 ? 21 : 17),
          }}
          className={` relative mx-aut bg-gray-900 `}>
          <div
            style={{
              width: scale(windowWidth > 768 ? 96 : 56),
              height: scale(windowWidth > 768 ? 8 : 5),
              borderBottomLeftRadius: scale(12),
              borderBottomRightRadius: scale(12),
            }}
            className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl  bg-gray-800"></div>
        </div>
      </div>
    </>
  );
};

export default Laptop_mockup;
