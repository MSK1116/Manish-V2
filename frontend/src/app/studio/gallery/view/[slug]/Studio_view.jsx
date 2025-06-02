import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Studio_view = ({ image }) => {
  return (
    <>
      <main className=" p-8">
        <div className=" breadcrumbs overflow-hidden md:text-sm text-xs mt-14">
          <ul>
            <li>
              <Link href={"/studio"} className="hover:underline capitalize">
                Studio
              </Link>
            </li>
            <li>
              <Link href={"/studio/gallery"} className="hover:underline capitalize">
                Gallery
              </Link>
            </li>
            <li className=" text-gray-500">View</li>
            <li className=" max-w-full text-nowrap truncate text-gray-500">{image.title}</li>
          </ul>
        </div>
        <div className=" flex md:flex-row flex-col rounded-md bg-gray-100 overflow-hidden md:h-[80vh] h-full px-5 md:px-10 md:py-8 py-0 font-lora ">
          <figure className=" md:w-[60%] w-full h-[65vh]  md:h-full flex justify-center relative">
            <Image className=" object-contain " src={`/studio/${image.link}`} fill={true} alt={image.description}></Image>
          </figure>

          <article className=" md:max-w-[40%] w-full md:p-4 md:py-4 py-2">
            <h1 className=" md:text-2xl text-xl uppercase font-semibold text-gray-800 text-center md:text-left">{image.title}</h1>
            <h2 className=" flex items-center justify-center md:justify-start text-sm text-gray-500 ">
              <span>
                <FaLocationDot className=" text-red-600" />
              </span>
              {image.location}
            </h2>

            <blockquote className=" mt-10 space-y-5">
              <h3 className=" tracking-wide md:text-left text-center  ">{image.description}</h3>
              <h4 className=" text-gray-700 tracking-tight md:text-left text-center ">
                <span>🤖What robot says?</span>
                <br></br>
                {image.description}
              </h4>
            </blockquote>
          </article>
        </div>
      </main>
    </>
  );
};

export default Studio_view;
