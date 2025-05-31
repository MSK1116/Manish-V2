"use client";
import React, { useEffect, useState } from "react";

const ScrollMouse = () => {
  const [handleMouseDisp, setHandleMouseDisp] = useState({ leftClick: false, rightClick: false });
  const [mouseView, setMouseView] = useState(false);

  const handleMouseDown = (event) => {
    if (event.button == 0) {
      setHandleMouseDisp({ leftClick: true, rightClick: false });
    } else if (event.button == 2) {
      setHandleMouseDisp({ leftClick: false, rightClick: true });
    } else {
      console.log("other button clicked");
    }
  };

  useEffect(() => {
    let timer1;

    const handleScrollY = () => {
      clearTimeout(timer1);
      timer1 = setTimeout(() => {
        setMouseView(true);
      }, 15000);

      setMouseView(false);
    };

    window.addEventListener("scroll", handleScrollY);
    handleScrollY();
    return () => {
      window.removeEventListener("scroll", handleScrollY);
      clearTimeout(timer1);
    };
  }, []);

  const handleMouseUp = () => {
    setHandleMouseDisp({ leftClick: false, rightClick: false });
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {mouseView && (
        <div className=" fixed right-1 md:bottom-9 bottom-20 ">
          <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="1000" className="relative w-[30px] h-[45px] border-[3px] border-[#333] md:rounded-[60px] rounded-md bg-white mx-auto">
            <div className={` ${handleMouseDisp.leftClick ? " bg-blue-600 " : " hover:bg-gray-300 "} absolute top-0 left-0 w-1/2 h-[52%]  transition-all md:border-r    rounded-tl-[60px] `}></div>
            <div className={` ${handleMouseDisp.rightClick ? " bg-blue-600" : "hover:bg-gray-300"} absolute top-0 right-0 w-1/2 h-[52%]  transition-all md:border-l border-[#333]/50 rounded-tr-[60px] rounded-br-[40%] `}></div>
            <div className="absolute w-[5px] h-[5px] bg-[#333] rounded-full left-1/2 translate-x-[-50%] md:top-[4px] top-[30px] animate-wheel2  md:animate-wheel"></div>
            <div className="absolute md:hidden w-[5px] h-[5px] bg-[#333]  rounded-full left-1/2 translate-x-[-50%] top-[2px] "></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollMouse;
