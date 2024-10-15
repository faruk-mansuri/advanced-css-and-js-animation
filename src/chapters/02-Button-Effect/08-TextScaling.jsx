import { Button } from '@/components/ui/button';
import React from 'react';

const TextScaling = () => {
  return (
    <Button
      className={`
        text-lg
       py-6
       bg-white
       text-slate-900
       border-4
       border-slate-800
       transition-all
       duration-500
       relative
       overflow-hidden

       before:content-['Before']
       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-full
       before:text-white
       before:bg-black
       before:grid
       before:place-items-center
       before:scale-[8]
       before:opacity-0
       before:transition-all
       before:duration-500

       hover:before:scale-100
       hover:before:opacity-100
   `}
    >
      Hover Me
    </Button>
  );
};

export default TextScaling;
