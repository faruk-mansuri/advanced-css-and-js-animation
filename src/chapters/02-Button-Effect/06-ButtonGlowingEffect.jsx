import { Button } from '@/components/ui/button';
import React from 'react';

const ButtonGlowingEffect = () => {
  return (
    <Button
      className={`
        py-6
        text-lg
        overflow-hidden
        capitalize
        transition-all
        duration-1000
        relative

        hover:bg-red-500

        before:absolute
        before:bg-white
        before:top-0
        before:left-0
        before:w-full
        before:h-6
        before:-translate-x-[100%]
        before:rotate-45
        before:transition-all
        before:duration-1000
        
        hover:before:translate-x-[100%]
        
  `}
    >
      <span className='z-10'>Click me</span>
    </Button>
  );
};

export default ButtonGlowingEffect;
