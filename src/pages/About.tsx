import myPicture from "../assets/hero/image.png";
import InfoAbout from "../component/about/InfoAbout";
import Skills from "../component/about/Skills";

const About = () => {
  return (
    <div>
      {/* Info */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2  gap-8 items-center mt-8">
        <InfoAbout />
        <img
          src={myPicture}
          alt="my picture"
          className="max-w-[600px] w-full relative lg:left-0 xl:left-20 "
        />
      </div>
      {/* Skill */}

      <div className="mt-8 border-t border-t-[#333] pt-8 max-w-[1200px] w-full mx-auto">
        <h1 className="uppercase text-center text-[30px] md:text-[40px] mb-8">
          My <span className="text-white">skill</span>
        </h1>
        <Skills />
      </div>
    </div>
  );
};

export default About;
