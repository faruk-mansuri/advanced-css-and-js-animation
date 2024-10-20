import { Button } from '@/components/ui/button';
import React from 'react';

const ImageEffectTen = () => {
  return (
    <div
      className={`
    text-white
    rounded-md
    relative
    border-4
    border-slate-600
    overflow-hidden
    bg-black

    before:absolute
    before:top-0
    before:left-0
    before:w-full
    before:h-full
    before:bg-green-800/60
    before:transition-all
    before:duration-500
    before:opacity-0

    hover:before:opacity-100

    group
`}
    >
      <img
        src='./src/assets/images/img3.jpg'
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
        transition-all
        duration-300
        scale-[10]
        opacity-0
        
        group-hover:opacity-100
        group-hover:scale-100
        group-hover:delay-200

      `}
        >
          Image Hover
        </h2>
        <p
          className={`
        text-base
        text-center
        transition-all
        duration-300
        scale-[10]
        opacity-0
        
        group-hover:opacity-100
        group-hover:scale-100
        group-hover:delay-200

      `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          tenetur.
        </p>
        <Button
          className={`
          transition-all
          duration-300
          translate-y-[150px]
          group-hover:translate-y-0
          group-hover:delay-200
          
      `}
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default ImageEffectTen;
