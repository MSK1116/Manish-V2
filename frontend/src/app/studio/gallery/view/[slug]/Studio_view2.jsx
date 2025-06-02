import React from "react";
import Studio_deviceMockup from "./Studio_deviceMockup";
import Studio_Image_detail from "./Studio_Image_details";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Studio_clipboard from "./Studio_clipboard";
const Studio_view2 = ({ image }) => {
  return (
    <>
      <div className=" flex md:flex-row flex-col max-w-screen-2xl w-full overflow-hidden p-8 font-lora">
        <div className=" md:ml-12 md:w-[60%] w-full  flex flex-col space-y-4">
          <h3 className=" text-xl font-medium tracking-widest">Need for your wallpaper?</h3>
          <h3 className=" mb-2 text-left  ">Test the vibe before you commit. From home screen to lock screen — preview the look, feel the mood.</h3>
          <div className=" md:pl-24 flex w-fit relative space-x-5 md:space-x-7">
            <Studio_deviceMockup image={image} />
          </div>
        </div>
        <div className=" md:w-[40%] md:mt-0 mt-5 w-full flex flex-col space-y-2 items-center  justify-end">
          <div className=" rounded-lg border border-gray-100   py-3 shadow-sm">
            <Studio_Image_detail imageData={image} />
          </div>
          <div className=" flex w-fit items-center space-x-4 mt-4">
            <a href={`/studio/${image.link}`} download={image.title + " by Studio | Manish Singh Mahato"}>
              <button className=" overflow-hidden bg-gray-300  px-3 py-2 rounded-md group/download-btn  relative" type="button">
                <div className=" justify-center size-full">
                  <h4 className=" group-hover/download-btn:translate-x-40 text-sm transition-all duration-700">Download</h4>
                  <div className=" -translate-x-32 group-hover/download-btn:translate-x-0 absolute flex inset-0  items-center justify-center z-10 transition-all duration-500">⬇️</div>
                </div>
              </button>
            </a>
            <a>
              <FaFacebook className="size-7 text-[#3B5998]" />
            </a>
            <a>
              <FaWhatsapp className="size-7 text-[#128C7E]" />
            </a>
            <div>
              <Studio_clipboard link={image.link} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio_view2;
