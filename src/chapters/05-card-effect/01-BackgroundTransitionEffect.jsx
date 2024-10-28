import { Button } from '@/components/ui/button';
import React from 'react';

const BackgroundTransitionEffect = () => {
  return (
    <div
      className={`
        relative 
        bg-white
        px-4 py-6 
        rounded-md 
        shadow-xl 
        hover:shadow-2xl 
        transition-all 
        duration-500
        overflow-hidden


        before:absolute
        before:w-full
        before:h-full
        before:left-0
        before:top-[98%]
        before:bg-pink-500
        before:z-[1]
        before:transition-all
        before:duration-500

        hover:before:top-0
        
     `}
    >
      <div
        className={`
          relative
          capitalize
          text-gray-600
          z-[2]
          transition-all
          duration-500

          hover:text-white
         `}
      >
        <h2 className='text-2xl mb-4'>design</h2>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          aspernatur rem libero expedita. Laboriosam incidunt ex aliquid esse
          tempore commodi voluptatum pariatur quis! Ipsa consectetur dicta nisi.
          Quo laborum voluptas, tempore earum amet omnis nisi hic quos incidunt
          placeat eius numquam sequi! Magnam, iure. Illo soluta cupiditate nam
          atque sapiente!
        </p>

        <Button variant='outline' className='shadow-md mt-2 text-pink-500'>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BackgroundTransitionEffect;
