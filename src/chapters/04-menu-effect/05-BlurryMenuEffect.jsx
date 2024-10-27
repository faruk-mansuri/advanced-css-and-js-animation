import { Button } from '@/components/ui/button';
import { navLinks } from '@/utils';
import React from 'react';

const BlurryMenuEffect = () => {
  return (
    <ul
      className={`
        p-0
        m-0
        flex
        justify-center
        flex-wrap  gap-4

        [&>button]:hover:blur-[2px]
        [&>button]:hover:opacity-50
        
        hover:[&>button]:opacity-100
        hover:[&>button]:blur-0

        `}
    >
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

                hover:scale-150

                before:absolute
                before:top-0
                before:left-0
                before:w-full
                before:h-full
                before:bg-orange-500
                before:transition-all
                before:duration-500
                before:scale-0

                hover:before:scale-100
                
              `}
          >
            <span className='z-10'>{label}</span>
          </Button>
        );
      })}
    </ul>
  );
};

export default BlurryMenuEffect;
