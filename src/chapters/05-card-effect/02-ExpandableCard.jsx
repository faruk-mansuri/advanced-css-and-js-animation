import { Button } from '@/components/ui/button';
import React from 'react';

const ExpandableCard = () => {
  return (
    <div
      className={`
        relative
        bg-white
        px-8 py-6
        rounded-md
        shadow-xl
        hover:shadow-2xl
        transition-all
        duration-500
        h-[200px]
        hover:h-[460px]
        group
      `}
    >
      <div className='w-full h-48'>
        <img
          src='./src/assets/images/img1.jpg'
          className={`
          w-full
          h-full
          -translate-y-14
          rounded-md
          object-cover
          `}
        />
      </div>

      <div
        className={`
          px-2
          py-4
          text-center
          text-gray-600
          transition-all
          duration-500
          translate-y-[-500px]
          opacity-0
          
          group-hover:opacity-100
          group-hover:translate-y-[-30px]

        `}
      >
        <h1 className='text-xl font-bold'>card hover</h1>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid
          magnam a? Placeat delectus quasi laborum animi ex id, tempore
          aspernatur laboriosam quidem accusantium error rem dolores libero
          nobis vel.
        </p>
      </div>
    </div>
  );
};

export default ExpandableCard;
