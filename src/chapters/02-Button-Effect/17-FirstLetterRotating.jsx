import { Button } from '@/components/ui/button'
import React from 'react'

const FirstLetterRotating = () => {
  // return (
  //   <Button
  //     className={`
  //       relative

  //       before:absolute
  //       before:top-0
  //       before:left-0
  //       before:w-full
  //       before:h-full
  //       before:bg-white
  //   `}
  //   >
  //     click me
  //   </Button>
  // )
  return (
    <Button
      className={`
        py-6
        text-lg
        tracking-widest
        transition-all
        duration-500
        bg-transparent
        hover:bg-transparent
        shadow-none
        border-4
        text-black
        hover:text-white
        border-black
        rounded-none
        relative

        before:absolute
        before:top-0
        before:left-0
        before:w-full
        before:h-full
        before:bg-black
        before:transition-all
        before:duration-500
        before:opacity-0

        hover:before:opacity-100
        hover:before:rotate-12

        group

    `}
    >
      <span
        className={`
      text-transparent
      relative

      before:content-['B']
      before:absolute
      before:text-black
      before:transition-all
      before:duration-500


      group-hover:before:text-white
      group-hover:text-[60px]
      group-hover:before:rotate-[360deg]
      group-hover:before:-top-1
      
        `}
      >
        B
      </span>
      <span className='z-10 '>utton</span>
    </Button>
  )
}

export default FirstLetterRotating
