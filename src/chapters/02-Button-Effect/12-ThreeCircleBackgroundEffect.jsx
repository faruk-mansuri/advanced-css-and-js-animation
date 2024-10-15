import { Button } from '@/components/ui/button';
import React from 'react';

const ThreeCircleBackgroundEffect = () => {
  return (
    <Button
      variant='ghost'
      className={`
       hover:bg-transparent
       py-6
       text-lg
       uppercase
       transition-all
       duration-500
       relative
       tracking-wider
       overflow-hidden
       
       before:absolute
       before:top-[50%]
       before:left-0
       before:w-6
       before:h-6
       before:bg-yellow-500
       before:rounded-full
       before:-translate-y-[50%]
       before:transition-all
       before:duration-500
       before:shadow-custom-shadow-left
       before:opacity-0

       after:absolute
       after:top-[50%]
       after:right-0
       after:w-6
       after:h-6
       after:bg-yellow-500
       after:rounded-full
       after:-translate-y-[50%]
       after:transition-all
       after:duration-500
       after:shadow-custom-shadow-right
       after:opacity-0

       hover:before:left-[50%]
       hover:before:shadow-hover-custom-shadow-left
       hover:before:opacity-100

       hover:after:left-[50%]
       hover:after:shadow-hover-custom-shadow-right
       hover:after:opacity-100

       
       group 

       hover:text-slate-800
       `}
    >
      <span className='absolute top-0 left-0 w-full h-full bg-yellow-500 rounded-md scale-0 transition-all duration-500 group-hover:scale-100 group-hover:delay-300'></span>
      <span className='z-10'>Hover Me</span>
    </Button>
  );
};

export default ThreeCircleBackgroundEffect;
