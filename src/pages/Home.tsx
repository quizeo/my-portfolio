import HomeInfo from "../component/hero/HomeInfo";
import illustration from "../assets/hero/illustration.png";
import InfoSection from "../component/featuredProject/InfoSection";
import { works } from "../data/works";
import { myProjects } from "../data/myProjects";
import { mobile } from "../data/mobile";
import FeaturedBoxes from "../component/featuredProject/FeaturedBoxes";
import { useLoaderData } from "react-router-dom";

export const loader = () => {
  const featuredWorks = works.filter((work) => work.featured === true);
  const featuredProjects = myProjects.filter(
    (project) => project.featured === true
  );
  const featuredMobile = mobile.filter((project) => project.featured === true);
  const featuredItems = [
    ...featuredMobile.reverse(),
    ...featuredWorks.reverse(),
    ...featuredProjects.reverse(),
  ];

  return { featuredItems };
};

const Home = () => {
  const { featuredItems } = useLoaderData();
  console.log(featuredItems);

  return (
    <>
      {/* Hero */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center mt-12">
        <HomeInfo />
        <img
          src={illustration}
          alt="illustration"
          className="max-w-[500px] w-full lg:max-w-full"
        />
      </div>
      {/* Featured Projects */}
      <div className="mt-14 border-t border-t-[#333] pt-8">
        <InfoSection />
        <FeaturedBoxes featuredItems={featuredItems} />
      </div>
    </>
  );
};

export default Home;
