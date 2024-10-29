import React from 'react';

const CloseTextAnimation = () => {
  return (
    <div className='grid place-items-center h-48 bg-[#9b59b6]'>
      <ul
        className={`
         cursor-pointer
         text-7xl
         font-bold
         text-white
         flex

         [&>li]:hover:rotate-180

         [&>li:last-child]:hover:delay-500

         [&>li:last-child_span:nth-child(2)]:hover:rotate-180
         [&>li:last-child_span:nth-child(2)]:hover:delay-1000

         [&>li:last-child_span:nth-child(1)]:hover:rotate-90
         [&>li:last-child_span:nth-child(1)]:hover:[transition-delay:1.5s]

        `}
      >
        <li
          className={`
           duration-500
           font-['Just_Another_Hand']
          `}
        >
          clo
        </li>
        <li
          className={`
           duration-500
           font-['Just_Another_Hand']
          `}
        >
          <span className='duration-500 inline-block'>s</span>
          <span className='duration-500 inline-block'>e</span>
        </li>
      </ul>
    </div>
  );
};

export default CloseTextAnimation;
