import { Button } from '@/components/ui/button';
import React from 'react';

const ScalingCardEffect = () => {
  return (
    <div className='relative h-[400px] bg-black shadow-xl hover:shadow-2xl duration-500 group'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img
          src='./src/assets/images/img1.jpg'
          alt='image'
          className='object-cover h-full w-full duration-500 group-hover:opacity-0'
        />
      </div>

      <div
        className={`
         absolute
         bottom-0
         w-[80%]
         h-[80px]
         left-[10%]
         bg-white
         text-center
         duration-500
         px-4 py-6
         space-y-4
         overflow-hidden
         
         group-hover:w-full
         group-hover:h-full
         group-hover:left-0
        `}
      >
        <h3 className='text-3xl uppercase'>post title</h3>
        <p className='text-gray-800 opacity-0 group-hover:opacity-100 transition-all delay-500 duration-500'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
          expedita. Odit soluta provident molestias, maiores recusandae omnis
          quaerat, neque dicta unde iusto possimus ipsa voluptatem obcaecati
          esse eius ut nam!
        </p>

        <Button className='opacity-0 group-hover:opacity-100 transition-all delay-500 duration-500'>
          Read Me
        </Button>
      </div>
    </div>
  );
};

export default ScalingCardEffect;
