import React from "react"
import image from "../../images/PortfolioPic.png"
import { LuExternalLink } from "react-icons/lu";
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";
import SanityImage from "gatsby-plugin-sanity-image";


const Work: React.FC = () => {
    const { work } = useUserDetails()
    return (
        <Wrapper className="dark:bg-gray-950 py-5">
            <div className="mt-20">
                <h1
                    data-testid="SectionTitle"
                    className="mb-3 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
                >
                    Work
                </h1>
                <p data-testid="Description" className="text-gray-600 dark:text-gray-300  mb-10 text-center font-inter">Some of the noteworthy projects I have built:</p>
                {work.map((item, index) => (
                    <div
                        key={index}
                        data-testid="WorkSection"
                        className="grid grid-cols-12 shadow-lg mb-10 rounded-ss-2xl rounded-es-2xl rounded-ee-2xl"
                    >
                        <div
                            className={`col-span-12 md:col-span-6 bg-gray-50 dark:bg-gray-700   md:h-auto h-72 flex justify-center items-center lg:h-[30rem] ${index % 2 === 0 ? "md:order-1 rounded-ss-xl rounded-se-xl md:rounded-se-none  md:rounded-es-xl" : "md:order-2 md:rounded-ee-xl rounded-se-xl rounded-ss-xl md:rounded-ss-none"
                                }`}
                        >
                            <SanityImage
                                {...item._rawProjectImage}
                                alt={item.name}
                                width={1000}
                                className="rounded-xl w-[86%] h-[80%]"
                            />

                        </div>
                        <div
                            className={`col-span-12 dark:bg-gray-800  md:col-span-6 px-6 md:pl-8 lg:pl-12 font-inter ${index % 2 === 0 ? "md:order-2 rounded-bl-xl md:rounded-bl-none md:rounded-se-xl rounded-ee-xl" : "md:order-1 rounded-es-xl rounded-ee-xl md:rounded-ee-none md:rounded-ss-xl"
                                }`}
                        >
                            <h1 className="text-gray-900 dark:text-gray-50 mt-10 lg:mt-12 font-semibold text-xl mb-5 lg:mb-8">
                                {item.name}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 text-[14px] w-[95%] lg:text-lg max-w-[35rem]">
                                {item.description}
                            </p>
                            <div className="flex-wrap flex lg:gap-x-5 gap-x-2 mb-4 lg:mb-8">
                                {item.skills.map((skill, skillIndex) => (
                                    <h1
                                        key={skillIndex}
                                        data-testid="SkillName"
                                        className="mb-3 w-fit hover:scale-110 duration-200 transition-all cursor-pointer px-4 lg:text-base text-[14px] lg:px-5 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
                                    >
                                        {skill}
                                    </h1>
                                ))}
                            </div>
                            <a
                                href={item.ProjectUrl}
                                className="text-gray-600 block text-2xl mb-6 hover:text-black dark:hover:text-gray-50 hover:text-3xl transition-all duration-200"
                            >
                                <LuExternalLink />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

export default Work