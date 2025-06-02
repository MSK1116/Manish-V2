import { pixelateImageToBase64 } from "@/lib/pixelate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Studio_gallery4 = async ({ images }) => {
  const pixelatedImg1 = await pixelateImageToBase64("./public/studio/clipart/vintageLens.jpg");
  return (
    <>
      <div className=" w-full overflow-hidden p-8 font-lora space-y-5">
        <h2 className=" text-xl font-medium text-center md:text-left">In the details, in the patterns, in the randomness that feels just right</h2>
        <h3 className=" text-center md:text-left">Here are some of my favorites. Moments I keep coming back to...</h3>
        <div className="[column-fill:_balance] group h-full md:columns-5 columns-2 space-y-5 ">
          {images.slice(1, Math.min(16, images.length)).map((images, index) => {
            if (index == 2) {
              return null;
            }
            return (
              <div key={index} className="font-radio group/galleryDes hover:-translate-y-0.5 active:scale-95 cursor-pointer overflow-hidden transition-all duration-500 ">
                <Link href={`/studio/gallery/view/${images.id}`} className=" relative">
                  <Image
                    width={800}
                    height={1100}
                    className="w-full h-auto object-cover rounded-md "
                    blurDataURL={images.base64}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    src={`/studio/${images.link_low}`}
                    alt={images.description}></Image>
                  <div className=" h-fit px-3 md:translate-y-20 md:group-hover/galleryDes:translate-y-0 transition-all duration-500 absolute w-full bottom-0 text-sm text-nowrap truncate bg-gray-200/75">{images.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-full md:h-[80vh] h-[70vh] overflow-hidden font-lora">
        <div className=" size-full relative">
          <Image className=" object-cover" src={"/studio/clipart/vintageLens.jpg"} placeholder="blur" blurDataURL={pixelatedImg1} alt="Vintage lens photo" fill={true}></Image>
          <div className=" inset-0 p-8 absolute flex flex-col space-y-5 md:items-end items-center justify-end md:justify-start md:bg-gradient-to-l bg-gradient-to-t md:from-gray-600/50 from-gray-600/75 to-gray-700/10">
            <h1 data-aos="fade-up" className=" text-2xl font-semibold mt-10 text-center md:text-left">
              If something here spoke to you — I’d love to hear from you.
            </h1>
            <div className=" flex flex-col md:flex-row w-fit md:gap-x-6 gap-3">
              <Link href={"/studio/gallery"} data-aos="zoom-in-up" className=" group/btn select-none active:scale-95 overflow-hidden w-44 px-4 py-2  cursor-pointer flex items-center justify-center relative mx-auto  bg-gray-300 space-x-2">
                <div className=" absolute inset-0 p-1 w-fit flex items-center justify-center md:-translate-x-16 md:group-hover/btn:translate-x-0 transition-all duration-300 ">
                  <IoIosArrowDropright className=" md:size-6 size-5" />
                </div>
                <div className=""> Reach out</div>
              </Link>
              <div data-aos="zoom-in" className=" justify-center items-center flex">
                Or
              </div>
              <Link href={"/studio/gallery"} data-aos="zoom-in-up" className=" group/btn select-none active:scale-95 overflow-hidden w-52 px-4 py-2  cursor-pointer flex items-center justify-center relative mx-auto  bg-gray-300 space-x-2">
                <div className=" absolute inset-0 p-1 w-fit flex items-center justify-center md:-translate-x-16 md:group-hover/btn:translate-x-0 transition-all duration-300 ">
                  <IoIosArrowDropright className=" size-5 md:size-6" />
                </div>
                <div>Volunteer with me</div>
              </Link>
            </div>
            <h2 data-aos="fade-up" className=" text-medium tracking-wider text-center md:text-right">
              and help bring more quiet beauty into the world.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio_gallery4;
