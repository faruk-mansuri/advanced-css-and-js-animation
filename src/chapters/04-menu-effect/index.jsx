import React from 'react';
import GrowingBorderMenu from './01-GrowingBorderMenu';

const MenuEffectLayout = () => {
  return (
    <div className='w-full h-full bg-slate-200 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>Image Layout</h1>

      <div className='grid gap-y-4'>
        <GrowingBorderMenu />
      </div>
    </div>
  );
};

export default MenuEffectLayout;
