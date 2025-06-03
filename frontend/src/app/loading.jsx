import React from "react";

export default function Loading() {
  return (
    <>
      <div name="Home" className="w-full overflow-hidden px-4 md:px-20 mt-20 md:h-screen xl:h-[80vh] h-full pb-3 animate-pulse">
        <div className="flex relative flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-10 w-full bg-gray-300 rounded"></div>
            <div className="h-24 w-full bg-gray-300 rounded"></div>

            {/* Social Media & Tools */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between">
              <div className="space-y-3">
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <ul className="flex space-x-5">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="h-8 w-8 bg-gray-300 rounded-full"></li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <ul className="flex space-x-5">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="h-8 w-8 bg-gray-300 rounded-full"></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section (Profile Picture) */}
          <div className="md:w-1/2 md:ml-48 mt-10 md:mt-16 order-1 md:order-2 flex items-center justify-center">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div name="About" className="w-full overflow-hidden h-full px-4 md:px-20 my-20 animate-pulse">
        <div>
          <div className="h-8 w-48 bg-gray-300 rounded mb-4" />
          <div className="flex space-x-1">
            <span className="inline-block w-40 h-1 rounded-full bg-gray-300"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-gray-300"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-300"></span>
          </div>
        </div>

        <div className="h-full w-full px-6 py-10 mx-auto flex">
          {/* Left Column */}
          <div className="w-1/2 space-y-12">
            {/* Education Skeleton */}
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-300 rounded-xl h-10 w-10" />
              <div className="space-y-2">
                <div className="h-6 w-40 bg-gray-300 rounded" />
                <div className="space-y-4">
                  <div className="h-20 bg-gray-200 rounded" />
                  <div className="h-20 bg-gray-200 rounded" />
                </div>
              </div>
            </div>

            {/* Experience Skeleton */}
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-300 rounded-xl h-10 w-10" />
              <div className="space-y-2">
                <div className="h-6 w-40 bg-gray-300 rounded" />
                <div className="space-y-4 pt-2">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="rounded-full bg-gray-300 border border-gray-100 w-10 h-10" />
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-gray-300 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                        {index < 4 && (
                          <div className="mt-3 flex items-center">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="w-1/2 md:relative md:block hidden">
            <div className="absolute inset-0 bg-gray-200 rounded-r-md" />
          </div>
        </div>
      </div>
      <div name="Award" className="relative my-20 md:pt-16 w-full overflow-hidden animate-pulse">
        <div className="container mx-auto">
          <div className="px-4 md:px-20">
            <div className="h-8 w-64 bg-gray-300 rounded mb-4" />
            <div className="flex space-x-1">
              <span className="inline-block w-40 h-1 rounded-full bg-gray-300"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-gray-300"></span>
              <span className="inline-block w-2 h-1 ml-1 rounded-full bg-gray-300"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-gray-300"></span>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-5">
            {/* Left Card Skeleton */}
            <div className="w-screen md:w-1/3 px-4 mr-auto ml-auto">
              <div className="flex flex-col bg-gray-100 w-full mb-6 shadow-lg rounded-lg">
                <div className="w-full h-80 bg-gray-300 rounded-t-md" />
                <div className="p-8 space-y-4">
                  <div className="h-6 w-48 bg-gray-300 rounded" />
                  <div className="h-4 w-full bg-gray-300 rounded" />
                  <div className="h-4 w-3/4 bg-gray-300 rounded" />
                </div>
                <div className="px-8 pb-6">
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-300 rounded" />
                    <div className="h-4 w-5/6 bg-gray-300 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Grid Skeleton */}
            <div className="w-full md:w-6/12 px-4">
              <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="px-4 py-5 flex flex-col rounded-md bg-gray-100 space-y-4 hover:bg-gray-200">
                    <div className="p-3 inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-200" />
                    <div className="h-5 w-3/4 bg-gray-300 rounded" />
                    <div className="space-y-1">
                      <div className="h-4 w-full bg-gray-300 rounded" />
                      <div className="h-4 w-2/3 bg-gray-300 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden flex flex-col px-4 md:px-20 my-20 animate-pulse">
        <section className="relative pt-16">
          <div className="container mx-auto">
            {/* Header */}
            <div>
              <div className="h-8 w-64 bg-gray-300 rounded mb-4" />
              <div className="flex space-x-1">
                <span className="inline-block w-40 h-1 rounded-full bg-gray-300"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-gray-300"></span>
                <span className="inline-block w-2 h-1 ml-1 rounded-full bg-gray-300"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-gray-300"></span>
              </div>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 w-full bg-gray-300" />
                  <div className="p-4 space-y-3">
                    <div className="h-5 w-3/4 bg-gray-300 rounded" />
                    <div className="h-4 w-full bg-gray-300 rounded" />
                    <div className="h-4 w-2/3 bg-gray-300 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Button Skeleton */}
        <div className="flex mt-10 justify-center items-center">
          <div className="w-auto flex flex-row pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-white bg-gray-300 rounded-lg">
            <div className="h-6 w-32 bg-gray-400 rounded mr-3" />
            <div className="w-6 h-6 bg-gray-400 rounded" />
          </div>
        </div>
      </div>
      <div name="Contact" className="w-full overflow-hidden bg-white relative pt-0 animate-pulse">
        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5 pb-20 md:px-10 lg:pt-20 lg:flex-row">
            {/* Left Image/Graphic Placeholder */}
            <div className="w-full hidden md:flex bg-gray-100 justify-center items-center max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="w-[565px] h-[682px] bg-gray-200 rounded-lg" />
            </div>

            {/* Right Form Placeholder */}
            <div className="w-full mt-20 lg:mt-0 lg:w-5/12 max-w-2xl">
              <div className="flex flex-col items-start justify-start pt-10 px-5 pb-10 bg-white shadow-2xl rounded-xl">
                <div className="h-10 w-full mb-6 bg-gray-300 rounded" />

                <div className="space-y-8 w-full">
                  <div className="h-5 w-24 bg-gray-300 rounded" />
                  <div className="h-12 w-full bg-gray-200 rounded-md" />

                  <div className="h-5 w-24 bg-gray-300 rounded" />
                  <div className="h-12 w-full bg-gray-200 rounded-md" />

                  <div className="h-5 w-40 bg-gray-300 rounded" />
                  <div className="h-12 w-full bg-gray-200 rounded-md" />

                  <div className="h-12 w-full bg-gray-300 rounded-md" />

                  <div className="h-5 w-1/3 mx-auto bg-gray-200 rounded" />
                </div>
              </div>

              {/* Optional: Dot Background Placeholder */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gray-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
