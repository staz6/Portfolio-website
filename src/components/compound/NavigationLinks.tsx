import React from "react";

type Props = {};

function NavigationLinks({}: Props) {
  return (
    <div data-testid="NavigationLinks" className="flex md:flex-row flex-col gap-5 md:gap-10 font-medium ">
      <a
        className="hover:text-black  text-gray-600 transition-all duration-200"
        href=""
      >
        About
      </a>
      <a
        className="hover:text-black text-gray-600 transition-all duration-200"
        href=""
      >
        Work
      </a>
      <a
        className="hover:text-black text-gray-600 transition-all duration-200"
        href=""
      >
        Testimonials
      </a>
      <a
        className="hover:text-black text-gray-600 transition-all duration-200"
        href=""
      >
        Contact
      </a>
    </div>
  );
}

export default NavigationLinks;
