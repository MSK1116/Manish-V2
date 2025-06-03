import React from "react";
import Studio_deviceMockup from "./Studio_deviceMockup";
import Studio_Image_detail from "./Studio_Image_details";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Studio_clipboard from "./Studio_clipboard";
const Studio_view2 = ({ image }) => {
  return (
    <>
      <section className=" flex md:flex-row flex-col max-w-screen-2xl w-full overflow-hidden p-8 font-lora">
        <div className=" md:ml-12 md:w-[60%] w-full  flex flex-col space-y-4">
          <h4 className=" text-xl font-medium tracking-widest md:text-left text-center ">Need for your wallpaper?</h4>
          <h4 className=" mb-2 md:text-left text-center  ">Test the vibe before you commit. From home screen to lock screen — preview the look, feel the mood.</h4>
          <div className=" md:pl-24 flex w-fit md:mt-0 mt-5 relative space-x-5 md:space-x-7">
            <Studio_deviceMockup image={image} />
          </div>
        </div>
        <div className=" md:w-[40%] md:mt-0 mt-10  w-full flex flex-col space-y-2 items-center  justify-end">
          <div className=" rounded-lg border border-gray-100   py-3 shadow-sm">
            <Studio_Image_detail imageData={image} />
          </div>
          <div className=" flex w-fit items-center space-x-4 mt-4">
            <a aria-label="Click it to download the image in original high quality in your device" href={`/studio/${image.link}`} download={image.title + " by Studio | Manish Singh Mahato"}>
              <button className=" active:scale-95 overflow-hidden bg-gray-300  px-3 py-2 rounded-md group/download-btn  relative" type="button">
                <div className=" justify-center size-full">
                  <h4 className=" group-hover/download-btn:translate-x-40 text-sm transition-all duration-700">Download</h4>
                  <div className=" -translate-x-32 group-hover/download-btn:translate-x-0 absolute flex inset-0  items-center justify-center z-10 transition-all duration-500">⬇️</div>
                </div>
              </button>
            </a>
            <a className=" active:scale-95" aria-label="Share this image via Facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.manishmahato.info.np/studio/view/${image.title}`}>
              <FaFacebook className="size-7 text-[#3B5998]" />
            </a>
            <a className=" active:scale-95" target="_blank" aria-label="Share and message this image via WhatsApp" href={`https://api.whatsapp.com/send?text=Check+this+out:+https://www.manishmahato.info.np/studio/view/${image.title}`}>
              <FaWhatsapp className="size-7 text-[#128C7E]" />
            </a>
            <div aria-label="Copy link of this image to clipboard">
              <Studio_clipboard link={image.link} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio_view2;
