import React from 'react';

const Index = () => {
  return (
    <div>
      <h1 className='text-purple-600 text-7xl'>2D Transform</h1>

      <div className='space-y-3 grid grid-cols-2'>
        <div>
          <h1>Translate</h1>
          <div className='size-20 bg-red-500 hover:translate-x-10 hover:translate-y-10 transition duration-1000' />
        </div>

        <div>
          <h1>Scale</h1>
          <div className='size-20 bg-red-500 hover:scale-105  transition duration-1000' />
        </div>

        <div>
          <h1>Rotate</h1>
          <div className='size-20 bg-red-500 hover:rotate-180  transition duration-1000' />
        </div>

        <div>
          <h1>Skew</h1>
          <div className='size-20 bg-red-500 hover:skew-x-12 hover:skew-y-12  transition duration-1000' />
        </div>
      </div>

      <div className='mt-10'>
        <h1>exercise</h1>
        <div className='size-20 bg-red-500 hover:-rotate-45 origin-bottom  transition duration-1000' />
      </div>
    </div>
  );
};

export default Index;
