import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import HeroSection from "../HeroSection";
import "@testing-library/jest-dom";
import { UserDetailsContext } from "../../Context/UserDetailsContext";
import { mockUserDetails } from "../../MockTestData/MockData";





describe("HeroSection Component tests", () => {
    it("Testing rendering of UI", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <HeroSection />
            </UserDetailsContext.Provider>
        );
        expect(screen.getByTestId("Herosection")).toBeInTheDocument();
        expect(screen.getByTestId("Name")).toBeInTheDocument();
        expect(screen.getByTestId("Description")).toBeInTheDocument();
        expect(screen.getByTestId("Shortdescription")).toBeInTheDocument();

    });
});
