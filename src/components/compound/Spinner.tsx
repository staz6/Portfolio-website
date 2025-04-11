import React from 'react'

const Spinner:React.FC = () => {
  return (
    <div className='h-[400px] flex items-center justify-center'>
    <div className='w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin' />
  </div>
  )
}

export default Spinner