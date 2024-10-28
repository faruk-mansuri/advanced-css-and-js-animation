import { Button } from '@/components/ui/button';
import React from 'react';

const ProductCardEffect = () => {
  return (
    <div
      className={`
       relative h-[420px] bg-gray-800 rounded-lg overflow-hidden
       

       before:absolute
       before:top-[-50%]
       before:w-full
       before:h-full
       before:bg-blue-500
       before:skew-y-[-15deg]
       before:duration-500

       hover:before:top-[-70%]
       hover:before:skew-y-[30deg]

       group
     `}
    >
      <div className='relative w-full flex justify-center pt-5 z-[1]'>
        <img
          src='./src/assets/images/headphone.png'
          alt='headphone'
          className='max-w-full duration-500 group-hover:max-w-[50%]'
        />
      </div>

      <div className='relative px-4 py-3 grid place-items-center space-y-3 z-[1]'>
        <h3 className='text-xl text-white font-semibold tracking-wider'>
          Wireless Headphones
        </h3>
        <h2 className='text-2xl text-white'>
          $60.<small>99</small>
        </h2>

        <Button
          className='relative transition-all duration-500 bg-blue-500 rounded-3xl top-[100px]
        group-hover:opacity-100 group-hover:top-0'
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCardEffect;
