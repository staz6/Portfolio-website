import React, { useEffect, useRef } from 'react';
import Wrapper from '../shared/Wrapper';
import { HiUser } from "react-icons/hi2";
import { useUserDetails } from '../Context/UserDetailsContext';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialsSliderContent from '../compound/TestimonialsSlider';
import TestimonialsSliderControls from '../compound/TestimonialsSliderControls';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
    const { reviews } = useUserDetails()
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const ReviewsLength = reviews.length

    return (
        <Wrapper id="testimonials" className='flex flex-col items-center justify-center px-4 py-20 dark:bg-gray-900 sm:px-6 lg:px-8 bg-gray-50'>
            <h1
                data-testid="SectionTitle"
                className="mb-3 text-center w-36 m-auto px-4 py-1 font-inter font-medium rounded-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-600"
            >
                Testimonials
            </h1>
            <p data-aos="fade-up" data-testid="Description" className="text-gray-600 dark:text-gray-300  text-center mb-10 font-inter">Nice things people have said about me:</p>

            {ReviewsLength > 3 ? <div className='xl:w-[65rem] w-full flex flex-col justify-center items-center'>
                <TestimonialsSliderControls prevRef={prevRef} nextRef={nextRef} />
                <TestimonialsSliderContent prevRef={prevRef} nextRef={nextRef}>
                    {reviews.map((testimonial, index) => (
                        <motion.div data-aos="fade-right"
                        whileHover={{scale:1.05}}
                        transition={{duration:0.05 , ease: "easeInOut",}}
                            key={index}
                            className="w-72 xl:w-80 flex m-auto flex-col  items-center bg-white dark:bg-gray-800 px-9 py-12 rounded-lg shadow-lg  text-center"
                        >
                            <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mb-4">
                                <HiUser size={50} />
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-start">"{testimonial.description}"</p>
                            <h3 className="text-gray-900 dark:text-gray-50 font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.background}</p>
                        </motion.div>
                    ))}
                </TestimonialsSliderContent>
            </div>
                : <div data-testid="TestimonialSection" className=" gap-8 font-inter justify-center flex flex-wrap">
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
            }

        </Wrapper>

    );
};

export default Testimonials;
