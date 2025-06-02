import Image from "next/image";
import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import { LuMousePointerClick } from "react-icons/lu";

const Studio_gallery2 = ({ images }) => {
  const arrangedImageList = [...images];
  return (
    <>
      <main className=" w-full overflow-hidden font-lora p-8">
        <div>
          <h1 className=" text-2xl font-medium text-center md:text-left">Welcome to gallery</h1>
          <h2 className=" text-center md:text-left"> a quiet space where nature, light, and abstraction meet. Every image here is a pause, a breath, a way of seeing the world beyond words.</h2>
        </div>
        <div className="h-[80vh] mt-5">
          <div className=" flex md:flex-row h-full flex-col py-4 ">
            <div className="md:w-[70%] w-full overflow-hidden h-full relative ">
              <Image className=" rounded-md object-cover" placeholder="blur" fill={true} blurDataURL={arrangedImageList[0].base64} src={`/studio/${arrangedImageList[0].link}`} alt={arrangedImageList[0].metaDescription}></Image>
              <div data-aos="fade-right" data-aos-offset="-20" className=" group/view-btn absolute cursor-pointer flex bottom-5 space-x-2 h-7 pr-4 text-sm w-fit bg-slate-300/80 rounded-r-md p-1 text-center">
                <span> {arrangedImageList[0].title}</span>
                <button className=" overflow-hidden   relative" type="button">
                  <div className=" justify-center   size-full">
                    <div className=" group-hover/view-btn:translate-x-40  transition-all duration-700">
                      <LuMousePointerClick className=" size-5" />
                    </div>
                    <div className=" -translate-x-20 group-hover/view-btn:translate-x-0 absolute inset-0 z-10 transition-all duration-500">
                      <IoOpenOutline className=" size-5" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className=" md:w-[30%] w-full md:mt-0 mt-4 max-h-full flex justify-center items-center  px-2">
              <div className="  [column-fill:_balance] columns-2 space-y-5  ">
                {arrangedImageList.slice(1, 5).map((images, index) => {
                  return (
                    <div key={index} className="relative font-radio group/galleryDes hover:-translate-y-0.5 active:scale-95 cursor-pointer overflow-hidden   transition-all duration-500 ">
                      <Image
                        width={800}
                        height={1100}
                        className="w-full h-auto object-cover rounded-md "
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        src={`/studio/${images.link_low}`}
                        blurDataURL={images.base64}
                        placeholder="blur"
                        alt={images.metaDescription}></Image>
                      <div className=" h-fit px-3 md:translate-y-20 md:group-hover/galleryDes:translate-y-0 transition-all duration-500 absolute w-full bottom-0 text-sm text-nowrap truncate bg-gray-200/75">{images.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Studio_gallery2;
