import React from 'react';

const ImageEffectSix = () => {
  return (
    <div
      className={`
        text-white 
        rounded-md 
        relative 
        overflow-hidden
        border-4
        border-slate-600
    `}
    >
      <img
        src='./src/assets/images/img5.jpg'
        alt='image'
        className='w-full h-80 hover:scale-125 hover:rotate-6 transition-all duration-500'
      />
    </div>
  );
};

export default ImageEffectSix;
