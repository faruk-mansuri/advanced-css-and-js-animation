import { Button } from '@/components/ui/button';
import React from 'react';

const ImageEffectEleven = () => {
  return (
    <div
      className={`
    text-white
    rounded-md
    relative
    border-4
    border-slate-600
    bg-black
    overflow-hidden

    before:absolute
    before:-top-full
    before:left-0
    before:w-full
    before:h-full
    before:bg-green-800/60
    before:transition-all
    before:duration-300

    hover:before:top-0
    hover:before:delay-500

    group
`}
    >
      <img
        src='./src/assets/images/img3.jpg'
        alt='image'
        className='w-full h-80 group-hover:rotate-[360deg] group-hover:scale-0 transition-all duration-500 delay-300 group-hover:delay-0'
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
          -translate-y-[300px]
          opacity-0

          group-hover:translate-y-0
          group-hover:opacity-100
          group-hover:delay-1200

        `}
        >
          Image Hover
        </h2>
        <p
          className={`
          text-base
          text-center
          transition-all
          -translate-y-[300px]
          opacity-0

          group-hover:translate-y-0
          group-hover:opacity-100
          group-hover:delay-1000

        `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          tenetur.
        </p>
        <Button
          className={`
            transition-all
            duration-300
            -translate-y-[300px]
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            group-hover:delay-700
        `}
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default ImageEffectEleven;
