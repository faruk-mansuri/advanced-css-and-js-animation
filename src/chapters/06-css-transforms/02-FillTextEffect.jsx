import React from 'react';

const FillTextEffect = () => {
  return (
    <div className='grid place-items-center'>
      <h1
        className={` 
       m-0
       p-0
       text-7xl
       font-bold
       uppercase
       text-gray-400
       relative
       

       before:content-['text']
       before:absolute
       before:top-0
       before:left-0
       before:text-black
       before:w-0
       before:overflow-hidden
       before:duration-500

       hover:before:w-full
      
       
       
   `}
      >
        text
      </h1>
    </div>
  );
};

export default FillTextEffect;
