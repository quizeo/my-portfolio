import { useMemo } from "react";
import TitleSection from "./TitleSection";
import { works } from "../../data/works";
import { myProjects } from "../../data/myProjects";
import { mobile } from "../../data/mobile";
import EachBoxes from "./EachBoxes";

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

  return (
    <div>
      {/* WORK */}
      <div>
        <TitleSection
          text1="Work"
          text2="Project"
          paragraph="Projects I've been involved in as a professional front-end developer."
        />
        <EachBoxes sorted={sortedWorks} category="work" />
      </div>

      {/* MY PROJECT */}
      <div className="border-t border-t-[#333] pt-8">
        <TitleSection
          text1="SELF-MADE"
          text2="FUN PROJECTS"
          paragraph="Personal projects built for exploration and skill development."
        />
        <EachBoxes sorted={sortedMyProjects} category="myProjects" />
      </div>

      {/* MOBILE PROJECTS */}
      <div className="border-t border-t-[#333] pt-8">
        <TitleSection
          text1="MOBILE "
          text2="PROJECTS"
          paragraph="Applications developed specifically for mobile devices."
        />
        <EachBoxes sorted={sortedMobile} category="mobile" />
      </div>
    </div>
  );
};

export default CategoryAll;
