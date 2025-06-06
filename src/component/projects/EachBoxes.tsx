import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMemo } from "react";

// Define proper type for projects
type ProjectType = {
  id: string | number;
  title: string;
  description: string;
  image: Record<string, string>;
  tech: string[];
};

const EachBoxes = ({
  sorted,
  category,
}: {
  sorted: ProjectType[];
  category: string;
}) => {
  // Memoize the limited items calculation
  const limitedItems = useMemo(() => sorted.slice(0, 6), [sorted]);

  // Memoize the project cards rendering
  const projectCards = useMemo(() => {
    return limitedItems.map((project) => (
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
            to={`${project.id}`}
            className="text-[14px] uppercase font-bold text-white py-2 px-4 rounded-[20px] mt-4 inline-block bg-[#fd6c03] border-2 border-[#fd6c03] hover:bg-[#1e1e1e] hover:border-[#fd6c03] hover:shadow-[0_0_10px_rgba(253,108,3,0.7)] hover:scale-105 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    ));
  }, [limitedItems]);

  // Memoize the "View More Projects" button based on sorted.length
  const viewMoreButton = useMemo(() => {
    if (sorted.length <= 6) return null;

    return (
      <Link
        to={`/projects/category/${category}`}
        className="text-[14px] uppercase font-bold text-white py-3 px-6 rounded-[20px] mb-12 inline-block bg-[#fd6c03] border-2 border-[#fd6c03] hover:bg-[#1e1e1e] hover:border-[#fd6c03] hover:shadow-[0_0_10px_rgba(253,108,3,0.7)] hover:scale-105 transition-all duration-300"
      >
        View More Projects
      </Link>
    );
  }, [sorted.length, category]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center my-8 gap-8 xl:gap-12">
        {projectCards}
      </div>
      {viewMoreButton}
    </div>
  );
};

export default EachBoxes;
