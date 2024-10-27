import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';
import React from 'react';

const BorderAndBackgroundEffect = () => {
  return (
    <ul
      className={`
        flex
        justify-center
        flex-wrap  
        gap-4
        `}
    >
      {links.map((label, index) => {
        return (
          <Button
            key={index}
            variant='ghost'
            className={`
                text-lg
                text-black
                hover:text-white
                uppercase
                py-6
                rounded-none
                bg-transparent
                hover:bg-transparent
                relative
                transition-all
                duration-500

                before:absolute
                before:top-0
                before:left-0
                before:w-full
                before:h-full
                before:transition-all
                before:duration-500
                before:border-t-2
                before:border-b-2
                before:border-t-black
                before:border-b-black
                before:scale-y-[2]
                before:opacity-0

                hover:before:scale-y-125
                hover:before:opacity-100

                after:absolute
                after:top-0
                after:left-0
                after:w-full
                after:h-full
                after:bg-black
                after:transition-all
                after:duration-500
                after:scale-0

                hover:after:scale-100
           
           `}
          >
            <span className='z-10'>{label}</span>
          </Button>
        );
      })}
    </ul>
  );
};

export default BorderAndBackgroundEffect;
