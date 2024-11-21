import React from 'react';
import Wrapper from '../shared/Wrapper';
import { HiUser } from "react-icons/hi2";
import { useUserDetails } from '../Context/UserDetailsContext';

interface Testimonial {
    message: string;
    name: string;
    title: string;
}

const testimonials: Testimonial[] = [
    {
        message: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
        name: "John Doe",
        title: "Founder - xyz.com",
    },
    {
        message: "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
        name: "John Doe",
        title: "Founder - abc.com",
    },
    {
        message: "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
        name: "John Doe",
        title: "Freelancer",
    },
];

const Testimonials: React.FC = () => {
    const { reviews } = useUserDetails()
    return (
        <Wrapper className='flex flex-col items-center justify-center px-4 py-20 dark:bg-gray-900 sm:px-6 lg:px-8 bg-gray-50'>
            <h1
                data-testid="SectionTitle"
                className="mb-3 w-fit m-auto px-4 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
            >
                Testimonials
            </h1>
            <p data-testid="Description" className="text-gray-600 dark:text-gray-300 text-center mb-10 font-inter">Nice things people have said about me:</p>
            <div data-testid="TestimonialSection" className=" gap-8 font-inter justify-center flex flex-wrap">
                {reviews.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-72 xl:w-80 flex flex-col  items-center bg-white dark:bg-gray-800 px-9 py-12 rounded-lg shadow-lg  text-center"
                    >
                        <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mb-4">
                            <HiUser size={50} />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-start">"{testimonial.description}"</p>
                        <h3 className="text-gray-900 dark:text-gray-50 font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.background}</p>
                    </div>
                ))}
            </div>
        </Wrapper>

    );
};

export default Testimonials;
