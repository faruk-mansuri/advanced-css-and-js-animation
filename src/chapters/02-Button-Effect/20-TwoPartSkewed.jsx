import { Button } from '@/components/ui/button'
import React from 'react'

const TwoPartSkewed = () => {
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

        before:absolute
        before:-top-[5px]
        before:-left-[1%]
        before:w-[50%]
        before:h-full
        before:bg-red-600
        before:transition-all
        before:duration-300
        before:skew-x-12

        hover:before:top-0
        hover:before:left-[50%]
        hover:before:skew-x-0

        after:absolute
        after:top-0
        after:left-[50%]
        after:w-[50%]
        after:h-full
        after:bg-blue-800
        after:transition-all
        after:duration-30000
        after:skew-x-12

        hover:after:left-0
        hover:after:skew-x-0
        `}
    >
      <span className='z-10'>Hover</span>
    </Button>
  )
}

export default TwoPartSkewed
