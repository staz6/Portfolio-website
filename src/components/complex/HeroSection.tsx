import React from 'react'
import { useUserDetails } from '../Context/UserDetailsContext'
import Button from '../shared/Button'
import { FaDownload } from 'react-icons/fa'
import useInView from '../hooks/useInView'

const HeroSection: React.FC = () => {
  const { name, description, Shortdescription, cvDocument, profileImage } =
    useUserDetails()

  const handleDownloadCV = () => {
    if (cvDocument?.asset?.url) {
      window.open(cvDocument.asset.url, '_blank')
    }
  }

  const nameRef = useInView<HTMLHeadingElement>(0.05)
  const descRef = useInView<HTMLParagraphElement>(0.05)
  const shortDescRef = useInView<HTMLParagraphElement>(0.05)
  const divRef = useInView<HTMLDivElement>(0.05)
  const imageRef = useInView<HTMLImageElement>(0.05)

  return (
    <div
      data-testid='Herosection'
      id='herosection'
      className='w-full sm:pt-[4vh] pt-28 md:pt-[12vh] h-[42rem] sm:h-[50rem] xl:h-screen bg-[#0f0715] relative overflow-hidden'
    >
      <div className='flex justify-center flex-col px-[15px] sm:px-0 sm:w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          <div className='max-w-full'>
            <h1>
              <span
                ref={nameRef.ref}
                data-testid='Name'
                className={`text-2xl block md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold transition-all duration-700 ease-out transform ${
                  nameRef.isInView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-16'
                }`}
              >
                I am {name}
              </span>

              <span
                ref={descRef.ref}
                data-testid='Description'
                className={`bg-linearGradientHeading block to-white bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-700 ease-out transform ${
                  descRef.isInView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-16'
                }`}
              >
                {description}
              </span>
            </h1>

            <p
              ref={shortDescRef.ref}
              data-testid='Shortdescription'
              className={`mt-6 text-sm md:text-base text-white text-opacity-60 transition-all duration-700 ease-out transform ${
                shortDescRef.isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {Shortdescription}
            </p>

            <div
              ref={divRef.ref}
              className={`transition-all duration-700 ease-out transform ${
                divRef.isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <Button
                description='Download CV'
                className='md:px-8 w-fit md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'
                onClick={handleDownloadCV}
                icon={<FaDownload />}
              />
            </div>
          </div>

          <div>
            <div
              ref={imageRef.ref}
              className={`xl:h-[31rem] xl:w-[31rem] mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden transition-all duration-700 ease-out transform ${
                imageRef.isInView
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
              }`}
            >
              {profileImage?.asset?.url && (
                <img
                  className='h-full w-full object-cover'
                  src={`${profileImage.asset.url}?w=400&h=400&fit=crop&auto=format`}
                  alt={name}
                  loading='lazy'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
