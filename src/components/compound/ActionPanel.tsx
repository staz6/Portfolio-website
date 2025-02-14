import React from "react";
import Button from "../shared/Button";
import { useUserDetails } from "../Context/UserDetailsContext";

const ActionPanel = () => {
  const { cvDocument } = useUserDetails();



  return (
    <div
      data-testid="ActionPanel"
      className="flex md:flex-row flex-col items-center gap-5"
    >
      {/* <Button
        description="Download CV"
        className="text-gray-50 dark:text-gray-900 w-full md:w-fit text-nowrap dark:hover:bg-gray-300 dark:bg-gray-50 bg-gray-900 rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 p-2 px-4"
        onClick={handleDownloadCV}
        icon=""
      /> */}
      <Button
        description="Hire me"
        className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg"
        onClick={() => { }}
        icon=""
      />
    </div>
  );
};

export default ActionPanel;
