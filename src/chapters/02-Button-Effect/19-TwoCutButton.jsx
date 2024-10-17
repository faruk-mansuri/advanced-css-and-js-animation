import { Button } from '@/components/ui/button'
import React from 'react'

const TwoCutButton = () => {
  return (
    <Button
      variant='ghost'
      className={` 
        text-lg
        tracking-wider
        text-black
        hover:text-white
        bg-transparent
        rounded-none
        py-6
        relative
        uppercase
        hover:bg-transparent
        overflow-hidden

        group
     `}
    >
      <span className='z-10'>Button</span>
      <span
        className={`
            absolute
            w-full
            h-full
            top-0
            left-0
            bg-transparent
            border-2
            border-black

            before:absolute
            before:w-[8%]
            before:h-[600%]
            before:bg-slate-300
            before:top-[50%]
            before:left-[50%]
            before:-translate-x-[50%]
            before:-translate-y-[50%]
            before:-rotate-60
            before:transition-all
            before:duration-500

            group-hover:before:w-full
            group-hover:before:bg-black
            group-hover:before:rotate-60
        
      `}
      ></span>
    </Button>
  )
}

export default TwoCutButton
