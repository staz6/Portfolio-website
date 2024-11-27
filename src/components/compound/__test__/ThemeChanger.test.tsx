import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeChanger from "../ThemeChanger";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../Context/ThemeChangerContext";


beforeEach(() => {
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();
});

describe("ThemeChanger Component", () => {
    it("renders with the correct initial theme based on localStorage", () => {
        (Storage.prototype.getItem as jest.Mock).mockReturnValue("true");
        render(<ThemeProvider>
            <ThemeChanger />
        </ThemeProvider>);

        expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
        expect(document.documentElement.classList.contains("dark")).toBe(true);
    });


    it("updates localStorage on theme change", () => {
        render(<ThemeProvider>
            <ThemeChanger />
        </ThemeProvider>);
        const button = screen.getByTestId("ThemeChangerBtn");
        fireEvent.click(button);
        expect(localStorage.setItem).toHaveBeenCalledWith("isDark", "true");
        fireEvent.click(button);
        expect(localStorage.setItem).toHaveBeenCalledWith("isDark", "false");
    });


});
