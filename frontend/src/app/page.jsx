import React from "react";
import Home_banner from "@/Home/Home_banner";
import About from "@/About/About";
import Award from "@/Award/Award";
import Project from "@/Project/Project";
import Contact from "@/contact/Contact";

const page = () => {
  return (
    <>
      <Home_banner />
      <About />
      <Award />
      <Project />
      <Contact />
    </>
  );
};

export default page;
