import React, { useState } from "react";
import Button from "../shared/Button";
import { IoSunnyOutline } from "react-icons/io5";
import NavigationLinks from "../compound/NavigationLinks";
import ActionPanel from "../compound/ActionPanel";
import MobileNav from "../compound/MobileNav";
import MobileNavButton from "../compound/MobileNavButton";
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const {NameAcronym}=useUserDetails()
  return (
    <header className="fixed z-20 w-full" >
      <Wrapper className=" flex relative justify-between font-inter items-center  w-full py-5">
        <h1 data-testid="logo" className="text-3xl font-bold dark:text-gray-50 z-30 text-gray-900">
          {`<`}
          <span className="text-4xl">{NameAcronym}</span>
          {`/>`}
        </h1>
        <div className="hidden md:flex items-center gap-10">
          <NavigationLinks   />
          <ActionPanel />
        </div>
        <MobileNavButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
      </Wrapper>
      <MobileNav setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </header>
  );
};

export default Header;
