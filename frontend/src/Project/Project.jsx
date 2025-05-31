import React from "react";
import projectList1 from "../assets/projects.json";
import ProjectsCard from "../components/ProjectsCard";
import { BsFiletypePdf } from "react-icons/bs";

const Project = () => {
  const projectList = projectList1.filter((data) => data.id != 2 && data.id < 11).sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="max-w-screen-2xl flex flex-col container px-4 md:px-20 my-20">
        <section name="project" className="relative pt-16 bg-blueGray-50">
          <div className="container mx-auto">
            <div>
              <h4 data-aos="fade-down" className="text-3xl font-semibold text-red-600 lg:text-4xl ">
                See some my work
              </h4>
              <div className="mt-2">
                <span data-aos="fade-left" className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span data-aos="fade-left" data-aos-delay="100" className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-2 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span data-aos="fade-left" data-aos-delay="300" className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 ">
              {projectList.map((projectList) => (
                <ProjectsCard key={projectList.id} items={projectList} />
              ))}
            </div>
          </div>
        </section>
        {/* ads */}
        <div data-aos="fade-up" className="flex mt-10 justify-center items-center">
          <a
            aria-label="Click to view resume of Manish Singh Mahato"
            target="blank"
            href={"/Manish Singh Mahato (CV-3).pdf"}
            className="w-auto flex flex-row cursor-pointer pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease">
            Load Resume <BsFiletypePdf className="ml-3 w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
