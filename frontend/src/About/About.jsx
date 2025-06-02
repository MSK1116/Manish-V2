import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import Image from "next/image";
import { pixelateImageToBase64 } from "@/lib/pixelate";

const About = async () => {
  const pixelatedOfManish = await pixelateImageToBase64("./public/IMG_6105.jpg");
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
        <div className=" h-full w-full md:px-6 px-3 py-10 mx-auto  flex ">
          <div className="md:w-1/2 w-full space-y-12  ">
            {/* education list */}
            <div data-aos="fade-up-right" data-aos-duration="1000" className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                <IoSchoolSharp className="w-6 h-6" />
              </span>
              <div className="mt-4 md:mx-4 space-y-2 md:mt-0">
                <h5 className="text-2xl font-semibold text-gray-700 capitalize ">Education</h5>
                <ul className="flex flex-col md:mr-4 mr-0 space-y-2 ">
                  <li data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5" className="">
                    +2 Science: School Leaving Certificate (SLC) <br></br> GPA:- 11th: 3.73 & 12th: 3.65 <br></br> National Examination Board (NEB), 2080BS <br></br>Capital College & Research Center (CCRC)-Balkumari, KTM
                    <span className="flex items-center mt-5">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                    </span>
                  </li>

                  <li data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5">
                    10 th :Secondary Education Examination (SEE)<br></br> GPA: 3.55<br></br> Gamvir Samudra Setu Secondary School- Imadol, Lalitpur
                    <span className="flex items-center mt-5">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* experience list */}
            <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-offset="-5" className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                <MdWork className="w-6 h-6" />
              </span>
              <div className="mt-4 md:mx-4 md:mt-0  space-y-2">
                <h5 className="text-2xl font-semibold text-gray-700 capitalize ">Experience</h5>
                <ul className="space-y-2 pt-2 ">
                  {[
                    {
                      link: "https://thinkbig.org.np/",
                      image: "https://www.thinkbig.org.np/Logo_noBg.png",
                      alt: "Think Big Logo",
                      title: "Co-Founder, Chief Committee Head",
                      subtitle: "Think Big - Dhanusha, Nepal",
                    },
                    {
                      link: "https://www.facebook.com/ccrc.science",
                      image: "/CCRC-CSC.jpg",
                      alt: "CCRC Science",
                      title: "Research & Development Head",
                      subtitle: "The Scientific Circle-CCRC, Kathmandu",
                    },
                    {
                      link: "https://www.msmahato.com.np",
                      image: "https://www.msmahato.com.np/assets/mold-skill-bl-Bk_EvgFl.png",
                      alt: "Mold Skill Logo",
                      title: "Founder & Developer",
                      subtitle: "Mold Skill (web)",
                    },
                    {
                      link: "https://www.facebook.com/evtechso/",
                      image: "/ETN.png",
                      alt: "ETN Logo",
                      title: "Founding Director",
                      subtitle: "Everest TechSo Network (ETN)",
                    },
                    {
                      link: "https://www.gamvirss.edu.np",
                      image: "https://www.gamvirss.edu.np/web/LogoNoBg.png",
                      alt: "Gamvir SS Logo",
                      title: "Website Developer at",
                      subtitle: "Gamvir Samudra Setu Secondary School - Imadol, Lalitpur",
                    },
                  ].map((item, index, arr) => (
                    <li key={index} data-aos="fade-right" data-aos-duration="700" data-aos-offset="-5">
                      <div className="flex space-x-4 size-fit items-center md:items-start overflow-hidden pl-2">
                        <a target="_blank" rel="noopener noreferrer" className="group relative rounded-full border size-10  min-w-10  border-gray-200" href={item.link}>
                          <Image src={item.image} alt={item.alt} fill={true} className="object-cover rounded-full transition-all duration-700 group-hover:scale-90" />
                        </a>
                        <p className=" ">
                          {item.title} <br />
                          {item.subtitle}
                        </p>
                      </div>

                      {index < arr.length - 1 && (
                        <span className="flex items-center mt-5">
                          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300" />
                          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300" />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-offset="-250" data-aos-duration="2000" className="w-1/2 md:relative md:block hidden">
            <div className=" rounded-r-md  absolute inset-0 z-10 bg-gradient-to-r from-gray-50 hover:opacity-0 transition-all ease-in-out duration-1000  "></div>
            <Image placeholder="blur" blurDataURL={pixelatedOfManish} className=" rounded-r-md object-cover" src={"/IMG_6105.jpg"} fill={true} alt="On the stage of GSS"></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
