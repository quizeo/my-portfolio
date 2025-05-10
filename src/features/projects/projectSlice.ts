import { createSlice } from "@reduxjs/toolkit";

import { works } from "../../data/works";
import { myProjects } from "../../data/myProjects";
import { mobile } from "../../data/mobile";

// Get all projects combined
const getAllProjects = () => {
  const sortedWorks = [...works].sort((a, b) => b.id - a.id);
  const sortedMyProjects = [...myProjects].sort((a, b) => b.id - a.id);
  const sortedMobile = [...mobile].sort((a, b) => b.id - a.id);
  const allProjects = [...sortedWorks, ...sortedMyProjects, ...sortedMobile];
  return allProjects;
};

const initialState = {
  allProjects: getAllProjects(),
  filteredProjects: getAllProjects(),
  activeCategory: "all",
  isLoading: false,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    selectCategory: (state, action) => {
      const activeCategory = action.payload;
      state.activeCategory = activeCategory;

      // Apply the filtering logic
      if (activeCategory === "all") {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) => {
          // Special handling for HTML and CSS categories
          if (activeCategory === "htmlcss") {
            return (
              project.tech.includes("html") || project.tech.includes("css")
            );
          }
          // Regular filtering for other categories
          return (
            project.platform.includes(activeCategory) ||
            project.tech.includes(activeCategory)
          );
        });
      }
    },
  },
});

export const { selectCategory, setLoading } = projectSlice.actions;
export default projectSlice.reducer;
