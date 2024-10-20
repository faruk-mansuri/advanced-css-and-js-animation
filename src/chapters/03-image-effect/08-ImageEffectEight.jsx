import { Button } from '@/components/ui/button';
import React from 'react';

const ImageEffectEight = () => {
  return (
    <div
      className={`
        text-white 
        rounded-md 
        relative 
        border-4
        border-slate-600
        overflow-hidden

        before:absolute
        before:top-0
        before:left-0
        before:w-full
        before:h-full
        before:bg-slate-800/40
        before:transition-all
        before:duration-500
        before:translate-x-[130%]
        before:-translate-y-[200px]
        before:rotate-180
      

        hover:before:translate-x-0
        hover:before:translate-y-0
        hover:before:-rotate-0
      
        
    `}
    >
      <img
        src='./src/assets/images/img1.jpg'
        alt='image'
        className='w-full h-80'
      />

      <div
        className={`
          absolute
          top-0
          left-0
          w-full
          h-full
          flex
          flex-col
          justify-around
          items-center
          uppercase
          group
          `}
      >
        <h2
          className={` 
            p-2 
            text-center 
            text-2xl 
            w-full
            bg-[rgba(0,0,0,0.8)] 
            -translate-y-[150px] 
            transition-all
            duration-300

            group-hover:translate-y-0
            group-hover:delay-500
          
          `}
        >
          Image Hover
        </h2>
        <p
          className={` 
            text-base
            text-center
            duration-500
            translate-x-[80%]
            rotate-90
            transition-all
            group-hover:translate-x-0
            group-hover:rotate-0
            group-hover:delay-500

          `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          tenetur.
        </p>
        <Button
          className={`
            -translate-y-[300px]
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:delay-500
          `}
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default ImageEffectEight;
