import React from 'react';
import AnimationBasics from './01-AnimationBasics';

const CSSAnimationAndKeyframes = () => {
  return (
    <div className='w-full h-full bg-slate-200 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>
        CSS Animation and Keyframes
      </h1>

      <div className='grid p-6 gap-y-12 gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
        <AnimationBasics />
      </div>
    </div>
  );
};

export default CSSAnimationAndKeyframes;
