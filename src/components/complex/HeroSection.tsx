import React from "react";
import { GrLocation } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { name, description, location, linkedinLink, githubLink, availability, profileImage } = useUserDetails();

  return (
    <Wrapper className="dark:bg-gray-950 py-5 ">
      <div className="grid mt-24 grid-cols-12 overflow-hidden items-center font-inter mb-10">
        <div className="col-span-12 text-start sm:text-center lg:text-start order-2 lg:col-span-8">
          <h1
            data-testid="Name"
            className="text-4xl sm:text-6xl font-bold dark:text-gray-50 text-gray-900"
            data-aos="fade-up"
          >
            Hi, I’m {name}{" "}
            <motion.span
              className="inline-block origin-bottom"
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </h1>
          <p
            data-testid="Description"
            className="lg:w-[33rem] m-auto lg:mx-0 text-start sm:text-center lg:text-start   sm:w-[25rem] xl:w-[48rem] text-gray-600 dark:text-gray-300 mt-5 mb-10"
            data-aos="fade-right"
          >
            {description}
          </p>
          <div
            data-testid="Location"
            className="flex capitalize justify-start sm:justify-center lg:justify-start mb-2 dark:text-gray-300 text-gray-600 gap-2 items-center"
            data-aos="fade-left"
          >
            <GrLocation size={24} />
            <span>{location}</span>
          </div>
          <div
            className="flex justify-start sm:justify-center lg:justify-start dark:text-gray-300 text-gray-600 items-center gap-2"
            data-aos="zoom-in"
          >
            <span className="text-emerald-500">
              <GoDotFill size={24} />
            </span>
            <span>
              {availability ? "Available for new projects" : "Not available"}
            </span>
          </div>
          <div
            data-testid="SocialLinks"
            className="flex gap-5 justify-start sm:justify-center lg:justify-start dark:text-gray-300 text-gray-600 mt-10"
          >
            <a
              className="hover:text-gray-900"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <LuGithub size={24} />
            </a>
            <a
              className="hover:text-gray-900"
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="col-span-12 order-1 lg:order-3 lg:col-span-4 relative mt-10 flex w-full h-full justify-center lg:justify-end">
          <div className="bg-gray-200 max-w-80 sm:max-w-full z-0 absolute w-[100%] h-80 sm:h-80 sm:w-80 lg:w-72"></div>
          <img
            data-testid="PortfolioPic"
            className="sm:h-80 w-[90%] h-80 max-w-72 sm:max-w-full sm:w-72 z-10 lg:mr-10 mb-10 relative bottom-5 lg:bottom-12"
            src={profileImage.asset.url}
            alt={name}
            data-aos="fade-up"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
