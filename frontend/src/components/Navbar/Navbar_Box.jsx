"use client";
import React, { useEffect, useState } from "react";
import Navbar_ProfilePic from "./Navbar_ProfilePic";
import { EasterEggProvider } from "../EasterEggContext";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

const Navbar_Box = () => {
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();
  const checkPath = pathname.startsWith("/studio");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navList = (
    <>
      <li className="hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none  transition-all duration-200  cursor-pointer  ">
        <Link
          className="relative  after:content-[''] after:origin-left after:w-0 hover:after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"
          to="Home"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          activeClass={"text-red-700 after:content-[''] after:origin-left after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"}>
          Home
        </Link>
      </li>
      <li className="hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none  transition-all duration-200 cursor-pointer">
        <Link
          className="relative after:content-[''] after:w-0 after:origin-left   hover:after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"
          to="About"
          smooth={true}
          offset={-70}
          duration={500}
          spy={true}
          activeClass={"text-red-700 after:content-[''] after:origin-left after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"}>
          {" "}
          About
        </Link>
      </li>
      <li className="hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none  transition-all duration-200 cursor-pointer">
        <Link
          className="relative after:content-[''] after:w-0 after:origin-left   hover:after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"
          to="Award"
          smooth={true}
          offset={-70}
          duration={500}
          spy={true}
          activeClass={"text-red-700 after:content-[''] after:origin-left after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"}>
          {" "}
          Participation
        </Link>
      </li>

      <li className="hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none  transition-all duration-200 cursor-pointer">
        <Link
          className="relative after:content-[''] after:w-0 after:origin-left   hover:after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"
          to="Contact"
          smooth={true}
          offset={-70}
          duration={500}
          spy={true}
          activeClass={"text-red-700 after:content-[''] after:origin-left after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0"}>
          {" "}
          Contact
        </Link>
      </li>
      <li className="hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none  transition-all duration-200 cursor-pointer">
        <NextLink
          aria-label="Click to visit studio page"
          href="/studio"
          className="relative after:content-[''] after:w-0 after:origin-left   hover:after:w-full after:top-full after:h-1 after:absolute after:bg-red-700 after:transition-all after:duration-700 after:rounded-full after:left-0">
          Studio
        </NextLink>
      </li>
    </>
  );
  const navList2 = (
    <>
      <li className={` relative after:content-[''] after:origin-left after:w-0 hover:after:w-full after:top-full after:h-1 after:absolute after:bg-blue-700 after:transition-all after:duration-700 after:rounded-full after:left-0 cursor-pointer `}>
        <NextLink href={"/"}> Portfolio</NextLink>
      </li>
      <li
        className={` ${
          pathname == "/studio" ? "text-blue-700 after:content-[''] after:origin-left after:w-full after:top-full after:h-1 after:absolute after:bg-blue-700 after:transition-all after:duration-700 after:rounded-full after:left-0" : ""
        } hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none transition-all duration-300 relative after:content-[''] after:origin-left after:w-0 hover:after:w-full after:top-full after:h-1 after:absolute after:bg-blue-700 after:transition-all after:duration-700 after:rounded-full after:left-0 cursor-pointer `}>
        <NextLink href={"/studio"}>Home</NextLink>
      </li>
      <li
        className={` ${
          pathname == "/studio/gallery" ? "text-blue-700 after:content-[''] after:origin-left after:w-full after:top-full after:h-1 after:absolute after:bg-blue-700 after:transition-all after:duration-700 after:rounded-full after:left-0" : ""
        } hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none transition-all duration-300 relative after:content-[''] after:origin-left after:w-0 hover:after:w-full after:top-full after:h-1 after:absolute after:bg-blue-700 after:transition-all after:duration-700 after:rounded-full after:left-0 cursor-pointer `}>
        <NextLink href={"/studio/gallery"}>Gallery </NextLink>
      </li>
      <li
        className={` ${
          pathname == "/studio/volunteer" ? "text-blue-700 after:content-[''] after:origin-left after:w-full after:top-full after:h-1 after:absolute after:bg-blue-700 after:transition-all after:duration-700 after:rounded-full after:left-0" : ""
        } hover:scale-105 active:-translate-y-[2px] active:scale-110 select-none transition-all duration-300 relative after:content-[''] after:origin-left after:w-0 hover:after:w-full after:top-full after:h-1 after:absolute after:bg-blue-700 after:transition-all after:duration-700 after:rounded-full after:left-0 cursor-pointer `}>
        <NextLink href={"/studio/volunteer"}> Volunteer</NextLink>
      </li>
    </>
  );
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className={` w-full rounded-sm px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-500 bg-slate-50/75 ${sticky ? " bg-slate-200" : ""} `}>
        <div className=" flex justify-between items-center h-16 ">
          <EasterEggProvider>
            <Navbar_ProfilePic subtitle={checkPath ? "STUDIO" : "Web Portfolio"} />
          </EasterEggProvider>
          <div>
            <ul className="hidden md:flex flex-row gap-x-8  text-gray-900">{checkPath ? navList2 : navList}</ul>
            <div className="md:hidden active:scale-95" onClick={() => setMenu(!menu)}>
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile */}
        {menu && (
          <div data-aos-offset="-100" data-aos="fade-left" data-aos-duration="500" className={`md:hidden h-screen px-2 py-4 absolute right-0 bg-slate-50 z-50 ${sticky ? "bg-slate-200" : ""} transition-all duration-500 `}>
            <ul className=" flex flex-col  md:font-semibold font-medium md:text-xl text-sm space-y-3">{checkPath ? navList2 : navList}</ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar_Box;
