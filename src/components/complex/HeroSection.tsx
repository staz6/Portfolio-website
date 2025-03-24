import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { useUserDetails } from "../Context/UserDetailsContext";
import Button from "../shared/Button";
import { FaDownload } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const { name, description, Shortdescription, location, cvDocument, profileImage } = useUserDetails();
  const handleDownloadCV = () => {
    if (cvDocument?.asset?.url) {
      const fileUrl = cvDocument.asset.url;
      const fileName = fileUrl.split("/").pop() || "CV";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div
    data-testid="Herosection"
    id="herosection"
    className="w-full sm:pt-[4vh] pt-28 md:pt-[12vh] h-[50rem] sm:h-screen bg-[#0f0715] relative overflow-hidden"
  >
    <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="max-w-full">
          <h1
            data-testid="Name"
            data-aos="fade-left"
            className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold w-full" 
          >
            I am {name}
          </h1>
          <h1
            data-testid="Description"
            data-aos="fade-right"
            data-aos-delay="100"
            className="bg-linearGradientHeading to-white bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold w-full"
          >
            {description}
          </h1>
          <p
            data-testid="Shortdescription"
            data-aos="fade-left"
            data-aos-delay="200"
            className="mt-6 text-sm md:text-base text-white text-opacity-60 w-full"
          >
            {Shortdescription}
          </p>
          <Button
            data-aos="zoom-in"
            data-aos-delay="300"
            description="Download CV"
            className="md:px-8 w-fit md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
            onClick={handleDownloadCV}
            icon={<FaDownload />}
          />
        </div>
        <div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="h-[31rem] w-[31rem] mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden"
          >
            {profileImage?.asset?.url && (
              <img className="h-full w-full" src={profileImage.asset.url} alt={name} />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default HeroSection;
