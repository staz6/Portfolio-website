import React, { useEffect, useRef } from 'react'
import Wrapper from '../shared/Wrapper'
import { HiUser } from 'react-icons/hi2'
import { useUserDetails } from '../Context/UserDetailsContext'
import 'swiper/css'
import 'swiper/css/pagination'
import quotationImg from '../../images/q.png'
import TestimonialsSliderContent from '../compound/TestimonialsSlider'
import TestimonialsSliderControls from '../compound/TestimonialsSliderControls'
import { motion } from 'framer-motion'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials: React.FC = () => {
  const { reviews } = useUserDetails()
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const ReviewsLength = reviews.length
  const testimonials = [
    { id: 1, text: 'Great service!', author: 'Alice' },
    { id: 2, text: 'Loved it!', author: 'Bob' }
  ]
  const slidesPerView = ReviewsLength > 3 ? 3 : ReviewsLength
  return (
    <div
      data-testid='Testimonials'
      className='py-24 bg-[#050709] w-full overflow-hidden'
    >
      <h1 className='bg-blue-800 mb-20 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        Client Reviews
      </h1>
      <div className='flex justify-center w-full px-4'>
        <Swiper
          slidesPerView={ReviewsLength}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            0: { slidesPerView: ReviewsLength < 1 ? ReviewsLength : 1 },
            768: { slidesPerView: ReviewsLength < 2 ? ReviewsLength : 2 },
            1300: { slidesPerView: ReviewsLength < 3 ? ReviewsLength : 3 }
          }}
          className='w-[85%]'
        >
          <TestimonialsSliderControls prevRef={prevRef} nextRef={nextRef} />
          <TestimonialsSliderContent prevRef={prevRef} nextRef={nextRef}>
            {testimonials.map(({ id, text, author }) => (
              <SwiperSlide key={id} className='flex justify-center'>
                <motion.div
                  data-aos='fade-right'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.05, ease: 'easeInOut' }}
                  key={1}
                  className='rounded-md  overflow-hidden bg-[#140c1c] m-4'
                >
                  <div className='p-6'>
                    <img className='h-10' src={quotationImg} alt='' />
                    <p className='text-white text-opacity-70'>
                      Exceptional service! The team delivered exactly what we
                      needed on time. Very professional
                    </p>
                    <div className='flex justify-end'>
                      <img className='h-10' src={quotationImg} alt='' />
                    </div>
                  </div>
                  <div className='px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold'>
                    <span>4.5/5</span>
                    <span>⭐️</span>
                  </div>
                  <div className='bg-gray-100'>
                    <div className='p-6 flex items-center space-x-6'>
                      <div>
                        <img
                          src='https://devportfoliowebsite.vercel.app/_next/image?url=%2Fimages%2Fu2.jpg&w=96&q=75'
                          className='rounded-full h-12 w-12'
                          alt=''
                        />
                      </div>
                      <div>
                        <h1 className='text-lg font-bold '>Michael Johnson</h1>
                        <p className='text-base text-gray-700'>
                          Project Coordinator
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </TestimonialsSliderContent>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
