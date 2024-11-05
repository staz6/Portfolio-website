import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNav from "../MobileNav";

describe("MobileNav component tests", () => {
  it("Testing rendering of ui", () => {
    render(<MobileNav openMenu={true} />);
    expect(screen.getByTestId("NavigationLinks")).toBeInTheDocument();
    expect(screen.getByTestId("ActionPanel")).toBeInTheDocument();
  });
});
