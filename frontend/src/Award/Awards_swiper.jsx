"use client";
import React, { useRef, useState } from "react";
import { GiPodiumSecond } from "react-icons/gi";
import { FaHandsBubbles } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { SiNasa } from "react-icons/si";
import { FaMedal } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const Awards_swiper = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <>
      <div className=" relative ">
        <Swiper
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[EffectFade, Navigation, Pagination, A11y]}
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.06}
          className="my-6">
          <SwiperSlide>
            <div className=" grid md:grid-cols-2 md:grid-rows-2 gap-3">
              <div data-aos="zoom-in-right" className="px-4 py-5 flex-auto rounded-md bg-slate-50 hover:bg-slate-100 cursor-default ">
                <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                  <FaMedal className="w-6 h-6" />
                </div>
                <h5 className="text-xl mb-1 font-semibold">Kevin Xu Innovation</h5>
                <p className="mb-4 text-left">Runner-up of Kevin Xu Innovation Challenge, an initiative of Rhodes Forum on Technology and Society, Oxford, UK. For bureaucrazy.co </p>
              </div>
              <div data-aos="zoom-in-right" className="px-4 py-5 flex-auto rounded-md bg-slate-50 hover:bg-slate-100 cursor-default ">
                <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                  <GiPodiumSecond className="w-6 h-6" />
                </div>
                <h5 className="text-xl mb-1 font-semibold"> EEPEX-24</h5>
                <p className="mb-4 text-left">
                  2<sup>nd</sup> position in Project Exhibition at EEPEX-2024. Organized by SEEE , Kathmandu University
                </p>
              </div>
              <div data-aos="zoom-in-left" aos-data-duration="1000" className="relative  flex flex-col min-w-0 rounded-md bg-slate-50 hover:bg-slate-100 cursor-default ">
                <div className="px-4 py-5 flex-auto">
                  <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <SiNasa className="w-6 h-6" />
                  </div>
                  <h5 className="text-xl mb-1 font-semibold">Space Apps Challenge</h5>
                  <p className="mb-4 ">People's Choice and Second Awardee for developing Agrowtik with aim to minimize global agricultural waste.</p>
                </div>
              </div>
              <div data-aos="zoom-in-left" aos-data-duration="1000" className="relative flex flex-col min-w-0  rounded-md  bg-slate-50 hover:bg-slate-100 cursor-default ">
                <div className="px-4 py-5 flex-auto">
                  <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <RiTeamFill className="w-6 h-6" />
                  </div>
                  <h5 className="text-xl mb-1 font-semibold">Incubate Nepal 2025</h5>
                  <p className="mb-4 ">Top 34 in Nepal by Incubate Nepal; developed a project guiding youth step-by-step through complex government & legal processes.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" grid md:grid-cols-2 md:grid-rows-2 gap-3">
              <div data-aos="zoom-in-right" className="relative flex flex-col min-w-0 rounded-md bg-slate-50 hover:bg-slate-100 cursor-default ">
                <div className="px-4 py-5 flex-auto">
                  <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <FaHandsBubbles className="w-6 h-6" />
                  </div>
                  <h5 className="text-xl mb-1 font-semibold"> MechTRIX- 2079 & 2080</h5>
                  <p className="mb-4 ">Participated in MechTRIX-2079 & 2080 Organized by SOMAES, The Institute of Engineering (IOE), Pulchowk </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className={` ${
            isBeginning ? " opacity-50" : " cursor-pointer"
          } hidden group-hover:flex rounded-full active:scale-95  items-center justify-center absolute top-1/2 -translate-y-1/2 -left-5 size-5 z-50 p-1 bg-gray-200  shadow hover:shadow-2xs transition-all duration-500 `}>
          <MdOutlineNavigateBefore />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className={` ${
            isEnd ? " opacity-50" : "cursor-pointer"
          } hidden group-hover:flex rounded-full active:scale-95  items-center justify-center absolute top-1/2 -translate-y-1/2 -right-5 size-5 z-50 p-1 bg-gray-200  shadow hover:shadow-2xs transition-all duration-500`}>
          <MdOutlineNavigateNext />
        </button>
      </div>
    </>
  );
};

export default Awards_swiper;
