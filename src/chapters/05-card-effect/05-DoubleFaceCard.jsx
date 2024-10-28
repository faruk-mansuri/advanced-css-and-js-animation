import { Button } from '@/components/ui/button';
import React from 'react';

const DoubleFaceCard = () => {
  return (
    <div className='relative cursor-pointer group'>
      <div className='relative h-[200px] bg-gray-900 flex flex-col justify-center items-center duration-500 translate-y-[100px] group-hover:translate-y-0 group-hover:bg-pink-600 z-[1]'>
        <div className='space-y-3 opacity-20 duration-500 group-hover:opacity-100'>
          <img
            src='./src/assets/images/img8.png'
            alt='image'
            className='w-full'
          />
          <h3 className='text-3xl font-bold text-white text-center'>design</h3>
        </div>
      </div>

      <div className='relative h-[200px] bg-white flex flex-col justify-center items-center p-5 duration-500 shadow-xl -translate-y-[100px] group-hover:translate-y-0 '>
        <div className='space-y-2'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            inventore quisquam deserunt nobis distinctio nisi optio eveniet
            nesciunt fugit alias?
          </p>
          <Button variant='outline'>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default DoubleFaceCard;
