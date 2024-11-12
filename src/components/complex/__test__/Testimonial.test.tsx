import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import "@testing-library/jest-dom";
import Testimonials from "../Testimonials";

describe("HeroSection Component tests", () => {
    it("Testing rendering of UI", () => {
        render(<Testimonials />);
        expect(screen.getByTestId("SectionTitle")).toBeInTheDocument();
        expect(screen.getByTestId("Description")).toBeInTheDocument();
        expect(screen.getByTestId("TestimonialSection")).toBeInTheDocument();
    });
});
