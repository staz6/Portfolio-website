import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import HeroSection from "../HeroSection";
import "@testing-library/jest-dom";
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

describe("HeroSection Component tests", () => {
  it("Testing rendering of UI", () => {
    render(
    <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
      <HeroSection />
    </UserDetailsContext.Provider>
    );
    expect(screen.getByTestId("Name")).toBeInTheDocument();
    expect(screen.getByTestId("Description")).toBeInTheDocument();
    expect(screen.getByTestId("Location")).toBeInTheDocument();
    expect(screen.getByTestId("SocialLinks")).toBeInTheDocument();
  });
});
