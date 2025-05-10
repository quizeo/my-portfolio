import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-4 gap-y-6 justify-center mt-4 mb-12 ">
      {skills.map((map) => {
        const { id, name, icon } = map;
        return (
          <div key={id} className="w-[130px] text-center">
            <div className="h-[60px] flex flex-col justify-center mt-2">
              <img src={icon} alt={name} className="mx-auto " />
            </div>
            <p
              style={{ fontFamily: "var(--font-krona)" }}
              className=" mt-4 uppercase text-[12px]"
            >
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
