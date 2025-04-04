import React from 'react'
import Tilt from 'react-parallax-tilt'

export type SkillCardType = {
  name: string
  excellency: number
  image: {
    asset: {
      url: string
    }
  }
  index: number
}

const SkillCard: React.FC<SkillCardType> = ({
  index,
  name,
  image,
  excellency
}) => {
  return (
    <Tilt className='will-change-transform transition-[transform] duration-[400ms] ease-[cubic-bezier(0.03,0.98,0.52,0.99)] perspective-[1000px] scale-100'>
      <div data-testid="SkillCard"
        data-aos='flip-left'
        data-aos-anchor-placement='top-center'
        data-aos-delay={index * 70}
        data-aos-offset='-250'
      >
        <div className='p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
          <div className='w-20 h-20 flex mx-auto items-center justify-center'>
            <img
              alt='React'
              loading='lazy'
              width='80'
              height='80'
              decoding='async'
              data-nimg='1'
              className='object-cover   '
              src={image.asset.url}
            />
          </div>
          <h3 className='text-[18px] mt-4 text-white font-[600] '>{name}</h3>
          <div className='bg-black mt-4 rounded-lg p-2 text-white opacity-40'>
            {excellency}%
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default SkillCard
