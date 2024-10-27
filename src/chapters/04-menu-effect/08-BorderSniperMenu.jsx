import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';
import React from 'react';

const BorderSniperMenu = () => {
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
                hover:text-yellow-500
                uppercase
                py-6
                rounded-none
                bg-transparent
                hover:bg-transparent
                relative
                transition-all
                duration-500

                hover:after:scale-100

                group
              
            `}
          >
            <span className='z-10'>{label}</span>
            <span
              className={` 
                before:absolute
                before:top-0
                before:left-0
                before:w-2
                before:h-2
                before:bg-transparent
                before:border-t-2
                before:border-l-2
                before:border-yellow-500
                before:transition-all
                before:duration-500
                before:opacity-0

                group-hover:before:-top-[10px]
                group-hover:before:-left-[10px]
                group-hover:before:opacity-100

                after:absolute
                after:top-0
                after:right-0
                after:w-2
                after:h-2
                after:bg-transparent
                after:border-t-2
                after:border-r-2
                after:border-yellow-500
                after:transition-all
                after:duration-500
                after:opacity-0
                
                group-hover:after:-top-[10px]
                group-hover:after:-right-[10px]
                group-hover:after:opacity-100

                `}
            />
            <span
              className={` 
                before:absolute
                before:bottom-0
                before:left-0
                before:w-2
                before:h-2
                before:bg-transparent
                before:border-b-2
                before:border-l-2
                before:border-yellow-500
                before:transition-all
                before:duration-500
                before:opacity-0
                
                group-hover:before:-bottom-[10px]
                group-hover:before:-left-[10px]
                group-hover:before:opacity-100

                after:absolute
                after:bottom-0
                after:right-0
                after:w-2
                after:h-2
                after:bg-transparent
                after:border-b-2
                after:border-r-2
                after:border-yellow-500
                after:transition-all
                after:duration-500
                after:opacity-0
                
                group-hover:after:-bottom-[10px]
                group-hover:after:-right-[10px]
                group-hover:after:opacity-100

                `}
            />
          </Button>
        );
      })}
    </ul>
  );
};

export default BorderSniperMenu;
