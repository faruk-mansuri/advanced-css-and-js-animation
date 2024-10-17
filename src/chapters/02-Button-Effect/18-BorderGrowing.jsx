import { Button } from '@/components/ui/button'
import React from 'react'

const BorderGrowing = () => {
  return (
    <Button
      variant='ghost'
      className={`
        text-lg
        tracking-wider
        text-white
        hover:text-white
        rounded-none
        py-6
        relative
        uppercase
        hover:bg-transparent
        overflow-hidden

        before:absolute
        before:top-0
        before:-left-full
        before:w-full
        before:h-1
        before:bg-white
        before:transition-all
        before:duration-500

        after:absolute
        after:bottom-0
        after:-right-full
        after:w-full
        after:h-1
        after:bg-white
        after:transition-all
        after:duration-500

        hover:before:left-0
        hover:after:right-0

        group

    `}
    >
      button
      <span
        className={`
            before:absolute
            before:-top-full
            before:left-0
            before:w-1
            before:h-full
            before:bg-white
            before:transition-all
            before:duration-500

            after:absolute
            after:-bottom-full
            after:right-0
            after:w-1
            after:h-full
            after:bg-white
            after:transition-all
            after:duration-500

            group-hover:before:top-0
            group-hover:after:bottom-0
        
      `}
      ></span>
    </Button>
  )
}

export default BorderGrowing
