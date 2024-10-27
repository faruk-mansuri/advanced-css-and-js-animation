import { Button } from '@/components/ui/button';
import { navLinks } from '@/utils';
import React from 'react';

const MovingButtonBorder = () => {
  return (
    <ul className='p-0 m-0 flex justify-center flex-wrap  gap-4'>
      {navLinks.map((label, index) => {
        return (
          <Button
            key={index}
            variant='ghost'
            className={`
                text-lg
                text-black
                uppercase
                py-6
                rounded-none
                hover:bg-transparent
                relative
                transition-all
                duration-500

                before:absolute
                before:top-[100%]
                before:left-0
                before:w-0
                before:h-[5px]
                before:bg-cyan-500
                before:transition-all
                before:duration-500

                hover:before:w-[50%]
                hover:before:translate-x-[100%]

                after:absolute
                after:top-[100%]
                after:right-0
                after:w-0
                after:h-[5px]
                after:bg-pink-500
                after:transition-all
                after:duration-500

                hover:after:w-[50%]
                hover:after:-translate-x-[100%]

              `}
          >
            <span className='z-10'>{label}</span>
          </Button>
        );
      })}
    </ul>
  );
};

export default MovingButtonBorder;
