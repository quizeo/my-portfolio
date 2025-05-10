import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../component/global/SectionTitle";

import { selectCategory } from "../features/projects/projectSlice";
import Categories from "../component/projects/Categories";
import ProjectBoxes from "../component/projects/ProjectBoxes";
import CategoryAll from "../component/projects/CategoryAll";

function Projects() {
  const dispatch = useDispatch();
  const { filteredProjects, activeCategory } = useSelector(
    (state: { project: any }) => {
      return state.project;
    }
  );
  const [isLoading, setIsLoading] = useState(true);

  // Initialize with "all" category when component mounts
  useEffect(() => {
    setIsLoading(true);
    // Using setTimeout to ensure loading state is visible
    setTimeout(() => {
      dispatch(selectCategory("all"));
      setIsLoading(false);
    }, 800);
  }, [dispatch]);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    // Using setTimeout to ensure loading state is visible
    setTimeout(() => {
      dispatch(selectCategory(category));
      setIsLoading(false);
    }, 200);
  };

  return (
    <div className="mt-12">
      <div className="text-center lg:text-left">
        <SectionTitle text1="my" text2="projects" />
      </div>

      {/* Categories */}
      <Categories
        handleCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
        isLoading={isLoading}
      />

      {/* Loading indicator */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary"></div>
        </div>
      ) : activeCategory === "all" ? (
        <div className="border-t border-t-[#333] ">
          <CategoryAll />
        </div>
      ) : (
        /* Projects Grid */
        <div className="border-t border-t-[#333] ">
          <ProjectBoxes filteredProjects={filteredProjects} />
        </div>
      )}
    </div>
  );
}

export default Projects;
