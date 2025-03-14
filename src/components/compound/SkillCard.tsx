import React from 'react'

export type SkillCardType = {
  index: number
  SkillName: string
  SkillExcellency: number
  SkillImage: {
    asset: {
      url: string
    }
  }
}

const SkillCard: React.FC<SkillCardType> = ({
  index,
  SkillExcellency,
  SkillName,
  SkillImage
}) => {
  return (
    <div
      data-aos='flip-left'
      data-aos-anchor-placement='top-center'
      data-aos-delay={index * 100}
    >
      <div className='p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
        <img
          alt='React'
          loading='lazy'
          width='80'
          height='80'
          decoding='async'
          data-nimg='1'
          className='object-cover mx-auto'
          src='https://devportfoliowebsite.vercel.app/images/react.svg'
        />
        <h1 className='text-[18px] mt-4 text-white font-[600] '>React</h1>
        <div className='bg-black mt-4 rounded-lg p-2 text-white opacity-40'>
          90%
        </div>
      </div>
    </div>
  )
}

export default SkillCard
