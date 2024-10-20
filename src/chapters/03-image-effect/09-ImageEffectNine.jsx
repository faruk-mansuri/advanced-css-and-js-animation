import { Button } from '@/components/ui/button';
import React from 'react';

const ImageEffectNine = () => {
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
    before:scale-0
    before:-rotate-180

    hover:before:delay-500
    hover:before:scale-100
    hover:before:rotate-0

    group
`}
    >
      <img
        src='./src/assets/images/img2.jpg'
        alt='image'
        className='w-full h-80 group-hover:scale-0 transition-all duration-500 delay-500 group-hover:delay-0'
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
        opacity-0
        transition-all
        duration-300

        group-hover:opacity-100
        group-hover:delay-1000

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
        opacity-0
        group-hover:opacity-100
        group-hover:delay-1000

      `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          tenetur.
        </p>
        <Button
          className={`
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
        group-hover:delay-1000
      `}
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default ImageEffectNine;
