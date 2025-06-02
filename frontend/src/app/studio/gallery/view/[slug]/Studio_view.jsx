import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Studio_view = ({ image }) => {
  return (
    <>
      <main className=" p-8">
        <div className=" breadcrumbs text-sm mt-14">
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
            <li className=" text-gray-500">{image.title}</li>
          </ul>
        </div>
        <div className=" flex md:flex-row flex-col rounded-md bg-gray-100 overflow-hidden md:h-[80vh] px-5 md:px-10 py-8 font-lora ">
          <figure className=" md:w-[60%] flex justify-center relative">
            <Image className=" object-contain" src={`/studio/${image.link}`} fill={true} alt={image.description}></Image>
          </figure>

          <article className=" md:max-w-[40%] w-full md:p-4 py-4">
            <h1 className=" text-2xl uppercase font-semibold text-gray-800">{image.title}</h1>
            <h2 className=" flex items-center text-sm text-gray-500 ">
              <span>
                <FaLocationDot className=" text-red-600" />
              </span>
              {image.location}
            </h2>

            <blockquote className=" mt-10 space-y-5">
              <h3 className=" tracking-wide ">{image.description}</h3>
              <h4 className=" text-gray-700 tracking-tight">
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
