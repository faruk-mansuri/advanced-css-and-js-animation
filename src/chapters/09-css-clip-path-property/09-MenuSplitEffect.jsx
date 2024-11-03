import React from 'react';
import styled from 'styled-components';

const MenuSplitEffect = () => {
  return (
    <div
      className={`
        h-screen
        grid
        place-items-center
        bg-slate-400
    
        `}
    >
      <ul
        className={`
space-y-2
         `}
      >
        {['home', 'about', 'services', 'team', 'contact'].map((label) => {
          return (
            <li
              key={label}
              className={`
              relative
              overflow-hidden

              before:absolute
              before:top-[50%]
              before:translate-y-[-50%]
              before:w-full
              before:h-[1px]
              before:bg-slate-900
              before:-left-full
              before:duration-500

              hover:before:left-full
            `}
            >
              <a
                href='#'
                data-text={label}
                className={`
                  relative
                  block
                  text-center
                  py-2 px-5
                  uppercase
                  duration-500
                  text-5xl
                  font-bold
                  tracking-widest
                  text-transparent

                  before:content-[attr(data-text)]
                  before:absolute
                  before:top-0
                  before:left-0
                  before:w-full
                  before:py-2
                  before:text-slate-950
                  before:duration-500
                  before:delay-200
                  before:[clip-path:polygon(0_0,100%_0,100%_50%,0_50%)]

                  after:content-[attr(data-text)]
                  after:absolute
                  after:top-0
                  after:left-0
                  after:w-full
                  after:py-2
                  after:text-slate-950
                  after:duration-500
                  after:delay-200
                  after:[clip-path:_polygon(0_50%,100%_50%,100%_100%,0_100%)]

                  hover:before:text-red-800
                  hover:before:translate-x-[10px]
                  hover:before:translate-y-[-3px]

                  hover:after:text-red-800
                  hover:after:translate-x-[-10px]
                  hover:after:translate-y-[3px]
                `}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Wrapper = styled.div``;
export default MenuSplitEffect;
