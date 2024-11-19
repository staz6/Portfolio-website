import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import HeroSection from "../HeroSection";
import "@testing-library/jest-dom";
import { UserDetailsContext } from "../../Context/UserDetailsContext";

const mockUserDetails = {
  name: "John Doe",
  description: "A passionate software developer.",
  detailedDescription: [
    "I have been developing web applications for over 5 years.",
    "I specialize in JavaScript and React, but also have experience with Node.js and Express.",
    "I enjoy learning new technologies and improving my skills."
  ],
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
  skillSet: [
    {
      name: "JavaScript",
      _rawImage: {
        _type: "image",
        asset: {
          _ref: "image-12345-400x400-jpg",
          _type: "reference",
        },
      },
    },
    {
      name: "React",
      _rawImage: {
        _type: "image",
        asset: {
          _ref: "image-67890-400x400-jpg",
          _type: "reference",
        },
      },
    },
    {
      name: "Node.js",
      _rawImage: {
        _type: "image",
        asset: {
          _ref: "image-11223-400x400-jpg",
          _type: "reference",
        },
      },
    },

  ],
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
