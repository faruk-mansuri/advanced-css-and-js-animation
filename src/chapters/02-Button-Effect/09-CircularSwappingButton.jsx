import { Button } from '@/components/ui/button';
import React from 'react';

const CircularSwappingButton = () => {
  return (
    <Button
      variant='ghost'
      className={`
       py-6
       text-red-500
       hover:text-white
       text-lg
       transition-all
       duration-500
       bg-none
       border-4
       border-red-500
       relative
       overflow-hidden
   
       before:absolute
       before:bottom-0
       before:left-0
       before:w-full
       before:h-0
       before:bg-red-500
       before:rounded-tl-[50%]
       before:rounded-tr-[50%]
       before:transition-all
       before:duration-500
       
       hover:before:h-[190%]
       `}
    >
      <span className='z-10'>Hover me</span>
    </Button>
  );

  return (
    <Button
      variant='ghost'
      className={`
       py-6
       text-red-500
       hover:text-white
       text-lg
       transition-all
       duration-500
       bg-none
       border-4
       border-red-500
       relative
       overflow-hidden
   
       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-0
       before:bg-red-500
       before:rounded-bl-[50%]
       before:rounded-br-[50%]
       before:transition-all
       before:duration-500
       
       hover:before:h-[190%]
       `}
    >
      <span className='z-10'>Hover me</span>
    </Button>
  );
};

export default CircularSwappingButton;
