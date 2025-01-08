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
    `relative group transition-all w-fit  duration-200 ${
      Active === sectionId ? "text-black dark:text-gray-50" : "text-gray-600 dark:text-gray-300"
    } hover:text-black dark:hover:text-gray-50`;

  const underlineClasses = (sectionId: string) =>
    `absolute left-0 bottom-0 h-0.5 bg-black dark:bg-gray-50 transition-all duration-300 
    ${Active === sectionId ? "w-full" : "w-0 group-hover:w-full"}`;

  return (
    <div data-testid="NavigationLinks" className="flex md:flex-row flex-col gap-5 lg:gap-10 font-medium">
      {[
        { id: "about", label: "About" },
        { id: "work", label: "Work" },
        { id: "testimonials", label: "Testimonials" },
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
