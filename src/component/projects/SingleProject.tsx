import breadcrumbs from "../../assets/project/breadcrumb.png";
import { Link, useLoaderData, type Params } from "react-router-dom";

import { myProjects } from "../../data/myProjects";
import { works } from "../../data/works";
import { mobile } from "../../data/mobile";
import { skills } from "../../data/skills";
import list from "../../assets/project/list.png";
import { useEffect } from "react";

export const loader = ({ params }: { params: Params<string> }) => {
  const { id } = params;
  const allProjects = [...works, ...myProjects, ...mobile];
  const project = allProjects.find((project) => project.id === Number(id));
  if (!project) {
    throw new Error("Project not found");
  }
  return { project };
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: Record<string, string>;
  tech: string[];
  githubLink: string;
  link: string;
  platform?: string[];
};

const SingleProject = () => {
  const { project } = useLoaderData() as { project: Project };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="mt-12 container mx-auto px-4 max-w-6xl">
      {/* Breadcrumbs */}
      <div
        className="flex items-center mb-8"
        style={{ fontFamily: "var(--font-krona)" }}
      >
        <img
          src={breadcrumbs}
          alt="breadcrumbs icon"
          className="w-[30px] mr-2"
        />

        <Link
          to="/projects"
          className="text-white hover:underline transition-all duration-300"
        >
          Projects
        </Link>
        <span className="mx-2 text-secondary"> {">"}</span>
        <span className="text-secondary font-semibold">{project.title}</span>
      </div>

      {/* Project Details */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 mb-12 lg:gap-x-12 xl:gap-x-20">
        <div className="w-full lg:w-1/2">
          <img
            src={Object.values(project.image)[0] as string}
            alt={project.title}
            className="w-full rounded-xl"
            style={{
              border: "3px solid var(--secondary)",
              boxShadow: "0 0 10px var(--secondary)",
            }}
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          {/* description */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img src={list} alt="list icon" className="w-[18px] mr-2" />
              <h1 className="uppercase">Description:</h1>
            </div>
            <p className=" leading-relaxed">{project.description}</p>
          </div>
          {/* tech */}
          <div className="flex gap-4 mt-5">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img src={list} alt="list icon" className="w-[18px] mr-2" />
                <h1 className="uppercase">Tech:</h1>
              </div>
              <div className="flex flex-wrap gap-8">
                {project.tech.map((tech, index) => {
                  // Find the matching skill from your skills data
                  const matchingSkill = skills.find(
                    (skill) => skill.name.toLowerCase() === tech.toLowerCase()
                  );

                  return (
                    <div
                      key={tech + index}
                      style={{ fontFamily: "var(--font-krona)" }}
                      className="text-center"
                    >
                      {matchingSkill ? (
                        <>
                          <div className="min-h-[55px] flex justify-center items-center">
                            <img
                              src={matchingSkill.icon}
                              alt={tech}
                              className="mx-auto w-[45px] mb-2 "
                            />
                          </div>
                          <span className=" uppercase text-[12px]">{tech}</span>
                        </>
                      ) : (
                        <span className=" uppercase text-[12px]">{tech}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* github */}
          <div>
            <div className="flex items-center mb-2">
              <img src={list} alt="list icon" className="w-[18px] mr-2" />
              <h1 className="uppercase">Github:</h1>
            </div>
            <p>{project.githubLink}</p>
          </div>

          {/* link */}
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <img src={list} alt="list icon" className="w-[18px] mr-2" />
              <h1 className="uppercase">Link:</h1>
            </div>
            <p>{project.link}</p>
          </div>
          {/* View Project */}
          {project.link === "no link" ? null : (
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] uppercase font-bold text-white py-2 px-4 rounded-[20px] mt-4 inline-block bg-[#fd6c03] border-2 border-[#fd6c03] hover:bg-[#1e1e1e] hover:border-[#fd6c03] hover:shadow-[0_0_10px_rgba(253,108,3,0.7)] hover:scale-105 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
