import Image from "next/image";
import React from "react";

import { FaArrowCircleRight } from "react-icons/fa";

const ProjectsCard = ({ items }) => {
  return (
    <>
      <input type="checkbox" id={items.id} className="modal-toggle" />
      <div className="modal place-items-end md:justify-items-end md:place-items-center " role="dialog">
        <div className=" modal-box rounded-r-none  md:h-[90vh] bg-gradient-to-tl from-gray-50 to-gray-100  overflow-visible relative md:w-1/3 h-1/2 w-full">
          <h3 className="font-bold text-lg">{items.title}</h3>
          <div className="py-4 md:text-sm text-xs overflow-y-auto max-h-[80%]">
            {items.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
          <div className="absolute w-11/12 md:space-y-1 space-y-0 bottom-1 md:bottom-2">
            <span className="flex items-center">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
            </span>
            <p className="text-xs">Additional link:</p>
            {items.link1.map((data, index) => (
              <p key={index} className="text-xs font-bold underline text-ellipsis truncate text-blue-500">
                <a target="blank" href={data}>
                  {data}
                </a>
              </p>
            ))}
          </div>
          <div className="modal-action">
            <label htmlFor={items.id} className="bg-gray-100 cursor-pointer rounded-l-full outline-none p-[0.6rem] w-11 h-[6.5rem] absolute md:-left-11 left-[44%] md:rotate-0 rotate-90 md:top-56 -top-16">
              <FaArrowCircleRight className="animate-slide-bounce text-blue-500 w-full h-full" />
            </label>
          </div>
          {/* small card */}
          <div className="shadow-md hover:shadow-xl absolute w-56 md:w-64 motion-reduce:animate-bounce md:-left-[30rem] left-[18%] md:top-48 -top-72 rounded bg-white overflow-hidden cursor-default">
            <div className="grid grid-cols-2 h-28 md:h-32">
              <div className="h-28 relative md:h-32 border border-gray-100 overflow-hidden">
                <Image fill={true} className="object-cover object-center  hover:rotate-1 hover:scale-105 transition-all duration-300" src={`/proj/${items.img1}`} alt={" first image of" + items.title}></Image>
              </div>
              <div className="h-28 md:h-32 border border-gray-100 overflow-hidden">
                <div className="h-14 md:h-16 w-full relative">
                  <Image className="object-cover hover:rotate-1 hover:scale-105 transition-all duration-300 " src={`/proj/${items.img2}`} alt={" second image of" + items.title} fill={true} />
                </div>
                <div className="h-14 md:h-16 w-full relative">
                  <Image className="object-cover hover:rotate-1 hover:scale-105 transition-all duration-300 " src={`/proj/${items.img3}`} alt={" third image of" + items.title} fill={true} />
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="flex flex-col cursor-default space-y-3 md:flex justify-between">
                <div className="flex flex-row place-content-between">
                  <h3 data-aos="fade-up" className="font-medium">
                    {items.title}
                  </h3>
                  <span data-aos="fade-left" className="text-sm clamp text-gray-500">
                    {items.type}
                  </span>
                </div>
                <div>
                  <span data-aos="fade-up" data-aos-delay="100" className="text-xs line-clamp-2 md:line-clamp-3 text-gray-500">
                    {items.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <label htmlFor={items.id} className="modal-backdrop  md:bg-gray-900/60 bg-gray-900/80"></label>
      </div>

      {/* Card */}
      <label htmlFor={items.id} className="block cursor-pointer">
        <div name={items.title} className="w-full p-6 mx-auto active:scale-95 transition-all duration-150 ">
          <div data-aos="fade-up" data-aos-offset="50" className="shadow-md hover:shadow-xl rounded bg-white overflow-hidden cursor-pointer">
            <div className="grid grid-cols-2 h-64">
              <div className="h-64 relative border border-gray-100 overflow-hidden">
                <Image fill={true} className="object-cover object-center  hover:rotate-1 hover:scale-105 transition-all duration-300" src={`/proj/${items.img1}`} alt={" first image of" + items.title}></Image>
              </div>
              <div className="h-64  border border-gray-100 overflow-hidden">
                <div className=" relative h-32 w-full">
                  <Image className="object-cover hover:rotate-1 hover:scale-105 transition-all duration-300 " src={`/proj/${items.img2}`} alt={" second image of" + items.title} fill={true} />
                </div>
                <div className=" relative h-32 w-full">
                  <Image className="object-cover hover:rotate-1 hover:scale-105 transition-all duration-300 " src={`/proj/${items.img3}`} alt={" third image of" + items.title} fill={true} />
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex flex-col cursor-pointer space-y-3 md:flex justify-between">
                <div className="flex flex-row place-content-between">
                  <h3 data-aos="fade-up" className="font-medium">
                    {items.title}
                  </h3>
                  <span data-aos="fade-left" className="text-sm clamp text-gray-500">
                    {items.type}
                  </span>
                </div>
                <div>
                  <span data-aos="fade-up" data-aos-delay="100" className="text-sm line-clamp-2 md:line-clamp-3 text-gray-500">
                    {items.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default ProjectsCard;
