import { Button } from '@/components/ui/button'
import React from 'react'

const PulsingButton = () => {
  return (
    <Button
      variant='outline'
      className={`
    text-lg
    tracking-wider
    text-black
    hover:text-black
    hover:bg-white
    py-6
    transition-all
    duration-500
    rounded-3xl
    relative
    uppercase
    
    hover:-translate-y-2
    hover:shadow-md

    
    active:-translate-y-1
    active:shadow-lg

    before:absolute
    before:top-0
    before:left-0
    before:w-full
    before:h-full
    before:bg-white
    before:rounded-3xl
    before:transition-all
    before:duration-500
    
    hover:before:scale-x-[1.4]
    hover:before:scale-y-[1.6]
    hover:before:opacity-0
    

   
  `}
    >
      <span className='z-10'> Hover Me</span>
    </Button>
  )

  return (
    <Button
      variant='outline'
      className={`
        text-lg
        tracking-wider
        text-black
        hover:text-black
        hover:bg-white
        py-6
        transition-all
        duration-500
        rounded-3xl
        relative
        uppercase
        overflow-hidden
        transform

        before:absolute
        before:top-0
        before:left-0
        before:w-full
        before:h-full
        before:bg-red-600
        before:border-3xl
        before:transition-all
        before:duration-500

        hover:before:scale-x-10
        hover:before:rotate-x-[200px]
        hover:before:rotate-y-[20px]

        hover:before:bg-red-700

`}
    >
      <span className='z-10'> Hover Me</span>
    </Button>
  )
}

export default PulsingButton
