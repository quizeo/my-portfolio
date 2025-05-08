import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useState } from "react";
import hamburger from "../../assets/nav/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* desktop */}
      <nav
        style={{
          borderBottom: "3px solid var(--secondary)",
          fontFamily: "var(--font-krona)",
        }}
        className="hidden md:block py-4 shadow-[0_4px_6px_-1px_rgba(253,108,3,0.3)]"
      >
        <div className="max-w-[1415px] mx-auto  px-6 xl:px-4 ">
          <div className="flex  justify-between items-center">
            <Logo />
            <ul className="flex gap-8">
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile */}
      <nav
        style={{
          borderBottom: "3px solid var(--secondary)",
          fontFamily: "var(--font-krona)",
        }}
        className="block md:hidden py-4 shadow-[0_4px_6px_-1px_rgba(253,108,3,0.3)]"
      >
        <div className="max-w-[1415px] mx-auto  px-6 xl:px-4 ">
          <div className="flex   justify-between items-center">
            <Logo />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <p className="text-xl">X</p>
              ) : (
                <img
                  src={hamburger}
                  alt="hamburger"
                  className="w-[38px] h-[38px]"
                />
              )}
            </button>
          </div>
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0 h-auto"
                : "opacity-0 -translate-y-10 h-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col gap-8 my-8">
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
// style={{ fontFamily: "var(--font-krona)" }}
