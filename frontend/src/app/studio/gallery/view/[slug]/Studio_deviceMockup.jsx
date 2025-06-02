"use client";
import React, { useEffect, useState } from "react";
import GooglePixel_mockup from "../../../../../components/GooglePixel_mockup";

import Laptop_mockup from "../../../../../components/Laptop_mockup";
import Watch_mockup from "../../../../../components/Watch_mockup";

const Studio_deviceMockup = ({ image }) => {
  const [isClient, setClient] = useState(null);
  useEffect(() => {
    setClient(true);
  }, []);
  const handleDecreaseFactor = (low, high) => {
    if (!isClient) {
      return high;
    }
    return window.innerWidth > 768 ? low : high;
  };

  return (
    <>
      <div data-aos="zoom-in-up">
        <Laptop_mockup decreaseFactor={handleDecreaseFactor(40, 45)} imageData={image} />
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="80">
        <GooglePixel_mockup decreaseFactor={handleDecreaseFactor(80, 88)} imageData={image} />
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="100">
        <Watch_mockup decreaseFactor={handleDecreaseFactor(80, 85)} imageData={image} />
      </div>
    </>
  );
};

export default Studio_deviceMockup;
