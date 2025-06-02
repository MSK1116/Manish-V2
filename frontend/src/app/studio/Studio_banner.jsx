"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

import VerticalMarquee from "./VerticalMarquee";

const Studio_banner = ({ pixelImg }) => {
  const { pixelatedImg1, pixelatedImg2 } = pixelImg;
  return (
    <>
      <main className={` w-full overflow-hidden md:min-h-screen h-full md:h-full `}>
        <div className="relative h-screen w-full">
          <Image data-aos="fade-down" blurDataURL={pixelatedImg1} src="/studio/IMG_5547.jpg" alt="a mountain" placeholder="blur" fill className="object-cover" />
          <div data-aos="zoom-in" data-aos-duration="900" data-aos-delay="100" className=" absolute inset-0  flex items-center justify-center bg-transparent text-blue-700 text-8xl font-bold uppercase select-none">
            Studio
          </div>
        </div>
        <div className=" flex  flex-col md:flex-row md:pl-8 md:pt-8 p-2">
          <div className=" md:w-1/2  w-full">
            <p data-aos="fade-right" data-aos-duration="700" className="text-shadow-sm md:text-8xl text-5xl  select-none font-medium  md:text-left text-center font-lora">
              Moments fade, but memories don’t have to.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="700" className="md:w-1/2 w-full h-[45vh] md:h-auto md:px-8 md:py-0 py-2 flex justify-end md:mr-10">
            <VerticalMarquee />
          </div>
        </div>
      </main>
      <span className="flex items-center my-10">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
      </span>
      <section className=" w-full h-full overflow-hidden md:p-8">
        <div data-aos="fade-down" className=" px-8 text-center text-3xl font-lora font-medium mb-3">
          Exploring the world through quiet moments, textures, and the poetry of light and shadow.
        </div>
        <div className=" flex flex-col md:flex-row md:h-[80vh] overflow-hidden">
          <div className=" md:w-1/2 w-fit h-full px-8 py-4 space-y-10 font-lora font-medium order-2 md:order-1">
            <p data-aos="fade-right" className="  mt-10 md:text-left text-center ">
              I’m a hobbyist photographer with a deep appreciation for nature’s simplicity and the abstract patterns hidden in plain sight. Through my lens, I try to capture the feelings we often can’t describe — a breeze, a stillness, a shift in
              light.
            </p>
            <p data-aos="fade-right" className=" tracking-wider md:text-left text-center ">
              Photography, for me, isn’t about perfection. It’s about presence.
            </p>
            <Link href={"/studio/gallery"} data-aos="zoom-in-up" className=" group/btn select-none active:scale-95 overflow-hidden w-44 px-4 py-2  cursor-pointer flex items-center justify-center relative mx-auto  bg-gray-300 space-x-2">
              <div className=" absolute inset-0 p-1 w-fit flex items-center justify-center -translate-x-16 group-hover/btn:translate-x-0 transition-all duration-300 ">
                <IoIosArrowDropright className=" size-6" />
              </div>
              <div> Explore Gallery</div>
            </Link>
          </div>
          <div className="relative md:w-1/2 w-full md:h-full h-[50vh]   md:order-2 order-1 ">
            <Image placeholder="blur" blurDataURL={pixelatedImg2} data-aos="zoom-in-left" className=" rotate-12 border-2 border-amber-400 object-contain  rounded-l-md " fill={true} src={"/studio/ManihsWithCamera.jpg"} alt="ManihsWithCamera"></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio_banner;
