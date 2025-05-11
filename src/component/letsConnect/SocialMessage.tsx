import { socialMessage } from "../../data/links";

const SocialMessage = () => {
  return (
    <div className="flex xl:flex-col gap-y-12 sm:justify-center gap-x-8 flex-wrap">
      {socialMessage.map((social) => {
        const { id, text, path, name, message, icon } = social;
        return (
          <div key={id} className="flex  items-center ">
            <div className="flex items-center">
              <img src={icon} alt={text} className="w-8 h-8 mr-4 " />
              <div className="flex flex-col">
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-lg font-bold text-[#fd6c03] hover:text-[#333] transition duration-300"
                  style={{ fontFamily: "var(--font-krona)" }}
                >
                  {name}
                </a>
                <p className="text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMessage;
