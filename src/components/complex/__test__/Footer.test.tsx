import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";
import { UserDetailsContext } from "../../Context/UserDetailsContext";
import { mockUserDetails } from "../../MockTestData/MockData";
describe("Footer Component", () => {

    it("renders the footer section correctly", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <Footer />
            </UserDetailsContext.Provider>
        );
        expect(screen.getByTestId("Footer")).toBeInTheDocument();

    });


});
