import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import Button from "../shared/Button";

const ActionPanel = () => {
  return (
    <div
      data-testid="ActionPanel"
      className="flex md:flex-row flex-col items-center gap-5"
    >
      <Button
        description=""
        className="flex mt-5 md:mt-0 justify-between w-full items-center"
        onClick={() => {}}
        icon={""}
      >
        <span className="md:hidden block">Switch Theme</span>
        <IoSunnyOutline size={26} />
      </Button>
      <Button
        description="Download CV"
        className="text-gray-50 w-full md:w-fit text-nowrap bg-gray-900 rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 p-2 px-4"
        onClick={() => {}}
        icon=""
      />
    </div>
  );
};

export default ActionPanel;
