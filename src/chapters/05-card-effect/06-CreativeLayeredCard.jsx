import React from 'react';

const CreativeLayeredCard = () => {
  return (
    <div
      className={`
       relative
       h-[350px]
       bg-white
       rounded-md
       shadow-xl
       z-0

       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-full
       before:rounded-md
       before:bg-white
       before:duration-500
       before:-z-10

       after:absolute
       after:top-0
       after:left-0
       after:w-full
       after:h-full
       after:rounded-md
       after:bg-white
       after:duration-500
       after:-z-20

       hover:before:rotate-[10deg]
       hover:before:shadow-xl

       hover:after:rotate-[20deg]
       hover:after:shadow-xl

       group
     `}
    >
      <div className='w-full h-full shadow-md bg-white rounded-sm relative'>
        <div className='absolute inset-3 bg-black duration-500 group-hover:bottom-[80px] z-20'>
          <img
            src='./src/assets/images/img1.jpg'
            alt='image'
            className={`
             h-full
             w-full
             object-cover
           `}
          />
        </div>

        <div
          className={`
         absolute
         left-3
         right-3
         bottom-3
         h-[60px]
         text-center
        `}
        >
          <h2 className='text-xl font-semibold text-gray-700 uppercase'>
            john doe <br />
            <span className='text-pink-400 text-base'>founder</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CreativeLayeredCard;
