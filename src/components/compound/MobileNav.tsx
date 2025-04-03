import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ActionPanel from "./ActionPanel";
import NavigationLinks from "./NavigationLinks";
import { RxCross2 } from "react-icons/rx";
import Button from "../shared/Button";
interface Props {
  setOpenMenu: (openMenu: boolean) => void;
  openMenu: boolean;
  Active: string;
  handleScroll: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => void;
}

const MobileNav: React.FC<Props> = ({ openMenu, Active, handleScroll, setOpenMenu }) => {
  return (
    <div data-testid="MobileNav">
      <div

        className={`fixed top-0 left-0 transform transition-all duration-500 w-full h-screen z-20 text-center bg-black bg-opacity-70 ${openMenu ? "translate-x-0 " : "translate-x-[-100%]"
          }`}
      >
      </div>
      <div
        className={`px-10 fixed top-0 left-0 z-50 transform transition-all duration-500 pt-28 pb-10 h-screen w-[80%] md:w-[60%] delay-300 bg-customDarkPurple ${openMenu ? "translate-x-0 " : "translate-x-[-100%] "
          }`}
      >
        <Button
          onClick={() => setOpenMenu(false)}
          description=""
          className="absolute right-6 top-10"
          icon={<RxCross2 size={24} color="white" />}
        />
        <div className="w-fit text-start">
          <NavigationLinks handleScroll={handleScroll} Active={Active} />
        </div>
      </div>
    </div>
  );
};




export default MobileNav;
