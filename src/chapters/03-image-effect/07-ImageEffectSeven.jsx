import { Button } from '@/components/ui/button';
import React from 'react';

const ImageEffectSeven = () => {
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
        before:duration-300
        before:translate-x-[100%]
        before:translate-y-[100%]
        before:rotate-45

        hover:before:-translate-x-[10px]
        hover:before:-translate-y-[40%]
        hover:before:-rotate-45
        hover:before:scale-[3]
        
    `}
    >
      <img
        src='./src/assets/images/img6.jpg'
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
            translate-x-[200px] 
            -translate-y-[200px] 
            transition-all
            duration-300

            group-hover:translate-x-0
            group-hover:translate-y-0
            group-hover:delay-300
          
          `}
        >
          Image Hover
        </h2>
        <p
          className={` 
            text-base
            text-center
            transition-all
            duration-500
            -translate-x-[200px]
            translate-y-[200px]
            group-hover:translate-x-0
            group-hover:translate-y-0
            group-hover:delay-500

           `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          tenetur.
        </p>
        <Button
          className={`
            translate-y-[100px]
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:delay-700
           `}
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default ImageEffectSeven;
