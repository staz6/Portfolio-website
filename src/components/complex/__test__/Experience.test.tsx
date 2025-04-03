import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import "@testing-library/jest-dom";
import Experience from "../Experience";
import { UserDetailsContext } from "../../Context/UserDetailsContext";
import { mockUserDetails } from "../../MockTestData/MockData";
class MockIntersectionObserver implements IntersectionObserver {
    root = null
    rootMargin = ''
    thresholds = []
    
    constructor() {}
    
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }
  
  global.IntersectionObserver = MockIntersectionObserver


describe("Experience component tests", () => {
  it("Testing rendering of UI", () => {
    render(
      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
        <Experience />
      </UserDetailsContext.Provider>
    );
    expect(screen.getByTestId("Experience")).toBeInTheDocument();
  });
});
