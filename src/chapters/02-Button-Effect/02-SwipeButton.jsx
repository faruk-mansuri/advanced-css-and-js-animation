import { Button } from '@/components/ui/button';
import React from 'react';

const SwipeButton = () => {
  return (
    <Button
      variant='outline'
      className='
    py-6
    text-lg
  relative
  transition-all
  duration-1000
  overflow-hidden
  hover:text-white

  before:absolute
  before:left-0
  before:top-0
  before:w-full
  before:h-full
  before:bg-red-500
  before:-translate-x-[100%]
  before:transition-all
  before:duration-1000

  hover:before:translate-x-0
  
  '
    >
      <span className='z-10'>Click me</span>
    </Button>
  );
};

export default SwipeButton;
