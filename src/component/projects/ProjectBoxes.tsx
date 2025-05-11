import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectBoxes = ({ filteredProjects }: { filteredProjects: any[] }) => {
  return (
    <div className="flex flex-wrap justify-center my-8 gap-8 xl:gap-12 mb-15">
      {filteredProjects.length === 0 ? (
        <p className="text-xl py-12">No projects found for this category.</p>
      ) : (
        filteredProjects.map(
          (project: {
            id: number;
            title: string;
            description: string;
            image: any;
            tech: string[];
          }) => (
            <div
              key={project.id}
              className="w-[360px] sm:w-[380px] lg:w-[400px] p-4 border border-white rounded-[20px]  transition-colors"
            >
              <LazyLoadImage
                src={Object.values(project.image)[0] as string}
                alt={project.title}
                effect="blur"
                width={400}
                height={220}
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
                  to={`${project.id}`}
                  className="text-[14px] uppercase font-bold text-white py-2 px-4 rounded-[20px] mt-4 inline-block bg-[#fd6c03] border-2 border-[#fd6c03] hover:bg-[#1e1e1e] hover:border-[#fd6c03] hover:shadow-[0_0_10px_rgba(253,108,3,0.7)] hover:scale-105 transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default ProjectBoxes;
