import TitleSection from "./TitleSection";
import { works } from "../../data/works";
import { myProjects } from "../../data/myProjects";
import EachBoxes from "./EachBoxes";

const CategoryAll = () => {
  const sortedWorks = [...works].sort((a, b) => b.id - a.id);
  const sortedMyProjects = [...myProjects].sort((a, b) => b.id - a.id);
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
      <div>
        <TitleSection
          text1="SELF-MADE"
          text2="FUN PROJECTS"
          paragraph="Personal projects built for exploration and skill development."
        />
        <EachBoxes sorted={sortedMyProjects} category="myProjects" />
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
