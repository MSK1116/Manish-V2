import React from "react";

const Watch_mockup = ({ decreaseFactor, imageData }) => {
  const scaleFactor = 1 - decreaseFactor / 100;
  const scale = (value) => `${value * scaleFactor}px`;

  const date = new Date();

  const options = { weekday: "long", month: "long", day: "numeric" };
  const formatted = date.toLocaleString("default", options);
  return (
    <>
      <div className="">
        <div className=" mt-8 rotate-12">
          <div style={{ borderTopLeftRadius: scale(40), borderTopRightRadius: scale(40), height: scale(63), maxWidth: scale(133), width: scale(133) }} className="relative mx-auto bg-gray-800  "></div>
          <div style={{ borderWidth: scale(10), borderRadius: scale(40), height: scale(213), width: scale(208) }} className=" relative mx-auto border-gray-900  ">
            <div style={{ width: scale(6), insetInlineEnd: scale(-16), height: scale(41), top: scale(40), borderStartEndRadius: scale(8), borderEndEndRadius: scale(8) }} className=" bg-gray-800  absolute  "></div>
            <div style={{ width: scale(6), insetInlineEnd: scale(-16), height: scale(32), top: scale(88), borderStartEndRadius: scale(8), borderEndEndRadius: scale(8) }} className="  bg-gray-800  absolute  "></div>
            <div style={{ borderRadius: scale(32), height: scale(193), width: scale(188) }} className="overflow-hidden relative ">
              <img style={{ height: scale(193), width: scale(188) }} src={`/studio/${imageData.link_low}`} className="object-cover" alt={`Smartwatch mockup with wallpaper of ${imageData.metaDescription}`} />
              <div className=" absolute top-2 flex flex-col items-center  h-full w-full  text-white">
                <span className=" text-[6px]">
                  {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()} : {date.getMinutes()}
                </span>
                <span className=" mt-0 text-[3px]">{formatted}</span>
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottomRightRadius: scale(40),
              borderBottomLeftRadius: scale(40),
              height: scale(63),
              maxWidth: scale(133),
              width: scale(133),
            }}
            className="relative mx-auto bg-gray-800 "></div>
        </div>
      </div>
    </>
  );
};

export default Watch_mockup;
