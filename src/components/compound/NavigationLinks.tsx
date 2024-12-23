import React from "react";

type Props = {
  setOpenMenu?: (openMenu: boolean) => void;
};

const NavigationLinks: React.FC<Props> = ({ setOpenMenu }) => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      { setOpenMenu && setOpenMenu(false) }
    }
  };

  return (
    <div data-testid="NavigationLinks" className="flex md:flex-row flex-col gap-5 lg:gap-10 font-medium">
      <a
        className="hover:text-black dark:text-gray-300 text-gray-600 transition-all duration-200"
        href="#about"
        onClick={(e) => handleScroll(e, "about")}
      >
        About
      </a>
      <a
        className="hover:text-black dark:text-gray-300 text-gray-600 transition-all duration-200"
        href="#work"
        onClick={(e) => handleScroll(e, "work")}
      >
        Work
      </a>
      <a
        className="hover:text-black dark:text-gray-300 text-gray-600 transition-all duration-200"
        href="#testimonials"
        onClick={(e) => handleScroll(e, "testimonials")}
      >
        Testimonials
      </a>
      <a
        className="hover:text-black dark:text-gray-300 text-gray-600 transition-all duration-200"
        href="#contact"
        onClick={(e) => handleScroll(e, "contact")}
      >
        Contact
      </a>
    </div>
  );
};

export default NavigationLinks;
