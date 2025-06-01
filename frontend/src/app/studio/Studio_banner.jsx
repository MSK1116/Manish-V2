"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import Image from "next/image";

const Studio_banner = ({ pixelImg }) => {
  const { pixelatedImg1, pixelatedImg2 } = pixelImg;
  return (
    <Parallax pages={2} className="bg-gray-50 no-scrollbar">
      <ParallaxLayer offset={0} speed={0.2}>
        <div className="relative h-screen w-full">
          <Image blurDataURL={pixelatedImg1} src="/studio/IMG_5547.jpg" alt="a mountain" placeholder="blur" fill className="object-cover" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.7}>
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-8xl text-blue-700 font-extrabold">STUDIO</h1>
        </div>
      </ParallaxLayer>
      {/* Second image at offset 1 */}
      <ParallaxLayer offset={1} speed={1.5}>
        <div className="relative h-screen w-full">
          <Image blurDataURL={pixelatedImg2} src="/studio/IMG_0779.jpg" alt="butterfly" placeholder="blur" width={2700} height={1565} className="object-cover w-full h-full" />
        </div>
      </ParallaxLayer>

      {/* Text and Button on second layer */}
      <ParallaxLayer offset={1} speed={0.1}>
        <div className="h-screen w-full flex flex-col justify-center items-center space-y-10">
          <h2 className="text-4xl text-yellow-500 font-extrabold text-center">WHERE I CAPTURE WORLD</h2>
          <button onClick={() => push("/gallery")} className="text-blue-700 px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 font-extrabold bg-gray-100">
            GALLERY
          </button>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Studio_banner;
