import React from "react";
import Image from "next/image";
import Award_cat from "./Award_cat";
import { EasterEggProvider } from "@/components/EasterEggContext";
import { pixelateImageToBase64 } from "@/lib/pixelate";
import Awards_swiper from "@/Award/Awards_swiper";

const Award = async () => {
  const pixelatedOfManish = await pixelateImageToBase64("./public//IMG_6108.jpg");
  return (
    <>
      <section name="Award" className="relative my-10 md:py-20 md:pt-16 w-full px-4  overflow-hidden ">
        <div className="container mx-auto">
          <div className=" px-4 md:px-20">
            <h4 data-aos="fade-down" className="text-3xl font-semibold text-red-600 capitalize lg:text-4xl ">
              Awards & Participation
            </h4>
            <div className="mt-2">
              <span data-aos="fade-left" className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
              <span data-aos="fade-left" data-aos-delay="100" className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-2 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-5  ">
            <div data-aos="zoom-in-up" data-aos-duration="1000" className=" w-screen md:w-1/3 px-4 mr-auto ml-auto">
              <div className=" flex flex-col break-words bg-slate-50  w-full mb-6 shadow-lg rounded-lg ">
                <Image placeholder="blur" blurDataURL={pixelatedOfManish} className=" object-cover rounded-t-md" width={1280} height={1920} src={"/IMG_6108.jpg"} alt="Manish's NASA SPACE APP"></Image>
                <blockquote data-aos-delay="700" className="relative p-8 mb-4  bg-slate-50 ">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-[95px] z-10 -top-[94px] ">
                    <polygon points="-30,95 583,95 583,65" className=" text-blue-700 fill-current "></polygon>
                  </svg>
                  <h5 data-aos="zoom-in-up" data-aos-offset="-10" className="text-xl font-bold ">
                    Things that keeps me motivated
                  </h5>
                  <h6 data-aos="zoom-in-up" data-aos-offset="-10" data-aos-duration="1000" className="text-md font-light mt-2 ">
                    My academic journey has been punctuated by remarkable achievements and active participation in prestigious events that showcase my dedication to excellence. <span className=" text-red-600 font-semibold">Some of them are :</span>
                  </h6>
                </blockquote>
                <EasterEggProvider>
                  <Award_cat />
                </EasterEggProvider>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4 group ">
              <Awards_swiper />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
