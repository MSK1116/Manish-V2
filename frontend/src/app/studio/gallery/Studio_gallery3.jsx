import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Studio_gallery4 = ({ images }) => {
  return (
    <>
      <div className=" w-full overflow-hidden p-8 font-lora space-y-5">
        <h2 className=" text-xl font-medium">In the details, in the patterns, in the randomness that feels just right</h2>
        <h3>Here are some of my favorites. Moments I keep coming back to...</h3>
        <div className="[column-fill:_balance] group h-full md:columns-5 columns-2 space-y-5 ">
          {images.slice(1, Math.min(16, images.length)).map((images, index) => {
            if (index == 2) {
              return null;
            }
            return (
              <div key={index} className="font-radio group/galleryDes hover:-translate-y-0.5 active:scale-95 cursor-pointer overflow-hidden transition-all duration-500 ">
                <Link href={`/studio/gallery/view/${images.id}`} className=" relative">
                  <Image width={800} height={1100} className="w-full h-auto object-cover rounded-md " sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" src={`/studio/${images.link_low}`} alt={images.description}></Image>
                  <div className=" h-fit px-3 translate-y-20 group-hover/galleryDes:translate-y-0 transition-all duration-500 absolute w-full bottom-0  bg-gray-200/75">{images.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-full h-[80vh] overflow-hidden font-lora">
        <div className=" size-full relative">
          <Image className=" object-cover" src={"/studio/clipart/vintageLens.jpg"} alt="Vintage lens photo" fill={true}></Image>
          <div className=" inset-0 p-8 absolute flex flex-col space-y-5 items-end bg-gradient-to-l from-gray-600/50 to-gray-700/10">
            <h1 className=" text-2xl font-semibold mt-10">If something here spoke to you — I’d love to hear from you.</h1>
            <div className=" flex flex-row w-fit space-x-5">
              <Link href={"/studio/gallery"} data-aos="zoom-in-up" className=" mr-5 group/btn select-none active:scale-95 overflow-hidden w-44 px-4 py-2  cursor-pointer flex items-center justify-center relative mx-auto  bg-gray-300 space-x-2">
                <div className=" absolute inset-0 p-1 w-fit flex items-center justify-center -translate-x-16 group-hover/btn:translate-x-0 transition-all duration-300 ">
                  <IoIosArrowDropright className=" size-6" />
                </div>
                <div> Reach out</div>
              </Link>
              <span className=" items-center flex">Or</span>
              <Link href={"/studio/gallery"} data-aos="zoom-in-up" className="ml-5 group/btn select-none active:scale-95 overflow-hidden w-52 px-4 py-2  cursor-pointer flex items-center justify-center relative mx-auto  bg-gray-300 space-x-2">
                <div className=" absolute inset-0 p-1 w-fit flex items-center justify-center -translate-x-16 group-hover/btn:translate-x-0 transition-all duration-300 ">
                  <IoIosArrowDropright className=" size-6" />
                </div>
                <div>Volunteer with me</div>
              </Link>
            </div>
            <h2 className=" text-medium tracking-wider ">and help bring more quiet beauty into the world.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio_gallery4;
