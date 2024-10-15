import { Button } from '@/components/ui/button';
import React from 'react';

const GrowingButton = () => {
  return (
    <Button
      className={`
       py-6
       text-lg
       uppercase
       tracking-wider
       bg-rose-700
       hover:bg-red-800
       relative
       rounded-none

       before:absolute
       before:-top-2
       before:-left-2
       before:w-[24px]
       before:h-[24px]
       before:transition-all
       before:duration-500
       before:border-t-[3px]
       before:border-l-[3px]
       before:border-rose-800

       hover:before:w-full
       hover:before:h-full

       after:absolute
       after:-bottom-2
       after:-right-2
       after:w-[24px]
       after:h-[24px]
       after:transition-all
       after:duration-500
       after:border-r-[3px]
       after:border-b-[3px]
       after:border-rose-800

       hover:after:w-full
       hover:after:h-full


   `}
    >
      Submit
    </Button>
  );
};

export default GrowingButton;
