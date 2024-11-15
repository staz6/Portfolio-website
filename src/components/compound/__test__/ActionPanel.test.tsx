import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionPanel from "../ActionPanel";
import { UserDetailsContext } from "../../Context/UserDetailsContext";

const mockUserDetails = {
  name: "John Doe",
  description: "A passionate software developer.",
  location: "New York, USA",
  availability: true,
  githubLink: "https://github.com/johndoe",
  linkedinLink: "https://linkedin.com/in/johndoe",
  figmaLink: "https://figma.com/@johndoe",
  profileImage: {
    asset: {
      url: "https://example.com/profile.jpg",
    },
  },
  cvDocument: {
    asset: {
      url: "https://example.com/johndoe_cv.pdf",
    },
  },
};
describe("ActionPanel component tests", () => {
  it("renders ActionPanel component", () => {
    render(
      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
      <ActionPanel />
      </UserDetailsContext.Provider>
    );
    const actionPanel = screen.getByTestId("ActionPanel");
    expect(actionPanel).toBeInTheDocument();
  });

  it("renders both buttons in ActionPanel", () => {
    render(<UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
      <ActionPanel />
      </UserDetailsContext.Provider>);
    const switchThemeButton = screen.getByText(/Switch Theme/i);
    expect(switchThemeButton).toBeInTheDocument();

    const downloadButton = screen.getByText(/Download CV/i);
    expect(downloadButton).toBeInTheDocument();
  });

  it("checks if IoSunnyOutline icon is rendered", () => {
    render(<UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
      <ActionPanel />
      </UserDetailsContext.Provider>);
    const icon = screen.getByTestId("ActionPanel").querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
