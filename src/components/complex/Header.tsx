import React, { useState } from "react";
import Button from "../shared/Button";
import { IoSunnyOutline } from "react-icons/io5";
import NavigationLinks from "../compound/NavigationLinks";
import ActionPanel from "../compound/ActionPanel";
import MobileNav from "../compound/MobileNav";
import MobileNavButton from "../compound/MobileNavButton";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="flex  justify-between font-inter items-center ">
      <h1 data-testid="logo" className="text-3xl font-bold text-gray-900">
        {`<`}
        <span className="text-4xl">ss</span>
        {`/>`}
      </h1>
      <div className="hidden md:flex items-center gap-10">
        <NavigationLinks />
        <ActionPanel />
      </div>
        <MobileNavButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <MobileNav openMenu={openMenu} />
    </header>
  );
};

export default Header;
