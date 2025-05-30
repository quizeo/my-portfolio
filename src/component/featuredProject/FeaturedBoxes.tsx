import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMemo } from "react";
import React from "react";

type FeaturedItem = {
  id: string | number;
  title: string;
  description: string;
  platform: string[];
  githubLink: string;
  tech: string[];
  link: string;
  image: { [key: string]: any };
  featured: boolean;
};

type FeaturedBoxesProps = {
  featuredItems: FeaturedItem[];
};

const FeaturedBoxes = ({ featuredItems }: FeaturedBoxesProps) => {
  // Memoize tech filtering logic to avoid recalculating on every render
  const filterTech = useMemo(() => {
    return (techArray: string[]) => {
      return techArray.filter(
        (item) => !["html", "css", "javascript"].includes(item)
      );
    };
  }, []);

  // Memoize the featured items rendering to prevent unnecessary re-renders
  const renderedItems = useMemo(() => {
    return featuredItems.map((item) => {
      const { id, title, description, tech, link, image } = item;
      const filteredTech = filterTech(tech);
      const displayTech = filteredTech.slice(0, 7);
      const remainingTechCount = filteredTech.length - 7;

      // Memoize the truncated description
      const truncatedDescription =
        description.length > 150
          ? `${description.substring(0, 110)}...`
          : description;

      return (
        <section
          className="w-[360px] sm:w-[380px] lg:w-[400px] p-4 border border-white rounded-[20px] transition-colors"
          key={id}
        >
          <LazyLoadImage
            src={Object.values(image)[0] as string}
            srcSet={` ${Object.values(image)[0]} 400w, ${
              Object.values(image)[0]
            } 800w `}
            sizes="(max-width: 600px) 400px, 800px"
            alt={title}
            loading="lazy"
            className="w-full h-[220px] object-cover object-top rounded-[20px]"
            style={{
              border: "3px solid var(--secondary)",
              boxShadow: "0 0 5px var(--secondary)",
            }}
          />
          {/* INFO */}
          <div className="px-0 sm:px-4 pt-4">
            <h1 className="text-[15px] uppercase">{title}</h1>
            <p className="text-sm mt-2">{truncatedDescription}</p>
            {/* tech */}
            <div className="min-h-[100px] flex flex-col justify-center mt-2">
              <h1 className="uppercase">Tech</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {displayTech.map((item, index) => (
                  <span
                    key={index}
                    className="text-[13px] py-1 uppercase bg-[#1e1e1e] text-white px-3 rounded-[20px]"
                    style={{
                      border: "1px solid var(--secondary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
                {remainingTechCount > 0 && (
                  <span
                    className="text-[12px] py-1 uppercase bg-[#1e1e1e] text-white px-2 rounded-[20px]"
                    style={{
                      border: "1px solid var(--secondary)",
                    }}
                  >
                    +{remainingTechCount} more
                  </span>
                )}
              </div>
            </div>
            {/* {link} */}
            <h1 className="uppercase mt-2">Link:</h1>
            <p className="text-[14px]">{link}</p>

            {/* button */}
            <Link
              to={`projects/${id}`}
              className="text-[14px] uppercase font-bold text-white py-2 px-4 rounded-[20px] mt-4 inline-block bg-[#fd6c03] border-2 border-[#fd6c03] hover:bg-[#1e1e1e] hover:border-[#fd6c03] hover:shadow-[0_0_10px_rgba(253,108,3,0.7)] hover:scale-105 transition-all duration-300"
            >
              View Details
            </Link>
          </div>
        </section>
      );
    });
  }, [featuredItems, filterTech]);

  return (
    <div className="flex flex-wrap justify-center my-8 gap-8 xl:gap-12 mb-15">
      {renderedItems}
    </div>
  );
};

// Use React.memo to prevent re-renders if props haven't changed
export default React.memo(FeaturedBoxes);
