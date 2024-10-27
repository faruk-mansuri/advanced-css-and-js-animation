import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';
import React from 'react';

const BorderRotateMenu = () => {
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
                text-yellow-500
                hover:text-yellow-500
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
                before:border-l-2
                before:border-yellow-500

                hover:before:rotate-[360deg]
                hover:before:w-4
                hover:before:h-4

                after:absolute
                after:right-0
                after:bottom-0
                after:w-full
                after:h-full
                after:transition-all
                after:duration-500
                after:border-r-2
                after:border-b-2
                after:border-yellow-500

                hover:after:rotate-[360deg]
                hover:after:w-4
                hover:after:h-4
              
            `}
          >
            <span className='z-10'>{label}</span>
          </Button>
        );
      })}
    </ul>
  );
};

export default BorderRotateMenu;
