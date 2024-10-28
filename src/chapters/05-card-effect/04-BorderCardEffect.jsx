import { Button } from '@/components/ui/button';
import React from 'react';

const BorderCardEffect = () => {
  return (
    <div
      className={`
       relative
       h-[400px]
       bg-white
       duration-500
       shadow-lg
       hover:shadow-xl

       group
     `}
    >
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div
          className={`
        p-5
        text-center
        bg-white
        text-gray-600
        mt-16
        space-y-6
         
         `}
        >
          <h2 className='text-2xl bold'>Services</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, iure
            voluptas. Eveniet magni cumque sunt amet expedita incidunt
            cupiditate nesciunt.
          </p>
          <Button>Read More</Button>
        </div>
      </div>

      <div
        className={`
         absolute top-0 left-0 w-full h-full flex justify-center items-center
         bg-blue-950
         duration-500

         group-hover:h-[80px]
         group-hover:w-[80px]
         group-hover:rounded-full
         group-hover:top-[40px]
         group-hover:left-[50%]
         group-hover:-translate-x-[50%]
         group-hover:bg-transparent
         group-hover:border-2
         group-hover:border-blue-950
        `}
      >
        <h2 className='text-7xl text-white font-extrabold duration-500 group-hover:text-4xl group-hover:text-blue-950'>
          88
        </h2>
      </div>
    </div>
  );
};

export default BorderCardEffect;
