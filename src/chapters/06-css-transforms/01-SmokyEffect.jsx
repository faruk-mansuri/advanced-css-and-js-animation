import React from 'react';

const SmokyEffect = () => {
  return (
    <>
      <ul
        className={`
         flex justify-center items-center gap-x-4

         [&>li]:hover:rotate-45
         [&>li]:hover:translate-y-[-100px]
         [&>li]:hover:translate-x-[100px]
         [&>li]:hover:opacity-0
         [&>li]:hover:blur-[20px]

         [&>li:nth-child(2)]:hover:delay-300
         [&>li:nth-child(3)]:hover:delay-700
         [&>li:nth-child(4)]:hover:delay-1000
         [&>li:nth-child(5)]:hover:delay-1200
        
        `}
      >
        {['s', 'm', 'o', 'k', 'y'].map((text, index) => {
          return (
            <li
              key={index}
              className={`
               text-white text-7xl uppercase font-bold
               [transition:3s]
             `}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SmokyEffect;
