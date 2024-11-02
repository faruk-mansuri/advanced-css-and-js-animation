import React from 'react';
import styled from 'styled-components';

const ExpandLineMenu = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] bg-white'>
      <ul
        className={`
         flex
         gap-x-4
        `}
      >
        {['Home', 'About', 'Services', 'Team', 'Contact'].map((label) => {
          return (
            <li key={label}>
              <a
                href='#'
                className={`
                 relative
                 px-4
                 py-2
                 block
                 text-gray-700
                 hover:text-white
                 hover:delay-300
                 text-lg
                 uppercase
                 duration-500
                 overflow-auto
                 z-10

                 before:absolute
                 before:w-full
                 before:h-1
                 before:top-[50%]
                 before:translate-y-[-50%]
                 before:-left-full
                 before:bg-red-800
                 before:duration-500
                 before:-inset-1
                 before:-z-10


                 

                `}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a:hover::before {
    animation: line 0.5s forwards;
  }
  @keyframes line {
    0% {
      left: -100%;
      height: 4px;
    }
    50% {
      left: 0;
      height: 4px;
    }
    100% {
      left: 0;
      height: 100%;
    }
  }
`;

export default ExpandLineMenu;
