import { Button } from '@/components/ui/button';
import React from 'react';
import styled from 'styled-components';

const AnimatedButton = () => {
  return (
    <Wrapper className='bg-slate-900 grid place-items-center p-10 z-50'>
      <button
        className={`
         px-8 py-4
         border-2
         border-white
         text-white
         capitalize
         tracking-wider
         duration-500
         overflow-hidden
         relative

         before:absolute
         before:top-0
         before:-left-16
         before:w-[50px]
         before:h-full
         before:bg-red-600
         before:skew-x-[-24deg]
         before:z-[-1]
         before:duration-500

         hover:before:animate-none
         hover:before:w-full
         hover:before:left-0
         hover:before:skew-x-0
         
         
       `}
      >
        <span className='z-10'>Hover me</span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button::before {
    animation: moving 2s infinite;
  }

  @keyframes moving {
    0% {
      left: -40px;
    }
    100% {
      left: 110%;
    }
  }
`;

export default AnimatedButton;
