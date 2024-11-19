import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import "@testing-library/jest-dom";
import Experience from "../Experience";
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
  Experience: [
    {
      CompanyName: "Creative Dev Studio",
      PositionName: "Software Engineer",
      Description: "Led a team to deliver high-quality software solutions, ensuring scalable architecture and maintainable code. Focused on modernizing legacy systems with Node.js and microservices.",
      StartDate: "2024-01-01",
      EndDate: "Present",
    },
  ],
};


describe("Experience component tests", () => {
  it("Testing rendering of UI", () => {
    render(
      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
        <Experience />
      </UserDetailsContext.Provider>
    );
    expect(screen.getByTestId("SectionTitle")).toBeInTheDocument();
    expect(screen.getByTestId("ExperienceSection")).toBeInTheDocument();
    expect(screen.getByTestId("Description")).toBeInTheDocument();
  });
});
