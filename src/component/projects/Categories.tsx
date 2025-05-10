import { categories } from "../../data/categories";

const Categories = ({
  handleCategoryChange,
  activeCategory,
  isLoading,
}: {
  handleCategoryChange: (category: string) => void;
  activeCategory: string;
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-10">
      {categories.map((category) => {
        const { id, name, alias } = category;
        return (
          <button
            key={id}
            onClick={() => handleCategoryChange(alias)}
            style={{
              fontFamily: "var(--font-krona)",
            }}
            className={`px-4 py-2 uppercase rounded-full transition-all duration-300 ${
              activeCategory === alias
                ? "bg-secondary text-[#fd6c03]"
                : "bg-[#fd6c03] text-white hover:bg-transparent hover:text-[#fd6c03] transition-all duration-500"
            }`}
            type="button"
            disabled={isLoading}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
