import React from "react";

export default function Loading() {
  return (
    <>
      <main className="w-full overflow-hidden md:min-h-screen h-full md:h-full animate-pulse">
        {/* Hero Section */}
        <div className="relative h-screen w-full bg-gray-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-64 bg-gray-400 rounded"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:pl-8 md:pt-8 p-2 space-y-4 md:space-y-0">
          {/* Text Block */}
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start space-y-4">
            <div className="h-10 w-3/4 md:w-2/3 bg-gray-300 rounded"></div>
            <div className="h-10 w-5/6 md:w-3/4 bg-gray-300 rounded"></div>
            <div className="h-10 w-2/3 md:w-1/2 bg-gray-300 rounded"></div>
          </div>

          {/* Marquee Placeholder */}
          <div className="md:w-1/2 w-full h-[45vh] md:h-auto md:px-8 md:py-0 py-2 flex justify-end md:mr-10">
            <div className="flex flex-col size-full overflow-hidden gap-4 w-full">
              {[...Array(3)].map((_, rowIndex) => (
                <div key={rowIndex} className="w-full h-1/3 overflow-hidden">
                  <div className="flex flex-row gap-4 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="relative min-w-[15%] h-full bg-gray-300 rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Divider Line */}
      <span className="flex items-center my-10 animate-pulse">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
      </span>

      {/* Section */}
      <section className="w-full h-full overflow-hidden md:p-8 animate-pulse">
        {/* Heading */}
        <div className="px-8 text-center mb-6">
          <div className="h-6 w-3/4 md:w-1/2 bg-gray-300 rounded mx-auto"></div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row md:h-[80vh] overflow-hidden">
          {/* Text Block */}
          <article className="md:w-1/2 w-full h-full px-8 py-4 space-y-10 order-2 md:order-1">
            <div className="space-y-4 mt-10">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>

            {/* Button Placeholder */}
            <div className="w-44 h-10 bg-gray-300 rounded mx-auto"></div>
          </article>

          {/* Image Block */}
          <div className="relative md:w-1/2 w-full md:h-full h-[50vh] order-1 md:order-2 flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-gray-300 rounded-lg rotate-12 border-2 border-amber-300"></div>
          </div>
        </div>
      </section>
    </>
  );
}
