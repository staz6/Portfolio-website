import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const CustomCursor:React.FC = () => {
  return (
    <div className='hidden md:block' data-testid='CustomCursor'>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={2}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'white'
        }}
        outerStyle={{
          border: '3px solid white'
        }}
      />
    </div>
  )
}

export default CustomCursor
