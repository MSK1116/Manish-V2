import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section name="About" className="w-full overflow-hidden h-full px-4 md:px-20 my-20 ">
        <div>
          <h4 data-aos="fade-down" className="text-3xl font-semibold text-red-600 capitalize lg:text-4xl ">
            About me !
          </h4>
          <div className="mt-2">
            <span data-aos="fade-left" className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
            <span data-aos="fade-left" data-aos-delay="100" className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
            <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
          </div>
        </div>
        <div className=" h-full w-full px-6 py-10 mx-auto  flex ">
          <div className="w-1/2 space-y-12 ">
            {/* education list */}
            <div data-aos="fade-up-right" data-aos-duration="1000" className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                <IoSchoolSharp className="w-6 h-6" />
              </span>
              <div className="mt-4 md:mx-4 space-y-2 md:mt-0">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Education</h1>
                <ul className="flex flex-col mr-4">
                  <div className=" space-y-4 ">
                    <p data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5" className="">
                      +2 Science: School Leaving Certificate (SLC) <br></br> GPA:- 11th: 3.73 & 12th: 3.65 <br></br> National Examination Board (NEB), 2080BS <br></br>Capital College & Research Center (CCRC)-Balkumari, KTM
                    </p>
                    <span className="flex items-center">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                    </span>
                    <p data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5">
                      10 th :Secondary Education Examination (SEE)<br></br> GPA: 3.55<br></br> Gamvir Samudra Setu Secondary School- Imadol, Lalitpur
                    </p>
                    <span className="flex items-center">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                    </span>
                  </div>
                </ul>
              </div>
            </div>
            {/* experience list */}
            <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-offset="-5" className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                <MdWork className="w-6 h-6" />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0 space-y-2">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Experience</h1>
                <div className="space-y-4 pt-2">
                  <div data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5" className=" flex space-x-4 size-fit overflow-hidden pl-2">
                    <a target="blank" className=" group rounded-full border relative  size-10 border-gray-200 " href="https://thinkbig.org.np/">
                      <Image className={"object-cover rounded-full transition-all duration-700 group-hover:scale-90"} fill={true} src={"https://www.thinkbig.org.np/Logo_noBg.png"} alt={"https://thinkbig.org.np/"}></Image>
                    </a>
                    <h3>
                      Co-Founder, Chief Committee Head <br></br> Think Big - Dhanusha, Nepal
                    </h3>
                  </div>
                  <span className="flex items-center">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                  </span>

                  <div data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5" className=" flex space-x-4 size-fit overflow-hidden pl-2">
                    <a target="blank" className=" group relative rounded-full border  size-10 border-gray-200 " href="https://www.facebook.com/ccrc.science">
                      <Image src={"/CCRC-CSC.jpg"} className={" size-fit rounded-full transition-all duration-700 group-hover:scale-90 "} alt={"https://www.facebook.com/ccrc.sciences"} fill={true} />
                    </a>
                    <h3>
                      Research & Development Head<br></br> The Scientific Circle-CCRC, Kathmnadu
                    </h3>
                  </div>
                  <span className="flex items-center">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                  </span>
                  <div data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5" className=" flex space-x-4 size-fit overflow-hidden pl-2">
                    <a target="blank" className=" group relative rounded-full border  size-10 border-gray-200 " href="https://www.msmahato.com.np">
                      <Image
                        src={"https://www.msmahato.com.np/assets/mold-skill-bl-Bk_EvgFl.png"}
                        className={" size-fit rounded-full transition-all duration-700 group-hover:scale-90 "}
                        fill={true}
                        alt={"https://www.msmahato.com.np/assets/mold-skill-bl-Bk_EvgFl.png"}
                      />
                    </a>
                    <h3>
                      Founder & Developer <br></br> Mold Skill (web)
                    </h3>
                  </div>
                  <span className="flex items-center">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                  </span>
                  <div data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5" className=" flex space-x-4 size-fit overflow-hidden pl-2">
                    <a target="blank" className=" group relative rounded-full border  size-10 border-gray-200 " href="https://www.facebook.com/evtechso/">
                      <Image fill={true} src={"/ETN.png"} className={" size-fit rounded-full transition-all duration-700 group-hover:scale-90 "} alt={"https://www.facebook.com/evtechso/"} />
                    </a>
                    <h3>
                      Founding Director <br></br> Everest TechSo Network (ETN)
                    </h3>
                  </div>
                  <span className="flex items-center">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                  </span>
                  <div data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5" className="  flex space-x-4 size-fit overflow-hidden pl-2">
                    <a target="blank" className=" group relative rounded-full border size-10 border-gray-200   " href="https://www.gamvirss.edu.np">
                      <Image src={"https://www.gamvirss.edu.np/web/LogoNoBg.png"} className={" rounded-full transition-all duration-700 group-hover:scale-90 "} fill={true} alt={"https://www.gamvirss.edu.np/web/LogoNoBg.png"} />
                    </a>
                    <h3>
                      Website Developer at <br></br> Gamvir Samudra Setu Secondary School- Imadol, Lalitpur{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-offset="-250" data-aos-duration="2000" className="w-1/2 md:relative md:block hidden">
            <div className=" rounded-r-md  absolute inset-0 z-10 bg-gradient-to-r from-gray-50 hover:opacity-0 transition-all ease-in-out duration-1000  "></div>
            <Image className=" rounded-r-md object-cover" src={"/IMG_6105.jpg"} fill={true} alt="On the stage of GSS"></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
