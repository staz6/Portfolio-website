import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component Tests", () => {
  it("Testing rendering of ui", () => {
    render(<Header />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("NavigationLinks")).toBeInTheDocument();
    expect(screen.getByTestId("ActionPanel")).toBeInTheDocument();
    expect(screen.getByTestId("MobileNavBtn")).toBeInTheDocument();
  });
  it("Opens up mobile navbar onclick of menu button", () => {
    render(<Header />);
    const MobileNavBtn = screen.getByTestId("MobileNavBtn");
    fireEvent.click(MobileNavBtn);
    expect(screen.getByTestId("MobileNav")).toBeInTheDocument();
  });
});
