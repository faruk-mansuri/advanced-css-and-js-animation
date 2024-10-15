import { Button } from '@/components/ui/button';
import React from 'react';

const SwipeButtonPart2 = () => {
  return (
    <Button
      className={`
          py-6
          text-lg
  border-4
  relative
  transition-all
  duration-500
  overflow-hidden
  hover:text-white

  before:content-['YEAH']
  before:absolute
  before:left-0
  before:top-0
  before:w-full
  before:h-full
  before:z-20
  before:bg-red-500
  before:flex
  before:items-center
  before:justify-center
  before:-translate-y-[100%]
  before:transition-all
  before:duration-500

  hover:before:translate-y-0
  `}
    >
      <span className='z-10'>Click me</span>
    </Button>
  );
};

export default SwipeButtonPart2;
