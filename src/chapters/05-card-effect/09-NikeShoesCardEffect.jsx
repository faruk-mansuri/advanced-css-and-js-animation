import { Button } from '@/components/ui/button';
import React from 'react';

const NikeShoesCardEffect = () => {
  return (
    <div className='relative group'>
      <div
        className={`
      relative h-[450px] bg-slate-800 rounded-lg overflow-hidden group

      before:absolute
      before:top-0
      before:left-0
      before:w-full
      before:h-full
      before:bg-[#9bdc22]
      before:clip-circle
      before:duration-500

      hover:before:hover-clip-circle

      after:content-['Nike']
      after:absolute
      after:top-[30%]
      after:left-[-20%]
      after:text-[12em]
      after:text-slate-900
      after:font-semibold
      after:italic
       `}
      >
        <div
          className={`
           absolute w-full h-[220px]
           top-[50%]
           translate-y-[-50%]
           z-[10]
           duration-500
           
           group-hover:top-0
           group-hover:translate-y-0
          `}
        >
          <img
            src='./src/assets/images/shoes.png'
            alt='nike shoes'
            className={`
             absolute
             w-[260px]
             top-[50%]
             left-[50%]
             -translate-x-[50%]
             -translate-y-[50%]
             -rotate-30
              `}
          />
        </div>

        <div
          className={` 
           space-y-4
           absolute
           bottom-0
           w-full
           h-[100px]
           text-center
           duration-1000
           z-10

           group-hover:h-[200px]
          `}
        >
          <h2 className='text-2xl relative font-bold tracking-wider text-white'>
            Nike Shoes
          </h2>
          <div className='flex justify-center items-center gap-x-4 opacity-0 group-hover:opacity-100 duration-500 delay-500'>
            <h3 className='text-base tracking-wider text-white uppercase'>
              size:{' '}
            </h3>

            {[7, 8, 9, 10].map((size) => {
              return (
                <span
                  key={size}
                  className='size-6 bg-white rounded-sm grid place-items-center hover:text-gray-500 hover:bg-[#9bdc28] cursor-pointer'
                >
                  {size}
                </span>
              );
            })}
          </div>

          <div className='flex justify-center items-center gap-x-4  opacity-0 group-hover:opacity-100 duration-500 delay-700'>
            <h3 className='text-base tracking-wider text-white uppercase'>
              Color:
            </h3>

            {['#0e56e7', '#12c433', '#9bdc28'].map((color) => {
              return (
                <span
                  key={color}
                  style={{ backgroundColor: color }}
                  className={`size-6 rounded-full  hover:text-gray-500 hover:bg-[#9bdc28] cursor-pointer`}
                />
              );
            })}
          </div>

          <button
            variant='outline'
            className='px-4 py-2 bg-white rounded-md delay-1000 opacity-0 transition-all duration-500 translate-y-[100px] group-hover:translate-y-0
            group-hover:opacity-100'
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NikeShoesCardEffect;
