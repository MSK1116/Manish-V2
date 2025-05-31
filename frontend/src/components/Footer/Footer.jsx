import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import Footer_typed from "./Footer_typed";
import Footer_scroll from "./Footer_scroll";
import SystemInfo from "../SystemInfo";

const Footer = () => {
  // const { lastUpdated, connectionInfo } = SystemInfo();
  return (
    <>
      <footer data-aos="fade-up" className=" max-w-screen-2xl w-full h-fit p-8  bg-gradient-to-b from-slate-100 to-slate-200 ">
        <div data-aos="fade-up" data-aos-duration="1000" className="relative h-full  w-full ">
          <Footer_scroll />
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div data-aos="zoom-in" data-aos-duration="1500" className="flex justify-center   text-teal-600 lg:justify-start">
                <FaHandHoldingHeart className=" size-28" />
              </div>
              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                <Footer_typed />
                <br></br> <span className="text-right"> – Edmund Burke</span>
              </p>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-offset="-50" className="text-sm mt-12 md:text-left text-center text-gray-500">
                Other websites:
              </p>
              <ul className="md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li data-aos="fade-up" data-aos-offset="-50" data-aos-delay="200">
                  <a aria-label="click to visit Think Big's website" target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://thinkbig.org.np/">
                    Think Big
                  </a>
                </li>

                <li data-aos="fade-up" data-aos-offset="-50" data-aos-delay="300">
                  <a aria-label="Click to visit Mold Skill" target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://www.msmahato.com.np">
                    Mold Skill
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-offset="-50" data-aos-delay="100">
                  <a aria-label="Click to visit website of GSS" target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://gamvirss.edu.np/">
                    Gamvir Samudra Setu School
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-offset="-50" data-aos-delay="400">
                  <a aria-label="Click to visit my Studio" target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://studio.manishmahato.info.np">
                    Studio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row  mt-10 space-x-3 justify-center md:justify-end ">
            <div className=" flex flex-col">
              <div className="text-sm flex  items-center space-x-1 lg:text-right">
                <p className=""> Made with Next.js, and Laptop💻</p>
              </div>
              <SystemInfo />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
