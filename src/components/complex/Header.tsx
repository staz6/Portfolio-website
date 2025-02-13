import React, { useEffect, useState } from "react";
import NavigationLinks from "../compound/NavigationLinks";
import ActionPanel from "../compound/ActionPanel";
import MobileNav from "../compound/MobileNav";
import MobileNavButton from "../compound/MobileNavButton";
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";
import Scrollspy from "react-scrollspy";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [Active, setActive] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId);
      setOpenMenu(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Scrollspy
      items={["herosection", "about", "skills", "experience", "work", "testimonials", "contact"]}
      currentClassName="active"
      onUpdate={(element) => {
        if (element) setActive(element.id);
      }}
      offset={-500}
    >
      <header
        className={`fixed   z-20 w-full font-medium  md:px-10 lg:px-12 transition-all duration-300  ${isScrolled ? "bg-customPurple shadow-md" : "bg-transparent"
          }`}
      >
        <div className="flex sm:pr-0 pr-2 relative justify-between  items-center w-full ">
          <a
            href="#herosection"
            data-testid="logo"
            className="text-3xl font-bold cursor-pointer relative group "
            onClick={(e) => handleScroll(e, "herosection")}
          >
            <img className="w-[170px] h-[102px] relative right-3 " src="	https://devportfoliowebsite.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" alt="" />
            <span
              className={`absolute left-0 bottom-7 h-0.5 bg-customYellow transition-all duration-300 ${Active === "herosection"
                ? "w-full"
                : "w-0 group-hover:w-full "
                }`}
            ></span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            <NavigationLinks handleScroll={handleScroll} Active={Active} />
          </div>
          <div className="flex items-center gap-5">
            <ActionPanel />
            <MobileNavButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
          </div>
        </div>
        <MobileNav setOpenMenu={setOpenMenu} handleScroll={handleScroll} Active={Active} openMenu={openMenu} />
      </header>
    </Scrollspy>
  );
};

export default Header;
