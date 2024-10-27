import { Button } from '@/components/ui/button';
import { navLinks } from '@/utils';
import React from 'react';

const MenuEffect = () => {
  return (
    <ul
      className={`
        flex
        justify-center
        flex-wrap  
        gap-4
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
                bg-transparent
                hover:bg-transparent
                relative
                transition-all
                duration-500
                overflow-hidden
                
                before:absolute
                before:top-0
                before:left-0
                before:w-full
                before:h-full
                before:bg-cyan-500
                before:transition-all
                before:duration-500
                before:delay-0
                before:scale-x-0
                before:origin-left
                
                hover:before:scale-x-100
                hover:before:delay-500

                group
              `}
          >
            <span className='opacity-0'>hover me</span>
            <span
              className={`
                absolute
                top-0
                left-0
                w-full
                h-full
                grid
                place-items-center
                transition-all
                duration-500
                delay-500
                
                group-hover:delay-0
                group-hover:-translate-y-[50px]

              `}
            >
              {label}
            </span>
            <span
              className={`
                absolute
                top-full
                left-0
                w-full
                h-full
                grid
                place-items-center
                transition-all
                duration-500
                delay-500

                group-hover:-translate-y-[50px]
                group-hover:delay-0
              `}
            >
              {label}
            </span>
          </Button>
        );
      })}
    </ul>
  );
};

export default MenuEffect;
