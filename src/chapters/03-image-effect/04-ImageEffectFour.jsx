import React from 'react';

const ImageEffectFour = () => {
  return (
    <div className='relative group overflow-hidden'>
      <img
        src='./src/assets/images/img4.jpg'
        alt='image'
        className='w-full h-80 object-cover group-hover:-translate-y-[40%]  transition-all duration-500'
      />

      <div className='absolute  left-0 h-[40%] px-2 py-4 w-full -bottom-[40%] group-hover:bottom-0 grid place-items-center bg-slate-800 transition-all duration-500'>
        <div className='text-white text-center px-4 space-y-3 '>
          <h1 className='uppercase text-2xl'>Amazing Caption!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, harum?
            lorem100
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageEffectFour;
