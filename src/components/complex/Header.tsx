import React, { useState } from "react";
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
  const { NameAcronym } = useUserDetails();

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

  return (
    <Scrollspy
      items={["herosection", "about", "skills","experience","work", "testimonials", "contact"]}
      currentClassName="active"
      onUpdate={(element) => {
        if (element) setActive(element.id);
      }}
      offset={-500}
    >
      <header className="fixed z-20 w-full">
        <Wrapper className="flex relative justify-between font-inter items-center w-full py-5">
          <a
            href="#herosection"
            data-testid="logo"
            className="text-3xl font-bold cursor-pointer relative group dark:text-gray-50 z-30 text-gray-900"
            onClick={(e) => handleScroll(e, "herosection")}
          >
            {`<`}
            <span className="text-4xl">{NameAcronym}</span>
            {`/>`}
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-gray-900 dark:bg-gray-50 transition-all duration-300 ${Active === "herosection"
                  ? "w-full"
                  : "w-0 group-hover:w-full "
                }`}
            ></span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            <NavigationLinks handleScroll={handleScroll} Active={Active}  />
            <ActionPanel />
          </div>
          <MobileNavButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </Wrapper>
        <MobileNav handleScroll={handleScroll} Active={Active} openMenu={openMenu} />
      </header>
      </Scrollspy>
  );
};

export default Header;
