import React from "react";
import Image from "next/image";
import { FaLinkedin, FaNodeJs } from "react-icons/fa";
import { FaSquareWhatsapp, FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb, SiExpress, SiVite, SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { Meteors } from "@/components/Meteors";
import { FlipWords } from "@/components/FlipWords";

const Home_banner = () => {
  return (
    <>
      <div data-aos-duration="700" id="Home" className="w-full overflow-hidden px-4 md:px-20 mt-20 md:h-screen xl:h-[80vh] h-full pb-3">
        <div className="flex relative  flex-col  md:flex-row">
          <Meteors />
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <h1 data-aos="fade-down" data-aos-duration="700" className="text-xl">
              Welcome to my small world!
            </h1>
            <div data-aos="fade-right" data-aos-offset="-20" data-aos-duration="700" className="flex gap-x-1 text-2xl  md:text-4xl">
              <h2>
                Hello, i'm a <span className=" text-blue-800 font-bold">{<FlipWords words={["Student.", "Devloper.", "Social Activist.", "Photographer."]} />}</span>
              </h2>
            </div>
            <br />
            <h3 data-aos="zoom-in-up" data-aos-duration="700" data-aos-offset="-20" className="text-sm md:text-md text-justify">
              I channel my passion and curiosity into impactful projects that bridge education, technology, and social action. Whether as a student, web developer, social activist, or photographer, I am committed to exploring new avenues for creating
              positive change and contributing to the welfare of society.{" "}
            </h3>
            <br />
            {/* social media icon */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between">
              <div className=" gap-y-2 space-y-2 md:space-y-1 ">
                <h4 data-aos="fade-right" data-aos-duration="700" className="font-bold md:text-left text-center">
                  Reach me on:
                </h4>
                <ul className="flex space-x-5">
                  <li>
                    <a aria-label="click to visit my facebook account" target="blank" href="https://www.facebook.com/manu0519/">
                      <FaFacebook id="facebook" data-aos="fade-right" data-aos-delay="300" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                    </a>
                  </li>
                  <li>
                    <a aria-label="click to visit my linkedin account" target="blank" href="https://www.linkedin.com/in/manu0519/">
                      <FaLinkedin id="linkedin" data-aos="fade-right" data-aos-delay="200" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />{" "}
                    </a>
                  </li>
                  <li>
                    <a aria-label="click to visit my instagram account" target="blank" href="https://www.instagram.com/manishsingh0519/">
                      <FaSquareInstagram id="insta" data-aos="fade-right" data-aos-delay="100" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                    </a>
                  </li>
                  <li>
                    <a aria-label="click to visit my whatsapp account" target="blank" href="https://wa.me/9779812055778?text=I%20visited%20your%20website%20and%20looking%20to%20get%20connected">
                      <FaSquareWhatsapp id="whatsapp" data-aos="fade-right" data-aos-delay="50" className="text-2xl cursor-pointer hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" gap-y-2 space-y-2 md:space-y-1">
                <h4 data-aos="fade-right" data-aos-duration="700" className="font-bold md:text-left text-center">
                  Favorite tools:
                </h4>
                <ul className="flex space-x-5">
                  <li>
                    <SiVite data-aos="fade-right" data-aos-delay="300" className="text-2xl  hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                  <li>
                    <RiNextjsLine data-aos="fade-right" data-aos-delay="200" className="text-2xl  hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                  <li>
                    <IoLogoReact data-aos="fade-right" data-aos-delay="100" className="text-2xl  hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                  <li>
                    <SiTailwindcss data-aos="fade-right" data-aos-delay="50" className="text-2xl  hover:text-black transition-all duration-300 hover:scale-105 rounded-full" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out-left" data-aos-duration="1000" className="md:w-1/2 md:ml-48 mt-10 md:mt-16 order-1 md:order-2 flex items-center justify-center ">
            <div className="relative  w-[350px] h-[350px] md:w-[450px] md:h-[450px] ">
              <Image className=" object-cover rounded-full " src={"/MSK.jpg"} alt="Manish's profile pic" fill={true}></Image>
            </div>
          </div>
        </div>
      </div>
      <span data-aos="zoom-in" data-aos-duration="500" className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
      </span>
    </>
  );
};

export default Home_banner;
