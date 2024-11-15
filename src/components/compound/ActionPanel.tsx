import React from "react";
import Button from "../shared/Button";
import ThemeChanger from "./ThemeChanger";
import { useUserDetails } from "../Context/UserDetailsContext";

const ActionPanel = () => {
  const { cvDocument } = useUserDetails();

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
    } else {
      console.error("CV document URL is not available.");
    }
  };

  return (
    <div
      data-testid="ActionPanel"
      className="flex md:flex-row flex-col items-center gap-5"
    >
      <ThemeChanger />
      <Button
        description="Download CV"
        className="text-gray-50 dark:text-gray-900 w-full md:w-fit text-nowrap dark:hover:bg-gray-300 dark:bg-gray-50 bg-gray-900 rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 p-2 px-4"
        onClick={handleDownloadCV}
        icon=""
      />
    </div>
  );
};

export default ActionPanel;
