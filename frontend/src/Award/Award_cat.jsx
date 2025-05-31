"use client";
import { useEasterEgg } from "@/components/EasterEggContext";
import React, { useEffect, useState } from "react";

const Award_cat = () => {
  const [translateGoodCat, setTranslateGoodCat] = useState(false);
  const [translateRunningCat, setTranslateRunningCat] = useState(false);
  const [catIsClicked, setCatIsClicked] = useState(false);
  const { triggerEgg } = useEasterEgg();
  const handleCat = () => {
    triggerEgg(1);
    setCatCookie();
    setCatIsClicked(true);
    const timer0 = setTimeout(() => {
      setTranslateGoodCat(true);
    }, 100);
    const timer = setTimeout(() => {
      setTranslateRunningCat(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer0);
    };
  };

  const triggerCat = () => {
    if (!catIsClicked || !getCatCookie()) {
      handleCat();
    } else {
      return;
    }
  };

  const setCatCookie = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    document.cookie = `easterFound2=Cat;expires=${expires.toUTCString()};path=/`;
  };

  const getCatCookie = () => {
    const nameOfEggs = document.cookie.split("; ");
    if (nameOfEggs) {
      const parsedData = Object.fromEntries(nameOfEggs.map((item) => item.split("=")));
      if (parsedData.easterFound2 == "Cat") {
        setTranslateGoodCat(true);
        setTranslateRunningCat(true);
        setCatIsClicked(true);
        return true;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    getCatCookie();
  }, []);
  return (
    <>
      <div onClick={triggerCat} className="md:block hidden size-48 absolute -right-10 bottom-2 -z-50 ">
        <img
          loading="lazy"
          className={` ${translateGoodCat ? " -translate-x-80 cursor-default " : " translate-x-0  cursor-pointer "} ease-linear transition-all duration-[1200ms]  w-full h-full object-contain `}
          alt="good_cat"
          src="\clipart\goodCat.gif"></img>
      </div>
      <div className={` md:block hidden -z-50 size-52 absolute right-0 bottom-2  `}>
        <img
          loading="lazy"
          className={` ${translateRunningCat ? " translate-x-[150vh] cursor-default z-50 " : " -translate-x-40 -z-50 "} ease-in-out transition-all duration-[4600ms]  w-full h-full object-contain `}
          alt="good_cat"
          src="\clipart\runningCat.gif"></img>
      </div>
    </>
  );
};

export default Award_cat;
