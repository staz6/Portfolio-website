import React from "react";
import Wrapper from "../shared/Wrapper";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { useUserDetails } from "../Context/UserDetailsContext";

const Footer: React.FC = () => {
    const { githubLink, linkedinLink, FooterText } = useUserDetails()
 
    return (
        <>
            <Wrapper id="contact" className="py-20 font-inter dark:bg-gray-950">
                <h1
                    data-testid="SectionTitle"
                    className="mb-3 text-center w-36 m-auto px-4 py-1  font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
                >
                    Get in touch
                </h1>
                <p data-aos="fade-up"
                    data-testid="Description"
                    className="text-gray-600 dark:text-gray-300 text-center mb-10  max-w-[30rem] m-auto"
                >
                    What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>

                <p data-aos="fade-right" className="text-center text-gray-600 dark:text-gray-300 mt-8">You may also find me on these platforms!</p>
                <div data-testid="SocialLinks" className="flex justify-center text-gray-600 dark:text-gray-300 mt-3 gap-5">
                    <a data-aos="zoom-in"
                        data-aos-delay="100" className="hover:text-gray-900 dark:hover:text-gray-50" href={githubLink}>
                        <LuGithub size={24} />
                    </a>
                    <a data-aos="zoom-in"
                        data-aos-delay="100" className="hover:text-gray-900 dark:hover:text-gray-50" href={linkedinLink}>
                        <FiLinkedin size={24} />
                    </a>
                </div>
            </Wrapper>

            <div className="bg-gray-50 dark:bg-gray-900 py-4 ">
                <p  data-testid="FooterHeading" className="text-center font-inter text-gray-600 dark:text-gray-300">{FooterText}</p>
            </div>
        </>
    );
};

export default Footer;
