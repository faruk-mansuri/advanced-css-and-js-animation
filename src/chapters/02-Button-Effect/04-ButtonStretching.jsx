import { Button } from '@/components/ui/button';
import React from 'react';

const ButtonStretching = () => {
  return (
    <Button
      variant='outline'
      className='
        py-6
      text-lg
      uppercase
      font-extralight
      transition-all
      duration-500
      
      border-2
      hover:tracking-widest hover:font-bold hover:border-4'
    >
      Stretch
    </Button>
  );
};

export default ButtonStretching;
