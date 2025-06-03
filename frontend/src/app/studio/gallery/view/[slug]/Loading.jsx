import React from "react";

export default function Loading() {
  return (
    <>
      <main className="p-8 animate-pulse">
        <div className="breadcrumbs overflow-hidden md:text-sm text-xs mt-14">
          <ul className="flex gap-2 text-gray-300">
            <li className="bg-gray-200 rounded h-4 w-16" />
            <li className="bg-gray-200 rounded h-4 w-20" />
            <li className="bg-gray-300 rounded h-4 w-12" />
            <li className="bg-gray-200 rounded h-4 w-24 truncate" />
          </ul>
        </div>

        <div className="flex md:flex-row flex-col rounded-md bg-gray-100 overflow-hidden md:h-[80vh] h-full px-5 md:px-10 md:py-8 py-0 font-lora gap-4">
          <figure className="md:w-[60%] w-full h-[65vh] md:h-full flex justify-center items-center relative bg-gray-300 rounded">
            <div className="w-full h-full bg-gray-300" />
          </figure>

          <article className="md:max-w-[40%] w-full md:p-4 md:py-4 py-2 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto md:mx-0" />
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto md:mx-0" />
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-4 w-4 bg-gray-300 rounded-full" />
              <div className="h-4 bg-gray-200 rounded w-32" />
            </div>

            <blockquote className="mt-10 space-y-5">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-300 rounded w-2/3" />
            </blockquote>
          </article>
        </div>
      </main>
      <section className="flex md:flex-row flex-col max-w-screen-2xl w-full overflow-hidden p-8 font-lora animate-pulse">
        {/* Left Column */}
        <div className="md:ml-12 md:w-[60%] w-full flex flex-col space-y-4">
          <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto md:mx-0" />
          <div className="h-4 w-full bg-gray-200 rounded mx-auto md:mx-0" />

          <div className="md:pl-24 flex w-fit md:mt-0 mt-5 relative space-x-5 md:space-x-7">
            <div className="w-[150px] h-[100px] bg-gray-300 rounded-lg" />
            <div className="w-[60px] h-[100px] bg-gray-300 rounded-lg" />
            <div className="w-[50px] h-[50px] bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-[40%] md:mt-0 mt-10 w-full flex flex-col space-y-2 items-center justify-end">
          <div className="rounded-lg border border-gray-100 py-3 shadow-sm w-full max-w-md p-4 space-y-4">
            {[...Array(6)].map((_, i) => (
              <div className="grid grid-cols-3 gap-4" key={i}>
                <div className="h-4 bg-gray-300 rounded col-span-1" />
                <div className="h-4 bg-gray-200 rounded col-span-2" />
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="w-24 h-10 bg-gray-300 rounded-md" />
            <div className="w-7 h-7 bg-gray-200 rounded-full" />
            <div className="w-7 h-7 bg-gray-200 rounded-full" />
            <div className="w-7 h-7 bg-gray-200 rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}
