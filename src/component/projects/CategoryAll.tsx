import { useMemo, lazy, Suspense } from "react";
import TitleSection from "./TitleSection";
import { works } from "../../data/works";
import { myProjects } from "../../data/myProjects";
import { mobile } from "../../data/mobile";
import React from "react";

// Lazy load the EachBoxes component
const EachBoxes = lazy(() => import("./EachBoxes"));

// Define a common project type that works with all your data sources
type ProjectType = {
  id: string | number;
  title: string;
  description: string;
  image: Record<string, string>;
  tech: string[];
  platform?: string[];
  githubLink?: string;
  link?: string;
  featured?: boolean;
};

const CategoryAll = () => {
  // Use useMemo with proper type conversion
  const sortedWorks = useMemo(() => {
    return works.slice().reverse() as unknown as ProjectType[];
  }, []);

  const sortedMyProjects = useMemo(() => {
    return myProjects.slice().reverse() as unknown as ProjectType[];
  }, []);

  const sortedMobile = useMemo(() => {
    return mobile.slice().reverse() as unknown as ProjectType[];
  }, []);

  // Memoize the entire JSX output to prevent unnecessary re-renders
  const renderedContent = useMemo(
    () => (
      <div>
        {/* WORK */}
        <div>
          <TitleSection
            text1="Work"
            text2="Project"
            paragraph="Projects I've been involved in as a professional front-end developer."
          />
          <Suspense
            fallback={
              <div className="text-center py-12">Loading work projects...</div>
            }
          >
            <EachBoxes sorted={sortedWorks} category="work" />
          </Suspense>
        </div>

        {/* MY PROJECT */}
        <div className="border-t border-t-[#333] pt-8">
          <TitleSection
            text1="SELF-MADE"
            text2="FUN PROJECTS"
            paragraph="Personal projects built for exploration and skill development."
          />
          <Suspense
            fallback={
              <div className="text-center py-12">
                Loading personal projects...
              </div>
            }
          >
            <EachBoxes sorted={sortedMyProjects} category="myProjects" />
          </Suspense>
        </div>

        {/* MOBILE PROJECTS */}
        <div className="border-t border-t-[#333] pt-8">
          <TitleSection
            text1="MOBILE "
            text2="PROJECTS"
            paragraph="Applications developed specifically for mobile devices."
          />
          <Suspense
            fallback={
              <div className="text-center py-12">
                Loading mobile projects...
              </div>
            }
          >
            <EachBoxes sorted={sortedMobile} category="mobile" />
          </Suspense>
        </div>
      </div>
    ),
    [sortedWorks, sortedMyProjects, sortedMobile]
  );

  return renderedContent;
};

// Use React.memo to prevent re-renders if props haven't changed
export default React.memo(CategoryAll);
