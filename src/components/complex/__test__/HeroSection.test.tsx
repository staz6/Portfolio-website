import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import HeroSection from "../HeroSection";
import "@testing-library/jest-dom";

describe("HeroSection Component tests", () => {
  it("Testing rendering of UI", () => {
    render(<HeroSection />);
    expect(screen.getByTestId("Name")).toBeInTheDocument();
    expect(screen.getByTestId("Description")).toBeInTheDocument();
    expect(screen.getByTestId("Location")).toBeInTheDocument();
    expect(screen.getByTestId("SocialLinks")).toBeInTheDocument();
  });
});
