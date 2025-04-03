import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../Header";
import { UserDetailsContext } from "../../Context/UserDetailsContext";
import { ThemeProvider } from "../../Context/ThemeChangerContext";

const mockUserDetails = {
    name: "John Doe",
    description: "A passionate software developer.",
    NameAcronym: "JD",
    detailedDescription: [
        "I have been developing web applications for over 5 years.",
        "I specialize in JavaScript and React, but also have experience with Node.js and Express.",
        "I enjoy learning new technologies and improving my skills."
    ],
    location: "New York, USA",
    availability: true,
    githubLink: "https://github.com/johndoe",
    linkedinLink: "https://linkedin.com/in/johndoe",
    profileImage: {
        asset: {
            url: "https://example.com/profile.jpg",
        },
    },
    cvDocument: {
        asset: {
            url: "https://example.com/johndoe_cv.pdf",
        },
    },
    FooterText: "Lorem ipsum ",
    skillSet: [
        {
            name: "Node.js",
            _rawImage: {
                _type: "image",
                asset: {
                    _ref: "image-11223-400x400-jpg",
                    _type: "reference",
                },
            },
        },
    ],
    Experience: [
        {
            CompanyName: "Creative Dev Studio",
            PositionName: "Software Engineer",
            Description: [
                {
                    _type: "block",
                    children: [
                        {
                            _type: "span",
                            text: "Led a team to deliver high-quality software solutions, ensuring scalable architecture and maintainable code. Focused on modernizing legacy systems with Node.js and microservices.",
                        },
                    ],
                },
            ], StartDate: "2024-01-01",
            EndDate: "Present",
        },
    ],
    work: [
        {

            name: "TrendMart",
            description: "Trendmart is an ecommerce website that has a variety of products for sale.",
            ProjectUrl: "https://trend-mart-app.vercel.app/",
            skills: ["React", "Typescript"],
            _rawProjectImage: {
                asset: {
                    _ref: "image-ef42e743baa29d3d7cd3b2242557bc7ddd3f2625-1916x854-png",
                },
            },
        },

    ],
    reviews: [
        {
            name: 'John Doe',
            description: "Hello world",
            background: "Freelancer"
        }
    ]
};

describe("Header Component Tests", () => {
    it("Testing rendering of ui", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                    <ThemeProvider>
                        <Header />
                    </ThemeProvider>
                </UserDetailsContext.Provider>
            </UserDetailsContext.Provider>
        );
        expect(screen.getByTestId("logo")).toBeInTheDocument();
        expect(screen.getAllByTestId("NavigationLinks")).toHaveLength(2);
        expect(screen.getByTestId("ActionPanel")).toBeInTheDocument();
        expect(screen.getByTestId("MobileNavBtn")).toBeInTheDocument();
    });
    it("Opens up mobile navbar onclick of menu button", () => {
        render(
            <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
                    <ThemeProvider>
                        <Header />
                    </ThemeProvider>
                </UserDetailsContext.Provider>
            </UserDetailsContext.Provider>
        );
        const MobileNavBtn = screen.getByTestId("MobileNavBtn");
        fireEvent.click(MobileNavBtn);
        expect(screen.getByTestId("MobileNav")).toBeInTheDocument();
    });
});
