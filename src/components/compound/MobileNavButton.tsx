import React from "react";
import Button from "../shared/Button";

interface Props {
  setOpenMenu: (openMenu: boolean) => void;
  openMenu: boolean;
}

const MobileNavButton: React.FC<Props> = ({ setOpenMenu, openMenu }) => {
  return (
      <Button
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        description=""
        className="flex items-center lg:hidden"
        icon=""
        testid="MobileNavBtn"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          ></path>
        </svg>

      </Button>
  );
};

export default MobileNavButton;
