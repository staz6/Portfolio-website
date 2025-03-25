import { render, screen } from "@testing-library/react";
import Hireme from "../Hireme";
import "@testing-library/jest-dom";
import { UserDetailsContext } from "../../Context/UserDetailsContext";
import { mockUserDetails } from "../../MockTestData/MockData";

jest.mock("../../compound/BabylonEarth", () => () => <div data-testid="BabylonEarthMock" />);

describe("Hireme Component", () => {
    it("renders the Hireme section correctly", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <Hireme />
            </UserDetailsContext.Provider>
        );

        expect(screen.getByTestId("Hireme")).toBeInTheDocument();

    });
});
