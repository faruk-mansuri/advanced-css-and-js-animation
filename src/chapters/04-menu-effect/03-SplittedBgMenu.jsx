import { Button } from '@/components/ui/button';
import { navLinks } from '@/utils';
import React from 'react';

const SplittedBgMenu = () => {
  return (
    <ul className='p-0 m-0 flex justify-center flex-wrap  gap-4'>
      {navLinks.map((label, index) => {
        return (
          <Button
            key={index}
            href='#'
            className={`
                text-lg
                text-gray-500
                hover:text-white
                uppercase
                py-6
                rounded-none
                bg-white
                hover:bg-white
                relative
                transition-all
                duration-500
                
                group
              `}
          >
            <span
              className={`
                  absolute
                  w-[25%]
                  h-full
                  bg-black
                  left-0
                  right-0
                  transition-all
                  duration-500
                  scale-y-0
                  origin-top
                  delay-300

                  group-hover:scale-y-100
                  group-hover:delay-0


                `}
            />
            <span
              className={`
                  absolute
                  w-[25%]
                  h-full
                  bg-black
                  left-[25%]
                  right-0
                  transition-all
                  duration-500
                  scale-y-0
                  origin-top
                  delay-200
                  

                  group-hover:scale-y-100
                  group-hover:delay-100
               `}
            />
            <span
              className={`
                  absolute
                  w-[25%]
                  h-full
                  bg-black
                  left-[50%]
                  right-0
                  transition-all
                  duration-500
                  scale-y-0
                  origin-top
                  delay-100

                  group-hover:scale-y-100
                  group-hover:delay-200

               `}
            />
            <span
              className={`
                  absolute
                  w-[25%]
                  h-full
                  bg-black
                  left-[75%]
                  right-0
                  transition-all
                  duration-500
                  scale-y-0
                  origin-top
                  delay-0

                  group-hover:scale-y-100
                  group-hover:delay-300
               `}
            />
            <span className='z-10'>{label}</span>
          </Button>
        );
      })}
    </ul>
  );
};

export default SplittedBgMenu;
