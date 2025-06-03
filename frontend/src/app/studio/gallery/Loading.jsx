import React from "react";

export default function Loading() {
  return (
    <>
      <section className="max-w-screen-2xl w-full h-auto">
        <div className="relative md:h-screen h-[80vh] w-full overflow-hidden animate-pulse">
          {/* Splash SVG Placeholder */}
          <div className="absolute size-[89%] -bottom-36 md:-right-[37%] -right-[30%] z-10 bg-gray-200 rounded-full"></div>

          {/* Carousel Stack */}
          <div className="absolute size-fit min-w-fit z-20 bottom-1 right-7">
            <div className="mx-auto font-sans antialiased">
              <div className="relative grid grid-cols-1 md:gap-5 gap-3 md:min-w-36">
                {/* Image Placeholder Stack */}
                <div className="relative md:h-52 h-32 w-full">
                  <div className="absolute inset-0 origin-bottom bg-gray-300 rounded-xl md:rounded-3xl"></div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col justify-between items-center">
                  <div className="flex gap-4">
                    <div className="p-1 md:size-7 size-6 rounded-full bg-gray-300"></div>
                    <div className="p-1 md:size-7 size-6 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fullscreen Background Image Placeholder */}
          <div className="size-full absolute top-0 left-0 z-0 bg-gray-200">
            {/* Floating Caption + Button */}
            <div className="absolute bottom-5 left-4 bg-slate-300/80 h-7 px-4 py-1 rounded-r-md flex items-center gap-2 w-60">
              <div className="h-4 w-2/3 bg-gray-400 rounded"></div>
              <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
              <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <main className="w-full overflow-hidden font-lora p-8 animate-pulse">
        {/* Headings */}
        <div className="space-y-2">
          <div className="h-6 w-2/3 bg-gray-300 rounded mx-auto md:mx-0"></div>
          <div className="h-4 w-full max-w-xl bg-gray-200 rounded mx-auto md:mx-0"></div>
        </div>

        {/* Gallery Grid */}
        <div className="h-[80vh] mt-5">
          <div className="flex md:flex-row h-full flex-col py-4 gap-4">
            {/* Large Image Area */}
            <div className="md:w-[70%] w-full h-full relative bg-gray-200 rounded-md">
              <div className="absolute bottom-5 left-3 h-7 w-2/3 bg-slate-300/80 rounded-r-md p-2 flex items-center space-x-2">
                <div className="h-4 w-24 bg-gray-400 rounded"></div>
                <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
                <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Side Column Images */}
            <div className="md:w-[30%] w-full flex items-center justify-center px-2">
              <div className="[column-fill:_balance] columns-2 space-y-5 w-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-md bg-gray-200 w-full aspect-[3/4]"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full overflow-hidden p-8 font-lora space-y-5 animate-pulse">
        {/* Headings */}
        <div className="space-y-2">
          <div className="h-5 w-2/3 bg-gray-300 rounded mx-auto md:mx-0"></div>
          <div className="h-4 w-full max-w-lg bg-gray-200 rounded mx-auto md:mx-0"></div>
        </div>

        {/* Masonry Grid Skeleton */}
        <div className="[column-fill:_balance] group h-full md:columns-5 columns-2 space-y-5">
          {Array.from({ length: 15 }, (_, index) => (index === 2 ? null : <div key={index} className="overflow-hidden rounded-md bg-gray-200 w-full aspect-[3/4] transition-all duration-500"></div>))}
        </div>
      </div>

      {/* Full-Width Gradient Image Skeleton */}
      <div className="w-full md:h-[80vh] h-[70vh] overflow-hidden font-lora">
        <div className="size-full relative bg-gray-300">
          <div className="inset-0 p-8 absolute flex flex-col space-y-5 md:items-end items-center justify-end md:justify-start bg-gradient-to-t from-gray-500/60 to-transparent">
            <div className="h-6 w-4/5 max-w-lg bg-gray-200 rounded"></div>

            <div className="flex flex-col md:flex-row w-fit gap-4">
              <div className="h-10 w-44 bg-gray-200 rounded"></div>
              <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
              </div>
              <div className="h-10 w-52 bg-gray-200 rounded"></div>
            </div>

            <div className="h-4 w-2/3 max-w-xs bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}
