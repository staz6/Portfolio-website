import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";


const HeroSection: React.FC = () => {
  const { name, description, location, linkedinLink, figmaLink, githubLink, availability, profileImage } = useUserDetails()
  return (
    <Wrapper className="dark:bg-gray-950 py-5">
      <div className="grid mt-24 grid-cols-12 items-center font-inter mb-10">
        <div className="col-span-12 text-start sm:text-center lg:text-start order-2 lg:col-span-8">
          <h1
            data-testid="Name"
            className="text-4xl sm:text-6xl font-bold dark:text-gray-50 text-gray-900"
          >
            Hi, I’m {name} 👋
          </h1>
          <p
            data-testid="Description"
            className="lg:w-[33rem] m-auto lg:mx-0 text-start sm:w-[25rem] xl:w-[48rem] dark:text-gray-300 text-gray-600 mt-5 mb-10"
          >
            {description}
          </p>
          <div
            data-testid="Location"
            className="flex justify-start sm:justify-center lg:justify-start  mb-2 dark:text-gray-300 text-gray-600 gap-2 items-center"
          >
            <GrLocation size={24} />
            <span>{location}</span>
          </div>
          <div className="flex pl-2 justify-start sm:justify-center lg:justify-start dark:text-gray-300 text-gray-600 items-center gap-2">
            <div className="bg-emerald-500 h-2 w-2 rounded-full" />
            <span>
              {availability ? "Available for new projects" : "Not available"}
            </span>
          </div>
          <div
            data-testid="SocialLinks"
            className="flex gap-5 justify-start sm:justify-center lg:justify-start dark:text-gray-300 text-gray-600 mt-10 "
          >
            <a className="hover:text-gray-900" href={githubLink}>
              <LuGithub size={24} />
            </a>
            <a className="hover:text-gray-900" href={linkedinLink}>
              <FiLinkedin size={24} />
            </a>
            <a className="hover:text-gray-900" href={figmaLink}>
              <FaFigma size={24} />
            </a>
          </div>
        </div>
        <div className="col-span-12 order-1 lg:order-3 lg:col-span-4 relative  mt-10  flex w-full h-full justify-center lg:justify-end">
          <div className="bg-gray-200 z-0 absolute w-[100%] h-80  sm:h-80  sm:w-80 lg:w-72"></div>
          <img
            data-testid="PortfolioPic"
            className="sm:h-80 w-[90%] h-80 sm:w-72 z-10 lg:mr-10 mb-10 relative bottom-5 lg:bottom-12"
            src={profileImage.asset.url}
            alt={name}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
