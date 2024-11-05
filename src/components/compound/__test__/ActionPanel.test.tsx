import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionPanel from "../ActionPanel";

describe("ActionPanel component tests", () => {
  it("renders ActionPanel component", () => {
    render(<ActionPanel />);
    const actionPanel = screen.getByTestId("ActionPanel");
    expect(actionPanel).toBeInTheDocument();
  });

  it("renders both buttons in ActionPanel", () => {
    render(<ActionPanel />);
    const switchThemeButton = screen.getByText(/Switch Theme/i);
    expect(switchThemeButton).toBeInTheDocument();

    const downloadButton = screen.getByText(/Download CV/i);
    expect(downloadButton).toBeInTheDocument();
  });

  it("checks if IoSunnyOutline icon is rendered", () => {
    render(<ActionPanel />);
    const icon = screen.getByTestId("ActionPanel").querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
