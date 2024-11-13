import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {

    it("renders the footer section correctly", () => {
        render(<Footer />);
        expect(screen.getByTestId("SectionTitle")).toBeInTheDocument();
        expect(screen.getByTestId("Description")).toBeInTheDocument();
        expect(screen.getByTestId("SocialLinks")).toBeInTheDocument();
    });

    
});
