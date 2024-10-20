import React from 'react';
import { navLinks } from '@/utils';

const GrowingBorderMenu = () => {
  return (
    <ul className='p-0 m-0 flex justify-center flex-wrap gap-4'>
      {navLinks.map((label, index) => {
        return (
          <li key={index}>
            <a
              href='#'
              className={`
           text-lg
           relative
           py-2 px-6
           block
           
           before:absolute
           before:top-0
           before:left-0
           before:w-full
           before:h-1
           before:bg-slate-900
           before:transition-all
           before:duration-500
           before:scale-x-0
           before:origin-left

           hover:before:scale-100

           after:absolute
           after:bottom-0
           after:right-0
           after:w-full
           after:h-1
           after:bg-slate-900
           after:transition-all
           after:duration-500
           after:scale-x-0
           after:origin-right

           hover:after:scale-100
           
           
          `}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default GrowingBorderMenu;
