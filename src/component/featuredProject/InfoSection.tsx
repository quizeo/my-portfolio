const InfoSection = () => {
  return (
    <div className="text-center ">
      <h1
        className="text-[40px]"
        style={{ color: "var(--secondary)", fontFamily: "var(--font-krona)" }}
      >
        FEATURED <span className="text-white">PROJECTS</span>
      </h1>
      <p className="w-full md:w-[60%] mx-auto mt-4">
        These are some of my top projects that highlight my skills in building
        smart, real-world software solutions. Each one is a mix of creativity,
        coding, and problem-solving.
      </p>
    </div>
  );
};

export default InfoSection;
