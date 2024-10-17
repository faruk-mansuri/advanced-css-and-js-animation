import { Button } from '@/components/ui/button'
import React from 'react'

const DiagonalSwipeButton = () => {
  return (
    <Button
      variant='outline'
      className={`
        text-lg
        py-6
        uppercase
        tracking-wider
        text-blue-900
        hover:text-white
        hover:bg-transparent
        bg-transparent
        border-4
        border-blue-900
        rounded-none
        transition-all
        duration-500
        relative
        overflow-hidden
        

        before:absolute
        before:top-0
        before:left-0
        before:bottom-0
        before:right-0
        before:transition-all
        before:duration-500
        before:border-t-[24.5px]
        before:border-t-purple-800
        before:border-b-[24.5px]
        before:border-b-purple-800
        before:border-r-[24.5px]
        before:border-r-transparent
        before:-translate-x-full

        after:absolute
        after:top-0
        after:left-0
        after:bottom-0
        after:right-0
        after:transition-all
        after:duration-500
        after:border-t-[24.5px]
        after:border-t-purple-800
        after:border-b-[24.5px]
        after:border-b-purple-800
        after:border-l-[24.5px]
        after:border-l-transparent
        after:translate-x-full
        
        hover:after:translate-x-0
        hover:before:translate-x-0


    
  `}
    >
      <span className='z-10'>Button</span>
    </Button>
  )
}

export default DiagonalSwipeButton
