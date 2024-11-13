import React from "react";
import Wrapper from "../shared/Wrapper";
import { LuGithub } from "react-icons/lu";
import {FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

const Footer: React.FC = () => {

 return (
        <>

            <div className="py-12 font-inter">
                <Wrapper>
                    <h1
                        data-testid="SectionTitle"
                        className="mb-3 w-fit m-auto px-4 py-1  font-medium rounded-2xl bg-gray-200 text-gray-600"
                    >
                        Get in touch
                    </h1>
                    <p
                        data-testid="Description"
                        className="text-gray-600 text-center mb-10  max-w-[30rem] m-auto"
                    >
                        What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                    </p>
                   
                    <p className="text-center text-gray-600 mt-8">You may also find me on these platforms!</p>
                    <div data-testid="SocialLinks" className="flex justify-center text-gray-600 mt-3 gap-5">
                        <a className="hover:text-gray-900" href="">
                            <LuGithub size={24} />
                        </a>
                        <a className="hover:text-gray-900" href="">
                            <FiTwitter size={24} />
                        </a>
                        <a className="hover:text-gray-900" href="">
                            <FaFigma size={24} />
                        </a>
                    </div>
                </Wrapper>

            </div>
            <div className="bg-gray-50 py-4 mt-3">
                <p data-testid="FooterHeading" className="text-center font-inter text-gray-600">@2024 | Developer Muhammad Aahad</p>
            </div>
              </>
    );
};

export default Footer;
