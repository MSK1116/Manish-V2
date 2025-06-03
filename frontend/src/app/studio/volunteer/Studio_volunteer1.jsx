import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Studio_volunteer1 = () => {
  return (
    <>
      <div className=" relative md:h-screen md:flex font-lora  items-center md:p-8 p-3 w-full bg-gray-50">
        <div className="p-4 md:w-1/2 h-auto mt-20 md:mt-1  max-h-fit ">
          <h1 data-aos="fade-down" className="text-xl text-gray-800 font-thin text-center cursor-default">
            <span className=" hover:animate-pulse   font-bold text-blue-700 tracking-wide">Contributing</span>, <span className=" tracking-wide hover:animate-pulse font-bold text-red-600">donating</span>, and{" "}
            <span className=" tracking-wide hover:animate-pulse font-bold text-yellow-500 ">collaborating</span> are like threads in a communal tapestry—each person adds their unique color, giving selflessly, guiding the pattern, and weaving together
            a masterpiece that no one could create alone.
          </h1>
        </div>
        <div className=" overflow-hidden md:relative md:w-1/2 w-full h-full ">
          <Image alt="Image of two people sharing camera and teaching each other" className=" object-cover hidden md:block " data-aos="fade-left" data-aos-duration="1000" src="/studio/clipart/Mcamera4.png" fill={true}></Image>
          <div className=" md:absolute inset-0 flex justify-center items-center  size-full md:p-20 p-5">
            <form
              encType="multipart/form-data"
              action="https://formsubmit.co/contact@msmahato.com.np"
              method="POST"
              className="md:backdrop-blur-xs bg-gray-50 md:bg-transparent  md:p-5 p-2 flex flex-col md:justify-around space-y-5 md:space-y-0 rounded-b-md size-full border border-gray-100">
              <input type="hidden" name="_subject" value="Volunteer form"></input>
              <input type="hidden" name="_autoresponse" value="Your message has been received, Someone will be in touch soon on behalf of Manish"></input>
              <input type="hidden" name="_template" value="table"></input>
              <h2 className=" font-medium text-center bg-gray-50/75 w-fit h-fit p-1 rounded-md relative mx-auto">Submit via this form</h2>
              <div className=" bg-gray-50/75 relative  rounded-md  ">
                <span className=" absolute w-fit -mt-3 ml-3 px-1 bg-gray-200 rounded-md h-fit">Full name</span>{" "}
                <input type="text" name="Fullname" className="   w-full border border-gray-200 p-3 outline-none focus:border-blue-600 focus:border rounded-md "></input>
              </div>
              <div className=" bg-gray-50/75 relative  rounded-md ">
                <span className=" absolute w-fit -mt-3 ml-3 px-1 bg-gray-200 rounded-md h-fit">Email</span>{" "}
                <input type="email" name="email" className="   w-full border border-gray-200 p-3 outline-none focus:border-blue-600 focus:border rounded-md "></input>
              </div>
              <div className=" bg-gray-50/75 relative  rounded-md ">
                <span className=" absolute w-fit -mt-3 ml-3 px-1 bg-gray-200 rounded-md h-fit">Address</span>{" "}
                <input name="Address" type="text" className="    w-full border border-gray-200 p-3 outline-none focus:border-blue-600 focus:border rounded-md "></input>
              </div>
              <div className=" bg-gray-50/75 relative  rounded-md ">
                <span className=" absolute w-fit -mt-3 ml-3 px-1 bg-gray-200 rounded-md h-fit">Photo</span>{" "}
                <input
                  id="file"
                  accept="image/png, image/jpeg"
                  name="attachment"
                  type="file"
                  className=" file:rounded-md file:px-3 file:py-1 file:bg-blue-600   w-full border border-gray-200 p-3 outline-none focus:border-blue-600 focus:border rounded-md "></input>
              </div>
              <button
                aria-label="Click to submit the form"
                type="button"
                data-aos="zoom-in-up"
                className=" group/btn select-none active:scale-95 overflow-hidden w-40 px-4 py-2  cursor-pointer flex items-center justify-center relative  mx-auto bg-gray-300">
                <div className=" absolute inset-0 p-1 w-fit flex items-center justify-center -translate-x-16 group-hover/btn:translate-x-0 transition-all duration-300 ">
                  <IoIosArrowDropright className=" size-6" />
                </div>
                <div> Submit</div>
              </button>
            </form>
          </div>
        </div>
        <div className=" overflow-hidden size-fit absolute bottom-0 md:left-0 -left-10">
          <img data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-10" alt="Image of flower" src="/studio/clipart/Plant1.png" className="md:w-48 w-40"></img>
        </div>
      </div>
    </>
  );
};

export default Studio_volunteer1;
