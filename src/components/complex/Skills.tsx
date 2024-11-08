import React from "react";
import Image from "../../images/PortfolioPic.png"
const Skills = () => {
   
    const skills = Array.from({ length: 16 }, (_, i) => i + 1);

    const half = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, half);
    const secondHalf = skills.slice(half);

    return (
        <div className="text-center">
            <h1
                data-testid="SectionTitle"
                className="mb-3 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl bg-gray-200 text-gray-600"
            >
                Skills
            </h1>
            <p data-testid="Description" className="text-gray-600 mb-10 font-inter">The skills, tools and technologies I am really good at:</p>
            <div data-testid="SkillsSetDesktop" className="sm:flex hidden flex-col items-center  gap-10">
                <div className="flex justify-between w-full">
                    {firstHalf.map((skill, index) => (
                        <div  key={index + half} className="flex flex-col font-inter gap-2 items-center justify-center">
                            <img                     
                                src={Image}
                                alt="Skill"
                                className="xl:w-20 lg:w-16 xl:h-20 lg:h-16 w-14 h-14 "
                            />
                            <h1 className="text-gray-600  text-sm  lg:text-base">Skill</h1>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between  w-full">
                    {secondHalf.map((skill, index) => (
                        <div key={index + half} className="flex flex-col   font-inter gap-2 items-center justify-center">
                            <img                        
                                src={Image}
                                alt="Skill"
                                className="xl:w-20 w-14 lg:w-16 xl:h-20 lg:h-16  h-14"
                            />
                            <h1 className="text-gray-600  text-sm  lg:text-base">Skill</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div data-testid="SkillsSetMobile" className="flex flex-wrap justify-between gap-10">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col sm:hidden justify-center ">
                        <img
                            src={Image}
                            alt="Skill"
                            className="w-16 h-16"
                        />
                        <h1 className="text-gray-600  ">Skill</h1>


                    </div>
                ))}

            </div>
        </div>
    );
};

export default Skills;
