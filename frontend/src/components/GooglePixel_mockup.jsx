import React from "react";

const GooglePixel_mockup = ({ decreaseFactor, imageData }) => {
  const scaleFactor = 1 - decreaseFactor / 100;
  const scale = (value) => `${value * scaleFactor}px`;
  const date = new Date();

  const options = { weekday: "long", month: "long", day: "numeric" };
  const formatted = date.toLocaleString("default", options);
  return (
    <>
      <div
        style={{
          borderWidth: scale(14),
          borderRadius: scale(12), // rounded-xl ≈ 12px
          height: scale(600),
          width: scale(300),
        }}
        className={"relative mx-auto md:mt-5 mt-2 border-gray-800 bg-gray-800 "}>
        {/* Top notch */}
        <div
          className="absolute bg-gray-800 z-20"
          style={{
            width: scale(148),
            height: scale(18),
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            borderBottomLeftRadius: scale(16),
            borderBottomRightRadius: scale(16),
          }}></div>
        {/* Side buttons */}
        <div
          className="absolute bg-gray-800 rounded-s-lg"
          style={{
            height: scale(32),
            width: scale(3),
            left: scale(-17),
            top: scale(72),
          }}></div>
        <div
          className="absolute bg-gray-800 rounded-s-lg"
          style={{
            height: scale(46),
            width: scale(3),
            left: scale(-17),
            top: scale(124),
          }}></div>
        <div
          className="absolute bg-gray-800 rounded-s-lg"
          style={{
            height: scale(46),
            width: scale(3),
            left: scale(-17),
            top: scale(178),
          }}></div>
        <div
          className="absolute bg-gray-800 rounded-e-lg"
          style={{
            height: scale(64),
            width: scale(3),
            right: scale(-17),
            top: scale(142),
          }}></div>
        {/* Inner screen */}
        <div
          className="overflow-hidden relative bg-white "
          style={{
            width: scale(272),
            height: scale(572),
            borderRadius: scale(12),
          }}>
          <img src={`/studio/${imageData.link_low}`} className=" object-cover w-full h-full" style={{ width: scale(272), height: scale(572) }} alt="" />
          <div className=" absolute top-2 flex flex-col items-center  h-full w-full  text-white">
            <span className=" text-[6px]">
              {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()} : {date.getMinutes()}
            </span>
            <span className=" mt-0 text-[3px]">{formatted}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GooglePixel_mockup;
