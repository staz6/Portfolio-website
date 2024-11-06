import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Aboutme from "./../Aboutme";
import "@testing-library/jest-dom";

describe("About Me component tests", () => {
  it("Testing rendering of UI", () => {
    render(<Aboutme />);
    expect(screen.getByTestId("SectionTitle")).toBeInTheDocument();
    expect(screen.getByTestId("PortfolioPic")).toBeInTheDocument();
    expect(screen.getByTestId("Description")).toBeInTheDocument();
  });
});
