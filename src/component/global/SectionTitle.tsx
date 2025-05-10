const SectionTitle = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <div>
      <h1 className=" text-[36px] md:text-[50px] lg:text-[64px] uppercase">
        {text1} <span className="text-white">{text2}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
