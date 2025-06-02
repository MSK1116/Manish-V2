import Image from "next/image";
import React from "react";

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
              <div key={index} className="relative font-radio group/galleryDes hover:-translate-y-0.5 active:scale-95 cursor-pointer overflow-hidden   transition-all duration-500 ">
                <Image width={800} height={1100} className="w-full h-auto object-cover rounded-md " sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" src={`/studio/${images.link_low}`} alt={images.description}></Image>
                <div className=" h-fit px-3 translate-y-20 group-hover/galleryDes:translate-y-0 transition-all duration-500 absolute w-full bottom-0  bg-gray-200/75">{images.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Studio_gallery4;
