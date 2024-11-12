import React from "react"
import image from "../../images/PortfolioPic.png"
import { LuExternalLink } from "react-icons/lu";
import Wrapper from "../shared/Wrapper";

const work = [{
    name: "Front-end",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    , skills: ["Typescript", "React", "NodeJs", "Tailwindcss", "Api"]
}, {
    name: "Front-end",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    , skills: ["Typescript", "React", "NodeJs", "Tailwindcss", "Api"]
}, {
    name: "Front-end",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    , skills: ["Typescript", "React", "NodeJs", "Tailwindcss", "Api"]
}]

const Work: React.FC = () => {
    return (
        <Wrapper>
            <div className="mt-20">
                <h1
                    data-testid="SectionTitle"
                    className="mb-3 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl bg-gray-200 text-gray-600"
                >
                    Work
                </h1>
                <p data-testid="Description" className="text-gray-600 mb-10 text-center font-inter">Some of the noteworthy projects I have built:</p>
                {work.map((item, index) => (
                    <div
                        key={index}
                        data-testid="WorkSection"
                        className="grid grid-cols-12 shadow-lg mb-10 rounded-ss-2xl rounded-es-2xl rounded-ee-2xl"
                    >
                        <div
                            className={`col-span-12 md:col-span-6 bg-gray-50 rounded-ss-2xl rounded-se-2xl md:rounded-se-none md:rounded-es-2xl md:h-auto h-72 flex justify-center items-center lg:h-[30rem] ${index % 2 === 0 ? "md:order-1" : "md:order-2"
                                }`}
                        >
                            <img className="w-[86%] h-[80%]" src={image} alt="" />
                        </div>
                        <div
                            className={`col-span-12 md:col-span-6 px-6 md:pl-8 lg:pl-12 font-inter ${index % 2 === 0 ? "md:order-2" : "md:order-1"
                                }`}
                        >
                            <h1 className="text-gray-900 mt-10 lg:mt-12 font-semibold text-xl mb-5 lg:mb-8">
                                {item.name}
                            </h1>
                            <p className="text-gray-600 mb-6 text-[14px] w-[95%] lg:text-lg max-w-[35rem]">
                                {item.description}
                            </p>
                            <div className="flex-wrap flex lg:gap-x-5 gap-x-2 mb-4 lg:mb-8">
                                {item.skills.map((skill, skillIndex) => (
                                    <h1
                                        key={skillIndex}
                                        data-testid="SkillNameA"
                                        className="mb-3 w-fit hover:scale-110 duration-200 transition-all cursor-pointer px-4 lg:text-base text-[14px] lg:px-5 py-1 font-inter font-medium rounded-2xl bg-gray-200 text-gray-600"
                                    >
                                        {skill}
                                    </h1>
                                ))}
                            </div>
                            <a
                                href=""
                                className="text-gray-600 block text-2xl mb-6 hover:text-black hover:text-3xl transition-all duration-200"
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