import React from 'react';

const ImageEffectFive = () => {
  return (
    <div
      className={`
        text-white 
        rounded-md 
        relative 
        overflow-hidden

        before:absolute
        before:top-0
        before:left-0
        before:w-full
        before:h-full
        before:bg-green-600/30
        before:transition-all
        before:duration-300
        before:translate-y-[100%]
        hover:before:translate-y-0
        hover:before:delay-0
        before:delay-500
        
        group
    `}
    >
      <img
        src='./src/assets/images/img5.jpg'
        alt='image'
        className='w-full h-80'
      />

      <div
        className={`
          text-center
          absolute
          top-0
          left-0
          w-full
          h-full
          grid
          place-items-center

          -translate-y-20
          opacity-0
          transition-all
          duration-200

          group-hover:opacity-100
          group-hover:translate-y-0
          delay-300
          `}
      >
        <div className='space-y-4'>
          <h3 className='text-2xl tracking-wider uppercase font-semibold'>
            Amazing Caption!
          </h3>
          <h5 className='bg-slate-500 py-2 px-4 rounded-md'>
            You can write anything here
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ImageEffectFive;
