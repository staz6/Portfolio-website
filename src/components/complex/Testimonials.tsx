import React from 'react'
import { useUserDetails } from '../Context/UserDetailsContext'
import 'swiper/css'
import 'swiper/css/pagination'
import quotationImg from '../../images/q.png'
import { motion } from 'framer-motion'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { FaUser } from 'react-icons/fa'

const Testimonials: React.FC = () => {
  const { reviews } = useUserDetails()
  const ReviewsLength = reviews.length
  return (
    <div
    id='Reviews'
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
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: ReviewsLength < 1 ? ReviewsLength : 1 },
            768: { slidesPerView: ReviewsLength < 2 ? ReviewsLength : 2 },
            1300: { slidesPerView: ReviewsLength < 3 ? ReviewsLength : 3 }
          }}
          className='w-[85%]'
        >
          {reviews.map(({ name, description, background }, index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              <motion.div
                data-aos='fade-right'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.05, ease: 'easeInOut' }}
                key={1}
                className='rounded-md  overflow-hidden bg-[#140c1c] m-4'
              >
                <div className='p-6'>
                  <img className='h-10' src={quotationImg} alt='' />
                  <p className='text-white text-opacity-70'>{description}</p>
                  <div className='flex justify-end'>
                    <img className='h-10' src={quotationImg} alt='' />
                  </div>
                </div>
                <div className='px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold'>
                  <span>5/5</span>
                  <span>⭐️</span>
                </div>
                <div className='bg-gray-100'>
                  <div className='p-6 flex items-center space-x-6'>
                    <div className='bg-black bg-opacity-50 p-2 rounded-full'>
                     <FaUser  size={20}/>
                    </div>
                    <div>
                      <h1 className='text-lg font-bold '>{name}</h1>
                      <p className='text-base text-gray-700'>{background}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
