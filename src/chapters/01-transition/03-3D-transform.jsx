import React from 'react';

const Index = () => {
  return (
    <div>
      <h1 className='text-purple-600 text-7xl'>3D Transform</h1>

      <div className='space-y-3 grid grid-cols-2'>
        <div>
          <h1>Translate</h1>
          <img
            src='https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=600'
            // className='size-320 bg-red-500 transition duration-1000 hover:rotate-x-90'

            className='size-32 bg-red-500  duration-1000 transition hover:translate-z-20'
          />

          <img
            src='https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=600'
            // className='size-320 bg-red-500 transition duration-1000 hover:rotate-x-90'

            className='size-32 transition duration-1000 hover:rotate-y-90'
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
