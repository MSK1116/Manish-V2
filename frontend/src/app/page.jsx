import React from "react";
import Home_banner from "@/Home/Home_banner";
import About from "@/About/About";
import Award from "@/Award/Award";
import Project from "@/Project/Project";
import Contact from "@/contact/Contact";
import { pixelateImageToBase64 } from "@/lib/pixelate";

const page = async () => {
  const pixelatedOfManish = await pixelateImageToBase64("./public/imageDir/manish_portfolio.jpg");
  return (
    <>
      <Home_banner pixelatedOfManish={pixelatedOfManish} />
      <About />
      <Award />
      <Project />
      <Contact />
    </>
  );
};

export default page;
