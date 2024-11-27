import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ActionPanel from "./ActionPanel";
import NavigationLinks from "./NavigationLinks";

interface Props {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

const MobileNav: React.FC<Props> = ({ openMenu, setOpenMenu }) => {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          initial={{ translateX: "100%" }} 
          animate={{ translateX: "0%" }}   
          exit={{ translateX: "100%" }}   
          transition={{ duration: 0.3, ease: "easeInOut" }} 
          data-testid="MobileNav"
          className="fixed top-0 left-0 w-full h-[30rem]  z-20 pt-28 text-center bg-white dark:bg-gray-950"
        >
          <div className="px-10 pb-10">
            <div className="w-fit text-start">
              <NavigationLinks setOpenMenu={setOpenMenu} />
            </div>
            <div className="mt-5">
              <ActionPanel />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
