import { Button } from '@/components/ui/button';
import React from 'react';

const BorderSwappingButton = () => {
  return (
    <Button
      className={`
       py-6
       text-lg
       tracking-widest
       uppercase
       relative
       transition-all
       duration-500
       bg-transparent
       hover:bg-transparent
       text-black

       before:absolute
       before:-top-2
       before:left-0
       before:w-full
       before:h-[140%]
       before:border-l-4
       before:border-r-4
       before:border-l-red-500
       before:border-r-yellow-500
       before:transition-all
       before:duration-500
       before:transform

       after:absolute
       after:top-0
       after:-left-3
       after:w-[112%]
       after:h-full
       after:border-t-4
       after:border-b-4
       after:border-t-red-500
       after:border-b-yellow-500
       after:transition-all
       after:duration-500
       after:delay-500
       after:transform
       
       hover:before:rotate-y-180
       hover:after:rotate-x-180
   `}
    >
      Hover me
    </Button>
  );
};

export default BorderSwappingButton;
