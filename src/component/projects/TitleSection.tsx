const TitleSection = ({
  text1,
  text2,
  paragraph,
}: {
  text1: string;
  text2: string;
  paragraph: string;
}) => {
  return (
    <div className="mt-12 text-center lg:text-left">
      <h1 className="text-4xl uppercase">
        {text1} <span className="text-white">{text2}</span>
      </h1>
      <p className="mt-2 text-xl">{paragraph}</p>
    </div>
  );
};

export default TitleSection;
