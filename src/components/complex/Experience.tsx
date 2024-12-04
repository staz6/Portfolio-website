import React from "react"
import Wrapper from "../shared/Wrapper"
import { useUserDetails } from "../Context/UserDetailsContext";
import { PortableText, PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
    marks: {
        em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
            return (
                <a href={value?.href} target={target} className="text-blue-600 hover:underline">
                    {children}
                </a>
            );
        },
    },
    block: {
        h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="text-gray-600 dark:text-gray-300">{children}</li>,
        number: ({ children }) => <li className="text-gray-600 dark:text-gray-300">{children}</li>,
    },
};

const Experience: React.FC = () => {
    const { Experience } = useUserDetails()

    return (
        <Wrapper className="dark:bg-gray-900 bg-gray-50 py-20">
            <h1
                data-testid="SectionTitle"
                className="mb-3 w-32 text-center m-auto px-4 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
            >
                Experience
            </h1>
            <p data-testid="Description" data-aos="fade-up" className="text-gray-600 dark:text-gray-300 mb-10 text-center font-inter">Here is a quick summary of my most recent experiences:</p>
            {Experience.map((experience, index) => (
                <div data-aos="fade-right" key={index} data-testid="ExperienceSection" className="flex flex-col items-center">
                    <div className=" w-full font-inter dark:bg-gray-800  max-w-[40rem] p-6 rounded-lg shadow-CustomboxShadow flex sm:flex-row flex-col items-start gap-8 sm:gap-12 md:gap-20">
                        <div >
                            <h1 className="text-2xl text-bold text-gray-900 dark:text-gray-50">{experience.CompanyName}</h1>
                        </div>


                        <div className="flex-grow">
                            <div className="flex sm:flex-row gap-5 sm:gap-0 flex-col justify-between items-start mb-5 sm:mb-2">
                                <h3 className="text-lg order-2 sm:order-1 dark:text-gray-50 text-gray-900 font-semibold">{experience.PositionName}</h3>
                                <h1 className="text-gray-700 dark:text-gray-200 sm:order-2 flex items-center gap-2 order-1 ">
                                    <span>{new Date(experience.StartDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                    -
                                    <span>
                                        {experience.EndDate === 'Present'
                                            ? 'Present'
                                            : new Date(experience.EndDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                </h1>
                            </div>
                            <div className="sm:w-[80%]">
                            <PortableText
                                value={experience.Description}
                                components={components}
                            />
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </Wrapper>

    )

}

export default Experience