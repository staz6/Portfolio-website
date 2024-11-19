import React from "react";
import Image from "../../images/PortfolioPic.png"
import Wrapper from "../shared/Wrapper";
import { useUserDetails } from "../Context/UserDetailsContext";
import SanityImage from "gatsby-plugin-sanity-image";

const Skills: React.FC = () => {

    const { skillSet } = useUserDetails()
    const half = Math.ceil(skillSet.length / 2);
    const firstHalf = skillSet.slice(0, half);
    const secondHalf = skillSet.slice(half);

    return (
        <Wrapper className="dark:bg-gray-950 pt-20 pb-3">
            <div className="text-center">
                <h1
                    data-testid="SectionTitle"
                    className="mb-3 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
                >
                    Skills
                </h1>
                <p data-testid="Description" className="
                 mb-10 font-inter">The skills, tools and technologies I am really good at:</p>
                <div data-testid="SkillsSetDesktop" className="sm:flex hidden flex-col items-center mb-10  gap-10">
                    <div className="flex justify-between w-full">
                        {firstHalf.map((skill, index) => (
                            <div key={index + half} className="flex flex-col font-inter gap-2 items-center justify-center">
                                <SanityImage
                                    {...skill._rawImage}
                                    alt={skill.name}
                                    width={100}
                                    height={100}
                                    className="xl:w-20 lg:w-16 xl:h-20 lg:h-16 w-14 h-14 "
                                />

                                <h1 className="text-gray-600 dark:text-gray-300 text-sm  lg:text-base">{skill.name}</h1>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between  w-full">
                        {secondHalf.map((skill, index) => (
                            <div key={index + half} className="flex flex-col   font-inter gap-2 items-center justify-center">

                                <SanityImage
                                    {...skill._rawImage}
                                    alt={skill.name}
                                    width={100}
                                    height={100}
                                    className="xl:w-20 w-14 lg:w-16 xl:h-20 lg:h-16  h-14"
                                />
                                <h1 className="text-gray-600 dark:text-gray-300 text-sm  lg:text-base">Skill</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div data-testid="SkillsSetMobile" className="flex flex-wrap justify-between mb-10 gap-10">
                    {skillSet.map((skill, index) => (
                        <div key={index} className="flex flex-col sm:hidden justify-center ">
                            <img
                                src={Image}
                                alt="Skill"
                                className="w-16 h-16"
                            /> <SanityImage
                                {...skill._rawImage}
                                alt={skill.name}
                                width={100}
                                height={100}
                                className="xl:w-20 w-14 lg:w-16 xl:h-20 lg:h-16  h-14"
                            />

                            <h1 className="text-gray-600 dark:text-gray-300 ">Skill</h1>


                        </div>
                    ))}

                </div>
            </div>
        </Wrapper>
    );
};

export default Skills;
