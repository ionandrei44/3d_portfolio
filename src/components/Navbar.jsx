import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@material-tailwind/react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openDrawer = () => {
    document.body.style.overflowY = "hidden";
    setIsMenuOpen(true);
  };

  const closeDrawer = () => {
    document.body.style.overflowY = "scroll";
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 540) {
        closeDrawer();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary h-[88px] shadow-md`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Andrei Ion
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <a href={`#${link.id}`} key={link.id}>
                <li
                  className={`border-b ${
                    active === link.title
                      ? "text-white border-b-white"
                      : "text-secondary border-b-transparent"
                  } hover:text-white hover:border-b-white text-[18px] font-medium cursor-pointer transition-all duration-300`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </li>
              </a>
            ))}
          </ul>

          <div className="sm:hidden block">
            <MenuIcon
              fontSize="large"
              className="cursor-pointer"
              onClick={openDrawer}
            />
          </div>
        </div>
      </nav>
      <Drawer
        open={isMenuOpen}
        onClose={closeDrawer}
        className="px-6 py-12 bg-primary flex flex-col rounded-r-xl"
        disabledScroll
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a href={`#${link.id}`} key={link.id}>
              <li
                className={`border-b ${
                  active === link.title
                    ? "text-white border-b-white"
                    : "text-secondary border-b-transparent"
                } hover:text-white hover:border-b-white text-[18px] font-medium cursor-pointer transition-all duration-300`}
                onClick={() => {
                  setActive(link.title);
                  closeDrawer();
                }}
              >
                {link.title}
              </li>
            </a>
          ))}
        </ul>

        <div className="mt-auto flex items-center flex-col gap-6">
          <div className="h-[1px] w-full bg-secondary" />
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Andrei Ion
            </p>
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
