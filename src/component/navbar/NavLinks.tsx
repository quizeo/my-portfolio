import { NavLink } from "react-router-dom";
import { links } from "../../data/links";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FD6C03] text-[15px]  lg:text-lg"
                  : " hover:text-[#FD6C03] transition-all duration-300 text-[15px]  lg:text-lg"
              }
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
