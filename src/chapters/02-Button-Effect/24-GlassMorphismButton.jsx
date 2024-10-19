import { Button } from '@/components/ui/button';
import React from 'react';

const GlassMorphismButton = () => {
  return (
    <div
      className={`
          relative

          before:absolute
          before:left-[50%]
          before:bottom-[-5px]
          before:w-[30px]
          before:h-[10px]
          before:rounded-[10px]
          before:-translate-x-[50%]
          before:bg-rose-500
          before:transition-all
          before:duration-500
          before:delay-0
          before:shadow-glass-morphism-back-shadow

          hover:before:bottom-0
          hover:before:h-[50%]
          hover:before:w-[80%]
          hover:before:rounded-[30px]
          hover:before:delay-500

          after:absolute
          after:left-[50%]
          after:top-[-5px]
          after:w-[30px]
          after:h-[10px]
          after:rounded-[10px]
          after:-translate-x-[50%]
          after:bg-rose-500
          after:transition-all
          after:duration-500
          after:delay-0
          after:shadow-glass-morphism-back-shadow

          hover:after:top-0
          hover:after:h-[50%]
          hover:after:w-[80%]
          hover:after:rounded-[30px]
          hover:after:delay-500


      
    `}
    >
      <Button
        variant='ghost'
        className={`
          text-lg
          w-full
          font-bold
          text-white
          hover:text-white
          uppercase
          tracking-wide
          hover:tracking-widest
          py-6
          bg-black/20
          hover:bg-black/20
          transition-all
          duration-500
          shadow-glass-morphism
          border-t-[1px]
          border-b-[1px]
          border-t-[rgba(250,52,52,0.1)]
          border-b-[rgba(250,255,255,0.1)]
          rounded-[30px]
          relative
          overflow-hidden
          
          before:absolute
          before:top-0
          before:left-0
          before:w-[50%]
          before:h-full
          before:bg-glassMorphism-before
          before:skew-x-[45deg]
          before:transition-all
          before:duration-500
          before:delay-300

          hover:before:translate-x-[200%]
          hover:before:delay-0
          z-10

          backdrop-blur-lg
        `}
      >
        <span>Button</span>
      </Button>
    </div>
  );
};

export default GlassMorphismButton;
