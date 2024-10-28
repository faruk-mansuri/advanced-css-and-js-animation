import { Button } from '@/components/ui/button';
import React from 'react';

const CaptainMarvelCard = () => {
  return (
    <div
      className={`
       relative 
       flex 
       items-center 
       bg-gradient-to-r from-[#d41e31] to-[#491f8f]
       rounded-2xl
       h-[350px]

       group
       `}
    >
      <div className='relative space-y-2 w-[40%] left-[20%] text-white capitalize duration-500 opacity-0 group-hover:opacity-100 group-hover:left-[5%]'>
        <h2 className='text-2xl font-bold'>captain marvel</h2>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          reiciendis corporis, id consequatur vitae beatae repellendus dolore
        </p>
        <Button>Read More</Button>
      </div>

      <img
        src='./src/assets/images/img7.png'
        alt='captain marvel'
        className={`
         absolute
         bottom-0
         left-[50%]
         -translate-x-[50%]
         h-[400px]
         duration-500

         group-hover:h-[450px]
         group-hover:left-[80%]

          `}
      />
    </div>
  );
};

export default CaptainMarvelCard;
