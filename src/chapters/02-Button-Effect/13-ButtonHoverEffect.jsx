import { Button } from '@/components/ui/button';
import React from 'react';

const ButtonHoverEffectPartTwo = () => {
  return (
    <Button
      variant='ghost'
      className={`

        hover:bg-transparent
        py-6
        text-lg
        text-white
        hover:text-white
        font-bold
        tracking-widest
        uppercase
        transition-all
        duration-500
        relative
        perspective-1000

        before:absolute
        before:-top-[3px]
        before:-left-[3px]
        before:w-full
        before:h-full
        before:transition-all
        before:duration-500
        before:bg-blue-500
        before:transform
        before:origin-top

        after:absolute
        after:top-0
        after:left-0
        after:w-full
        after:h-full
        after:transition-all
        after:duration-500
        after:bg-red-500
        after:transform
        after:origin-bottom

        after:mix-blend-multiply

        hover:before:-top-[6px]
        hover:before:left-0
        hover:before:rotate-x-[75deg]

        hover:after:-rotate-x-[75deg]

        
        
      `}
    >
      <span className='z-10'>Button</span>
    </Button>
  );
};

export default ButtonHoverEffectPartTwo;
