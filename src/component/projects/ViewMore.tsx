import { Link, useLoaderData, type Params } from "react-router-dom";
import { works } from "../../data/works";
import { myProjects } from "../../data/myProjects";
import { mobile } from "../../data/mobile";
import TitleSection from "./TitleSection";
import breadcrumbs from "../../assets/project/breadcrumb.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const loader = ({ params }: { params: Params<string> }) => {
  const { category } = params;

  if (category === "work") {
    return { projects: works, category: category, title: " Work Projects" };
  } else if (category === "myProjects") {
    return {
      projects: myProjects,
      category: category,
      title: "Personal Projects",
    };
  } else if (category === "mobile") {
    return { projects: mobile, category: category, title: "Mobile Apps" };
  }

  return { projects: [] };
};

const ViewMore = () => {
  // Use correct typing for the loader data
  const { projects, category, title } = useLoaderData() as {
    projects: any[];
    category: string;
    title?: string;
  };

  // Sort projects by ID in descending order
  const sortedProjects = projects
    ? [...projects].sort((a, b) => b.id - a.id)
    : [];

  if (!sortedProjects || sortedProjects.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">No projects found</h1>
      </div>
    );
  }

  return (
    <div className="mt-12 container mx-auto px-4">
      {/* Breadcrumbs */}

      <div
        className="flex items-center"
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
        <span className="text-secondary font-semibold">
          {title ||
            (category
              ? category.charAt(0).toUpperCase() + category.slice(1)
              : "Category")}
        </span>
      </div>

      <div className="text-center lg:text-left mb-10">
        {category === "work" && (
          <TitleSection
            text1="Work"
            text2="Project"
            paragraph="Projects I've been involved in as a professional front-end developer."
          />
        )}
        {category === "myProjects" && (
          <TitleSection
            text1="SELF-MADE"
            text2="FUN PROJECTS"
            paragraph="Personal projects built for exploration and skill development."
          />
        )}
        {category === "mobile" && (
          <TitleSection
            text1="mobile"
            text2="projects"
            paragraph="Applications developed specifically for mobile devices."
          />
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {sortedProjects.map((project) => (
          <div
            key={project.id}
            className="w-[360px] sm:w-[380px] lg:w-[400px] p-4 border border-white rounded-[20px] transition-colors"
          >
            <LazyLoadImage
              src={Object.values(project.image)[0] as string}
              srcSet={`
                ${Object.values(project.image)[0]} 400w,
                ${Object.values(project.image)[0]} 800w
              `}
              sizes="(max-width: 600px) 400px, 800px"
              alt={project.title}
              loading="lazy"
              className="w-full h-[220px] object-cover object-top rounded-[20px]"
              style={{
                border: "3px solid var(--secondary)",
                boxShadow: "0 0 5px var(--secondary)",
              }}
            />
            <div className="px-0 sm:px-4 pt-4">
              <h1 className="uppercase text-[13px] min-h-[40px] flex flex-col justify-center">
                {project.title}
              </h1>
              <p className="mt-2 text-sm">
                {project.description.length > 150
                  ? `${project.description.substring(0, 120)}...`
                  : project.description}
              </p>
              {/* button */}
              <Link
                to={`/projects/${project.id}`}
                className="text-[14px] uppercase font-bold text-white py-2 px-4 rounded-[20px] mt-4 inline-block bg-[#fd6c03] border-2 border-[#fd6c03] hover:bg-[#1e1e1e] hover:border-[#fd6c03] hover:shadow-[0_0_10px_rgba(253,108,3,0.7)] hover:scale-105 transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMore;
