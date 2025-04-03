import React from "react";

type Props = {
  Active: string;
  handleScroll: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => void; 
};

const NavigationLinks: React.FC<Props> = ({ Active , handleScroll }) => {

  const linkClasses = (sectionId: string) =>
    `relative group transition-all text-white w-fit  duration-200 ${
      Active === sectionId ? "" : ""
    } `;

  const underlineClasses = (sectionId: string) =>
    `absolute left-0 bottom-0 h-0.5 bg-customYellow transition-all duration-300 
    ${Active === sectionId ? "w-full" : "w-0 group-hover:w-full"}`;

  return (
    <div data-testid="NavigationLinks" className="flex lg:text-base text-xl sm:text-3xl lg:flex-row flex-col gap-5 lg:gap-10 ">
      {[
        { id: "about", label: "About" },
        { id: "Services", label: "Services" },
        { id: "Projects", label: "Projects" },
        { id: "Reviews", label: "Reviews" },
        { id: "contact", label: "Contact" },
      ].map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => handleScroll(e, link.id)}
          className={linkClasses(link.id)}
        >
          {link.label}
          <span className={underlineClasses(link.id)}></span>
        </a>
      ))}
    </div>
  );
};

export default NavigationLinks;
