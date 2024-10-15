import { Button } from '@/components/ui/button';
import React from 'react';

const SplitButton = () => {
  return (
    <Button
      variant='ghost'
      className={`
        py-6
        relative
        transition-all
        duration-500
        hover:bg-transparent
        text-lg
        uppercase
        tracking-wider
        border-4
        border-blue-500
        font-bold
        overflow-hidden

        before:absolute
        before:top-0
        before:-left-[25%]
        before:w-[25%]
        before:h-full
        before:bg-blue-500
        before:transition-all
        before:duration-200

        after:absolute
        after:-top-full
        after:left-[25%]
        after:w-[25%]
        after:h-full
        after:bg-blue-500
        after:transition-all
        after:duration-300

        hover:before:left-0
        hover:after:top-0

        group


    
    `}
    >
      <span
        className={`
        before:absolute
        before:-bottom-full
        before:left-[50%]
        before:w-[25%]
        before:h-full
        before:bg-blue-500
        before:transition-all
        before:duration-400

        after:absolute
        after:top-0
        after:-right-[25%]
        after:w-[25%]
        after:h-full
        after:bg-blue-500
        after:transition-all
        after:duration-500

        group-hover:before:bottom-0
        group-hover:after:right-0
        `}
      ></span>
      <span className='z-10'>Hover Me</span>
    </Button>
  );
};

export default SplitButton;
