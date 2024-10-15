import { Button } from '@/components/ui/button';
import React from 'react';

const LayersSwappingEffect = () => {
  return (
    <Button
      variant='ghost'
      className={`
       py-6
       text-lg
       uppercase
       text-blue-500
       hover:text-blue-500
       hover:bg-transparent
       transition-all
       duration-500
       relative
       border-4
       border-blue-500

       before:content-['Button']
       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-full
       before:bg-slate-800
       before:grid
       before:place-items-center
       before:transform
       before:transition-all
       before:duration-500

       hover:before:left-[100%]
       hover:before:rotate-y-[360deg]
       hover:before:scale-0
       hover:before:opacity-0

       after:content-['Button']
       after:absolute
       after:top-0
       after:-left-[100%]
       after:w-full
       after:h-full
       after:grid
       after:place-items-center
       after:transform
       after:transition-all
       after:duration-500
       after:bg-slate-800
       after:scale-0
       after:opacity-0

       hover:after:rotate-y-[360deg]
       hover:after:opacity-100
       hover:after:scale-100
       hover:after:left-0

   `}
    />
  );
};

export default LayersSwappingEffect;
