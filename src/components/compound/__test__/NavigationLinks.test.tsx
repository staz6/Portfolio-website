import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavigationLinks from "../NavigationLinks";

describe("Testing rendering of ui", () => {
  const mockSetActive = jest.fn();
  const mockSetOpenMenu = jest.fn();

  beforeEach(() => {
    mockSetActive.mockClear();
    mockSetOpenMenu.mockClear();
  });

  it("Renders all links", () => {
    render(<NavigationLinks Active="about" handleScroll={() => { }} />);

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

});
