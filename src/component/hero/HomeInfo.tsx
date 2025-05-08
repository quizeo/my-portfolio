const HomeInfo = () => {
  return (
    <div className="text-center lg:text-left">
      <h2 className="text-[24px] md:text-[32px] font-bold tracking-wider">
        JOHN LLOYD
      </h2>
      <span
        className="block text-[60px] sm:text-[72px] md:text-[96px] md:font-bold leading-none tracking-wide"
        style={{ color: "var(--secondary)", fontFamily: "var(--font-krona)" }}
      >
        QUIZEO
      </span>
      <p className="font-bold text-xl md:text-2xl mt-3 md:mt-4">
        {"<SOFTWARE DEVELOPER />"}
      </p>
    </div>
  );
};

export default HomeInfo;
