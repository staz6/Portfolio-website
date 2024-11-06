import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import image from "../../images/PortfolioPic.png";

const HeroSection: React.FC = () => {
  return (
    <div className="grid mt-24 grid-cols-12 items-center font-inter mb-10">
      <div className="col-span-12 text-start sm:text-center lg:text-start order-2 lg:col-span-8">
        <h1
          data-testid="Name"
          className="text-4xl sm:text-6xl font-bold text-gray-900"
        >
          Hi, I’m Aahad 👋
        </h1>
        <p
          data-testid="Description"
          className="lg:w-[33rem] m-auto lg:mx-0 text-start sm:w-[25rem] xl:w-[48rem] text-gray-600 mt-5 mb-10"
        >
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div
          data-testid="Location"
          className="flex justify-start sm:justify-center lg:justify-start  mb-2 text-gray-600 gap-2 items-center"
        >
          <GrLocation size={24} />
          <span>Karachi , Pakistan</span>
        </div>
        <div className="flex pl-2 justify-start sm:justify-center lg:justify-start text-gray-600 items-center gap-2">
          <div className="bg-emerald-500 h-2 w-2 rounded-full" />
          <span>Available for new projects</span>
        </div>
        <div
          data-testid="SocialLinks"
          className="flex gap-5 justify-start sm:justify-center lg:justify-start text-gray-600 mt-10 "
        >
          <a href="">
            <LuGithub size={24} />
          </a>
          <a href="">
            <FiTwitter size={24} />
          </a>
          <a href="">
            <FaFigma size={24} />
          </a>
        </div>
      </div>
      <div className=" col-span-12 order-1 lg:order-3 lg:col-span-4 relative  mt-10  flex w-full h-full justify-center lg:justify-end">
        <div className="bg-gray-200 z-0 absolute  h-80 w-80 lg:w-72"></div>
        <img
          data-testid="PortfolioPic"
          className=" h-80  w-72 z-10 lg:mr-10 mb-10 relative bottom-5 lg:bottom-12  "
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
