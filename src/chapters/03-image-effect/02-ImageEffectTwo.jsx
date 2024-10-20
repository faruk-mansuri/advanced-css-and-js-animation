import React from 'react';

const ImageEffectTwo = () => {
  return (
    <div className='relative bg-red-300 group overflow-hidden'>
      <img
        src='./src/assets/images/img2.jpg'
        alt='image'
        className='w-full h-80 object-cover group-hover:-rotate-12 group-hover:scale-125 transition-all duration-500'
      />

      <div className='absolute top-0 -left-full h-full w-full grid place-items-center bg-black/40 transition-all duration-500 group-hover:left-0 '>
        <div className='text-white text-center px-4 space-y-3'>
          <h1 className='uppercase text-4xl'>Amazing Caption!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, harum?
            lorem100
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageEffectTwo;
