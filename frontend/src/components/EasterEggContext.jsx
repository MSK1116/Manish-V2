"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const EasterEggContext = createContext();

export const EasterEggProvider = ({ children }) => {
  const [showEgg, setShowEgg] = useState(false);
  const [count, setCount] = useState(0); // Store count

  const triggerEgg = (value = 1) => {
    setShowEgg(true);
    const getEggCount = parseInt(getLocationCookie());
    if (getEggCount > 0) {
      setCount(getEggCount + value);
      setEggCookies(getEggCount + value);
    } else {
      setCount(1);
      setEggCookies(1);
    }

    setTimeout(() => {
      setShowEgg(false);
    }, 10000);
  };

  useEffect(() => {
    let timer1;
    const previouslyFoundedEgg = getLocationCookie();
    setCount(previouslyFoundedEgg);
    const handleEggPop = () => {
      setShowEgg(true);

      timer1 = setTimeout(() => {
        setShowEgg(false);
      }, 10000);
    };
    handleEggPop();
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const setEggCookies = (eggCount) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    document.cookie = `eggFound=${eggCount};expires=${expires.toUTCString()};path=/`;
  };

  const getLocationCookie = () => {
    const allCookies = document.cookie.split("; ");
    if (allCookies) {
      const parsedData = Object.fromEntries(allCookies.map((item) => item.split("=")));
      if (parsedData.eggFound) {
        console.log(parsedData.eggFound);
        return parsedData.eggFound;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  return <EasterEggContext.Provider value={{ showEgg, count, triggerEgg }}>{children}</EasterEggContext.Provider>;
};

export const useEasterEgg = () => useContext(EasterEggContext);
