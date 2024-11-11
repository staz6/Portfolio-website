import React from "react"


const Experience: React.FC = () => {
    return <div>
        <h1
            data-testid="SectionTitle"
            className="mb-3 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl bg-gray-200 text-gray-600"
        >
            Experience
        </h1>
        <p data-testid="Description" className="text-gray-600 mb-10 text-center font-inter">Here is a quick summary of my most recent experiences:</p>
        <div data-testid="ExperienceSection" className="flex flex-col items-center">
            <div className=" w-full font-inter  max-w-[40rem] p-6 rounded-lg shadow-CustomboxShadow flex sm:flex-row flex-col items-start gap-8 sm:gap-12 md:gap-20">
                <div >
                    <h1 className="text-2xl text-bold text-gray-900">Upwork</h1>
                </div>

           
                <div className="flex-grow">
                    <div className="flex sm:flex-row gap-5 sm:gap-0 flex-col justify-between items-start mb-5 sm:mb-2">
                        <h3 className="text-lg order-2 sm:order-1 text-gray-900 font-semibold">Sr. Frontend Developer</h3>
                        <span className="text-gray-700">Nov 2021 - Present</span>
                    </div>
                    <ul className="list-inside space-y-2 text-pretty text-gray-600">
                            <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </li>
                            <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Ut pretium arcu et massa semper, id fringilla leo semper.</span>
                        </li>
                            <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Sed quis justo ac magna.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
}

export default Experience