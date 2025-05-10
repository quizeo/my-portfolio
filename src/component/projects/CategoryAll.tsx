import TitleSection from "./TitleSection";
import { works } from "../../data/works";
import { myProjects } from "../../data/myProjects";
import { mobile } from "../../data/mobile";
import EachBoxes from "./EachBoxes";

const CategoryAll = () => {
  const sortedWorks = [...works].sort((a, b) => b.id - a.id);
  const sortedMyProjects = [...myProjects].sort((a, b) => b.id - a.id);
  const sortedMobile = [...mobile].sort((a, b) => b.id - a.id);
  return (
    <div>
      {/* WORK */}
      <div>
        {" "}
        <TitleSection
          text1="Work"
          text2="Project"
          paragraph="Projects I’ve been involved in as a professional front-end developer."
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
// MY PROJECT

// <TitleSection
//   text1="Mobile"
//   text2="Project"
//   paragraph="Projects I’ve created as a hobbyist front-end developer."
// />
// <EachBoxes sortedWorks={sortedWorks} />
