import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNav from "../MobileNav";
import { UserDetailsContext } from "../../Context/UserDetailsContext";
import { ThemeProvider } from "../../Context/ThemeChangerContext";
import { mockUserDetails } from "../../MockTestData/MockData";


describe("MobileNav component tests", () => {
    it("Testing rendering of ui", () => {
        render(<UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
            <ThemeProvider>
                <MobileNav setOpenMenu={() => { }} handleScroll={() => { }} Active="" openMenu={true} />
            </ThemeProvider>
        </UserDetailsContext.Provider>
        );
        expect(screen.getByTestId("NavigationLinks")).toBeInTheDocument();
    });
});
