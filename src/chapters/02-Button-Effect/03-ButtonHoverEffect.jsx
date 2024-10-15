import React from 'react';
import { Button } from '@/components/ui/button';

const ButtonHoverEffect = () => {
  return (
    <Button
      className='
        py-6
        text-lg
      relative
      transition
      duration-1000
      overflow-hidden
      hover:text-black

      before:absolute
      before:top-0
      before:left-0
      before:w-full
      before:h-full
      before:bg-green-500
      before:transform
      before:transition
      before:duration-1000
      before:rotate-x-90

      after:absolute
      after:top-0
      after:left-0
      after:w-full
      after:h-full
      after:bg-green-500
      after:transform
      after:transition
      after:duration-1000
      after:rotate-y-90

      hover:before:rotate-x-0
      hover:after:rotate-y-0

      '
    >
      <span className='z-10'> Hover me</span>
    </Button>
  );
};

export default ButtonHoverEffect;
