import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
const BabylonEarth = lazy(() => import('../compound/BabylonEarth'))
const FormEmail = lazy(() => import('../compound/FormEmail'))
import { useInView } from 'react-intersection-observer'
import Spinner from '../compound/Spinner'

const Hireme: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (inView) setVisible(true)
  }, [inView])

  return (
    <div className=' py-24 bg-[#0f0715] ' id='contact' data-testid='Hireme'>
      <div className=' flex flex-col xl:flex-row justify-between px-[15px] sm:px-0 sm:w-4/5 mx-auto'>
        <div
          ref={ref}
          className={`w-full xl:w-6/12 xl:order-1 order-2  ${
            visible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-100%]'
          }`}
        >
          <Suspense fallback={<Spinner />}>
            <FormEmail />
          </Suspense>
        </div>

        <div
          ref={ref}
          className={`xl:order-2 order-1 w-full xl:w-6/12 mb-6 xl:mb-0 transition-all duration-1000 ease-in-out ${
            inView
              ? 'translate-x-0 opacity-100'
              : 'translate-x-[100%] opacity-0'
          }`}
        >
          <Suspense fallback={<Spinner />}>
            {inView && <BabylonEarth />}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Hireme
