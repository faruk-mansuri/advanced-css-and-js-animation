import { Button } from '@/components/ui/button';
import React from 'react';

const TwoLayerSwapping = () => {
  return (
    <Button
      className={`
        text-lg
       py-6
       relative 
       transition-all
       duration-500
       border-4
       border-black
       overflow-hidden

       before:content-['Before']
       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-full
       before:text-[#262626]
       before:tracking-widest
       before:bg-yellow-500

       before:flex
       before:items-center
       before:justify-center
       before:transition-all
       before:duration-500

       after:content-['After']
       after:absolute
       after:top-0
       after:left-0
       after:w-full
       after:h-full
       after:text-[#262626]
       after:tracking-widest
       after:bg-yellow-500
       after:flex
       after:items-center
       after:justify-center
       after:transition-all
       after:duration-500
       after:-translate-x-[100%]
       after:translate-y-[100%]


       hover:before:translate-x-[100%]
       hover:before:-translate-y-[100%]
       hover:after:translate-x-0
       hover:after:translate-y-0

   `}
    />
  );
};

export default TwoLayerSwapping;
