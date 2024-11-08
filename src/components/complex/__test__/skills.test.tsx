import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import "@testing-library/jest-dom";
import Skills from "../Skills";

describe("HeroSection Component tests", () => {
  it("Testing rendering of UI", () => {
    render(<Skills />);
    expect(screen.getByTestId("SectionTitle")).toBeInTheDocument();
    expect(screen.getByTestId("Description")).toBeInTheDocument();
    expect(screen.getByTestId("SkillsSetDesktop")).toBeInTheDocument();
    expect(screen.getByTestId("SkillsSetMobile")).toBeInTheDocument();
    
    
  });
});
