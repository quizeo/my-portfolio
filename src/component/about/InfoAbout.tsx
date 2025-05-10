import SectionTitle from "../global/SectionTitle";

const InfoAbout = () => {
  return (
    <div className="text-center lg:text-left">
      <SectionTitle text1="About " text2="Me" />
      <p className="mt-8">
        I am a passionate Web and Mobile Developer with a degree in Information
        Technology. With a strong foundation in both frontend and backend
        technologies, I have built multiple projects that demonstrate my
        versatility and drive in software development. My skill set spans across
        modern tools and frameworks such as Flutter, Node.js, Express.js, React,
        Next.js, Firebase, MySQL, and RESTful APIs, as well as UI/UX design
        using Figma and Adobe Photoshop.
      </p>
      <p className="mt-5">
        One of my proudest achievements is developing a solo mobile application
        project for community cyclists and hobbyists, which reached the Regional
        Finals in the Philippines Start Up Challenge 7 (October 2022). You can
        view the project here: Ta_Rides on GitHub.
      </p>
      <p className="mt-5">
        I continuously strive to innovate and improve, always eager to learn and
        contribute to meaningful software solutions.
      </p>
    </div>
  );
};

export default InfoAbout;
