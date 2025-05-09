import NavLinks from "../navbar/NavLinks";
import Copyright from "./Copyright";
import SocialLink from "./SocialLinks";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1415px] mx-auto  px-6 xl:px-4 mt-9 ">
        <div className="border-t border-t-[#333] pt-8"></div>
        <ul
          className="flex gap-12 flex-col md:flex-row justify-center items-center "
          style={{
            fontFamily: "var(--font-krona)",
          }}
        >
          <NavLinks />
        </ul>
        <SocialLink />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
