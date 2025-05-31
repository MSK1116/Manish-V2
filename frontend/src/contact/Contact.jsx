"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Svg_study_time = dynamic(() => import("../SVG/Svg_study_time"), { ssr: false });
const Svg_sent = dynamic(() => import("../SVG/Svg_sent"), { ssr: false });
const Svg_Dot = dynamic(() => import("../SVG/Svg_Dot"), { ssr: false });
const PhoneInput = dynamic(() => import("react-phone-number-input"), { ssr: false });

import { useForm, Controller } from "react-hook-form";
import { RiErrorWarningLine } from "react-icons/ri";
import axios from "axios";

import "react-phone-number-input/style.css";

const Contact = () => {
  const [submitting, setSubmitting] = useState({ processing: false, success: false, message: null });
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, make it 12
    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
    const dataToSend = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      date: formattedDateTime,
    };
    setSubmitting({ processing: true, success: false, message: null });
    try {
      console.log("data to send : ", dataToSend);
      const res = await axios.post("https://manish-portfolio-backend.vercel.app/contact", dataToSend);
      if (res.data) {
        setSubmitting({ processing: false, success: true, message: res.data.emailStatus });
      }
    } catch (error) {
      console.log(error.response);
      setSubmitting({ processing: false, success: false, message: error.response.data.message });
    }
  };

  return (
    <>
      <div name="Contact" className=" w-full overflow-hidden  bg-white relative  pt-0">
        <div
          className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5  pb-20 md:px-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className=" hover:scale-105 hidden transition-all w-[565.76px] h-[682.89px] duration-1000 object-contain md:flex flex-col items-center justify-center  relative lg:pr-10">
                {submitting.success ? <Svg_sent /> : <Svg_study_time />}
              </div>
            </div>
            <div data-aos="fade-left" className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div
                className="flex flex-col items-start justify-start pt-10 px-5 pb-10  bg-white shadow-2xl rounded-xl
            relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Get connected..</p>
                <form onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in-left" data-aos-delay="500" className="w-full">
                  <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div className="relative">
                      <p className="bg-white rounded-lg pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                      <input
                        aria-label="Enter your fullName"
                        {...register("fullName", { required: true })}
                        name="fullName"
                        placeholder="Manish.."
                        type="text"
                        className="border placeholder-gray-400 focus:outline-none
                  focus:border-[#5ac1b0] w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      />
                      {errors.fullName && <RiErrorWarningLine className=" absolute right-0 top-[35%]  mx-1 text-red-500" />}{" "}
                    </div>
                    <div className="relative">
                      <p className="bg-white rounded-lg pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                      <input
                        aria-label="Enter your email"
                        {...register("email", { required: true })}
                        name="email"
                        placeholder="123@ex.com"
                        type="email"
                        className="border placeholder-gray-400 focus:outline-none
                  focus:border-[#5ac1b0] w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      />
                      {errors.email && <RiErrorWarningLine className=" absolute right-0 top-[35%]  mx-1 text-red-500" />}{" "}
                    </div>{" "}
                    <div className="relative">
                      <p className="bg-white rounded-lg pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Phone Number</p>
                      <Controller
                        className=""
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Phone number is required",
                        }}
                        render={({ field: { onChange, value } }) => (
                          <div className="  ">
                            <PhoneInput
                              placeholder="+977 9812055XX"
                              value={value}
                              onChange={onChange}
                              defaultCountry="NP"
                              international
                              className="w-full border placeholder-gray-400   pt-4 pr-4 pb-4 pl-4 mt-2 text-base block bg-white border-gray-300 focus-within:border-[#5ac1b0]  rounded-md"
                            />
                          </div>
                        )}
                      />
                      {errors.phoneNumber && <RiErrorWarningLine className=" absolute right-0 top-[35%]  mx-1 text-red-500" />}{" "}
                    </div>
                    <div className="relative">
                      <button
                        aria-label="Click to submit the form"
                        disabled={submitting.processing}
                        type="submit"
                        className={` ${
                          submitting.processing ? "cursor-wait" : "cursor-pointer"
                        }  w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500  rounded-lg transition duration-200 hover:bg-indigo-600 ease`}>
                        {submitting.processing ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                  <div className={` ${submitting.success ? " text-green-600" : " text-red-600"}  text-sm text-center h-5  `}>{submitting.message && submitting.message} </div>
                </form>
              </div>
              <Svg_Dot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
