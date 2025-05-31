"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useEasterEgg } from "@/components/EasterEggContext";
import Easteregg from "../Easteregg";

const Navbar_ProfilePic = () => {
  const [stickMan, setStickyMan] = useState(false);
  const [stickMan1, setStickyMan1] = useState(false);
  const [stickMan1Walking, setStickyMan1Walking] = useState(false);
  const [flashImg, setFlashImg] = useState(true);
  const [flashImgIsClicked, setFlashImgIsClicked] = useState(false);
  const stickManDuration = 4.3 * 1000;

  const { triggerEgg } = useEasterEgg();
  const handleStickyMan = () => {
    setStickyManCookie();
    setStickyMan(true);
    setStickyMan1(false);
    setStickyMan1Walking(false);
    setFlashImgIsClicked(true);
    triggerEgg(1);
    setFlashImg(false);
    const timer = setTimeout(() => {
      setStickyMan(false);
      setStickyMan1(true);
      setTimeout(() => {
        setStickyMan1Walking(true);
      }, 100);
    }, stickManDuration);

    return () => {
      clearTimeout(timer);
    };
  };
  const StickyMan = () => {
    if (flashImgIsClicked || getStickyManCookie()) {
      return;
    }
    handleStickyMan();
    getStickyManCookie();
  };

  const setStickyManCookie = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    document.cookie = `easterFound=stickMan;expires=${expires.toUTCString()};path=/`;
  };

  const getStickyManCookie = () => {
    const nameOfEggs = document.cookie.split("; ");
    if (nameOfEggs) {
      const parsedData = Object.fromEntries(nameOfEggs.map((item) => item.split("=")));
      if (parsedData.easterFound == "stickMan") {
        setFlashImgIsClicked(true);
        setFlashImg(false);
        return true;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    getStickyManCookie(); //I'm doing this bcz, I want to check it in beginning to show that I can disable red-outline
  }, []);
  return (
    <>
      {" "}
      <div onClick={StickyMan} className={` flex relative space-x-2  ${flashImgIsClicked ? " cursor-default " : "cursor-pointer"}`}>
        <div className=" relative w-12 h-12 rounded-full">
          {flashImg && <div data-aos="zoom-in" className=" absolute h-full animate-pulse rounded-full  outline-2 shadow-lg outline-red-600  w-full"></div>}
          <Image alt="Manish photograph" className=" object-cover" fill={true} src={"/JPG_manish_circle.png"}></Image>
        </div>
        <div className=" text-gray-900">
          Manis<span className=" text-red-700">h</span>
          <p className="text-sm">Web Portfolio</p>
        </div>

        <div className={` absolute -top-4 -right-16 size-20 `}>
          {stickMan && <img data-aos="fade-down" className=" select-none object-contain " src="/clipart/strockManHi.gif"></img>}
          {stickMan1 && <img className={` ${stickMan1Walking ? " -translate-x-96  " : "translate-x-0  "} ease-linear transition-all duration-[9000ms] object-contain `} src="/clipart/strokManWalking.gif"></img>}
        </div>
      </div>
      <Easteregg />
    </>
  );
};

export default Navbar_ProfilePic;
