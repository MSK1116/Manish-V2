"use client";
import React, { useMemo, useState } from "react";
import Svg_splash from "@/SVG/Svg_splash";
import { motion, AnimatePresence } from "motion/react";
import { IoOpenOutline } from "react-icons/io5";
import { LuMousePointerClick } from "react-icons/lu";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const StudioGallery = ({ images }) => {
  const imageList = useMemo(() => {
    return [...images].sort(() => Math.random() - 0.5);
  }, [images]);

  const [active, setActive] = useState(0);
  const [click, setClicked] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % imageList.length);
  };
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + imageList.length) % imageList.length);
  };
  const isActive = (index) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  const handleImageClick = (index) => {
    setClicked(index);
  };
  return (
    <>
      <section className="  w-full  h-auto overflow-hidden">
        <div className=" relative md:h-screen h-[80vh] w-full  overflow-hidden">
          <div className=" absolute size-[89%]  -bottom-36 md:-right-[37%] -right-[30%]  z-20  ">
            <Svg_splash />
          </div>
          <div className=" absolute size-fit  min-w-fit z-20 bottom-1 right-7  ">
            <div className="mx-auto  font-sans antialiased ">
              <div className="relative grid grid-cols-1 md:gap-5 gap-3 md:min-w-36 ">
                <div>
                  <div className="relative md:h-52 h-32 w-full">
                    <AnimatePresence>
                      {imageList.map((testimonial, index) => (
                        <motion.div
                          key={testimonial.id}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                            z: -100,
                            rotate: randomRotateY(),
                          }}
                          animate={{
                            opacity: isActive(index) ? 1 : 0.7,
                            scale: isActive(index) ? 1 : 0.95,
                            z: isActive(index) ? 0 : -100,
                            rotate: isActive(index) ? 0 : randomRotateY(),
                            zIndex: isActive(index) ? 40 : imageList.length + 2 - index,
                            y: isActive(index) ? [0, -80, 0] : 0,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.9,
                            z: 100,
                            rotate: randomRotateY(),
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 origin-bottom ">
                          <div onClick={() => handleImageClick(index)} className="relative h-full  w-full  cursor-pointer">
                            <Image
                              className=" object-cover size-full md:rounded-3xl rounded-xl"
                              fill={true}
                              blurDataURL={testimonial.base64}
                              placeholder="blur"
                              draggable={true}
                              src={`/studio/${testimonial.link_low}`}
                              alt={testimonial.metaDescription}></Image>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="flex flex-col  justify-between items-center ">
                  <div className="flex gap-4  ">
                    <button type="button" onClick={handlePrev} className="group/button p-1  flex md:size-7 size-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                      <FaChevronCircleLeft className="size-full text-black active:-translate-x-1 transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                    </button>
                    <button type="button" onClick={handleNext} className="group/button p-1 flex md:size-7 size-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                      <FaChevronCircleRight className="size-full text-black active:translate-x-1 transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence className={"relative"} mode="wait">
            <motion.div
              key={click}
              initial={{ opacity: 0, scale: 0.5, originX: 1, originY: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, originX: 0.5, originY: 0.5 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="size-full absolute top-0 left-0">
              <Image className="size-full object-cover" src={`/studio/${imageList[click].link}`} blurDataURL={imageList[click].base64} placeholder="blur" alt={imageList[click].metaDescription} fill={true}></Image>
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}>
                <div className=" group/view-btn absolute cursor-pointer flex bottom-5 space-x-2 h-7 pr-4 text-sm w-fit bg-slate-300/80 rounded-r-md p-1 text-center">
                  <span> {imageList[click].title}</span>
                  <Link href={`/studio/gallery/view/${imageList[click].slug}`} className=" overflow-hidden   relative" aria-label={`Click to view the image of ${imageList[click].metaDescription}`}>
                    <div className=" justify-center   size-full">
                      <div className=" group-hover/view-btn:translate-x-40  transition-all duration-700">
                        <LuMousePointerClick className=" size-5" />
                      </div>
                      <div className=" -translate-x-20 group-hover/view-btn:translate-x-0 absolute inset-0 z-10 transition-all duration-500">
                        <IoOpenOutline className=" size-5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default StudioGallery;
