import React from "react";

const loading = () => {
  return (
    <>
      <main className="w-full overflow-hidden px-4 md:px-20 mt-20 md:h-screen xl:h-[80vh] h-full pb-3 animate-pulse">
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
      </main>
    </>
  );
};

export default loading;
