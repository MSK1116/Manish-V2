import React from "react";

export default function Loading() {
  return (
    <>
      <div className="relative md:h-screen md:flex font-lora items-center md:p-8 p-3 w-full bg-gray-50 animate-pulse">
        {/* Left Side Quote */}
        <div className="p-4 md:w-1/2 h-auto mt-20 md:mt-1 max-h-fit space-y-4">
          <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto md:mx-0" />
          <div className="h-6 w-full bg-gray-200 rounded mx-auto md:mx-0" />
          <div className="h-6 w-5/6 bg-gray-200 rounded mx-auto md:mx-0" />
          <div className="h-6 w-2/3 bg-gray-200 rounded mx-auto md:mx-0" />
        </div>

        {/* Right Side Form Skeleton */}
        <div className="overflow-hidden md:relative md:w-1/2 w-full h-full">
          <div className="md:absolute inset-0 flex justify-center items-center size-full md:p-20 p-5">
            <div className="bg-white md:bg-transparent w-full border border-gray-200 p-4 md:p-6 rounded-md space-y-5">
              <div className="h-5 w-40 bg-gray-200 rounded mx-auto" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-full h-12 bg-gray-200 rounded-md" />
              ))}
              <div className="w-40 h-10 bg-gray-300 rounded-md mx-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Plant Image Placeholder */}
        <div className="overflow-hidden size-fit absolute bottom-0 md:left-0 -left-10">
          <div className="md:w-48 w-40 h-32 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </>
  );
}
