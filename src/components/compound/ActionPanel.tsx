import React from "react";
import Button from "../shared/Button";
import ThemeChanger from "./ThemeChanger";

const ActionPanel = () => {
  return (
    <div
      data-testid="ActionPanel"
      className="flex md:flex-row flex-col items-center gap-5"
    >
      <ThemeChanger />
      <Button
        description="Download CV"
        className="text-gray-50 dark:text-gray-900 w-full md:w-fit text-nowrap dark:hover:bg-gray-300 dark:bg-gray-50 bg-gray-900 rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 p-2 px-4"
        onClick={() => { }}
        icon=""
      />
    </div>
  );
};

export default ActionPanel;
