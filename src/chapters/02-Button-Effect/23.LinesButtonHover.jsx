import { Button } from '@/components/ui/button';
import React from 'react';

const LinesButtonHover = () => {
  return (
    <Button
      variant='ghost'
      className={`
         hover:bg-transparent
         text-lg
         text-blue-800
         uppercase
         hover:text-white
         tracking-widest
         py-6
         border-4
         border-blue-800
         rounded-none
         transition-all
         duration-500
         relative
         hover:border-transparent

         before:absolute
         before:top-0
         before:left-0
         before:w-full
         before:h-full
         before:bg-blue-800
         before:transition-all
         before:duration-700
         before:scale-0

         before:hover:scale-100
         before:shadow-line-shadow-button

         group
   
  `}
    >
      <span
        className={`
         absolute
         bg-blue-800
         w-[40px]
         h-[4px]
         top-[50%]
         -left-[50px]
         transition-all
         duration-500
         delay-300
         origin-left
         group-hover:left-[50%]
         group-hover:scale-0
         group-hover:delay-0
         shadow-line-shadow-arrow
       
      `}
      />
      <span
        className={`
           absolute
           bg-blue-800
           w-[4px]
           h-[40px]
           -top-[50px]
           left-[50%]
           translate-x-[50%]
           transition-all
           duration-500
           delay-300
           origin-top
           group-hover:top-[50%]
           group-hover:scale-0
           group-hover:delay-0
           shadow-line-shadow-arrow

        `}
      />
      <span
        className={`
         absolute
         bg-blue-800
         w-[40px]
         h-[4px]
         top-[50%]
         -right-[50px]
         transition-all
         duration-500
         delay-300
         origin-left
         group-hover:right-[50%]
         group-hover:scale-0
         group-hover:delay-0
         shadow-line-shadow-arrow
       
      `}
      />
      <span
        className={`
           absolute
           bg-blue-800
           w-[4px]
           h-[40px]
           -bottom-[50px]
           left-[50%]
           translate-x-[50%]
           transition-all
           duration-500
           delay-300
           origin-top
           group-hover:bottom-[50%]
           group-hover:scale-0
           group-hover:delay-0
           shadow-line-shadow-arrow

        `}
      />
      <span className='z-10'>Button</span>
    </Button>
  );
};

export default LinesButtonHover;
