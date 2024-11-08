import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import "@testing-library/jest-dom";
import Experience from "../Experience";

describe("Experience component tests", () => {
  it("Testing rendering of UI", () => {
    render(<Experience />);
    expect(screen.getByTestId("SectionTitle")).toBeInTheDocument();
    expect(screen.getByTestId("ExperienceSection")).toBeInTheDocument();
    expect(screen.getByTestId("Description")).toBeInTheDocument();
  });
});
