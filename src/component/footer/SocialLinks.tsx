import { Link } from "react-router-dom";
import { socialMediaLinks } from "../../data/links";
import email from "../../assets/footer/email.png";

const SocialLinks = () => {
  return (
    <div>
      <div className="flex flex-row justify-center  gap-8 mt-8">
        {socialMediaLinks.map((link) => {
          return (
            <Link
              to={link.path}
              key={link.id}
              target="_blank"
              className="text-[20px] text-[#333] hover:text-[#fff] transition-colors"
            >
              <img
                src={link.icon}
                alt={link.text}
                className="w-[40px] h-[40px]"
              />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-4 mt-5">
        <img src={email} alt="email" className="w-[40px] h-[40px]" />

        <a className="hover:underline" href="mailto:johnkiezquizeo@gmail.com">
          johnkiezquizeo@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
