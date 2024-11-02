import React from 'react';
import styled from 'styled-components';

const CreativeWave = () => {
  return (
    <Wrapper className='bg-slate-900 grid place-items-center p-20'>
      <button
        className={` 
         px-8 py-4
         border-2
         text-blue-500
         tracking-wider
         border-blue-500
         uppercase
         relative
         overflow-hidden

         hover:text-white
         group

         z-10
       `}
      >
        <span className='z-10'>Hover me</span>
        <div
          className={`
         absolute
         w-full
         h-full
         left-0
         top-[calc(100%+22px)]
         bg-[#00b3ff]
         transition-all
         duration-500

         before:absolute
         before:top-[-22px]
         before:left-0
         before:w-full
         before:h-[22px]
         
         before:[background-image:url('./src/assets/images/wave.png')]
         
         group-hover:top-0
         -z-10
        `}
        />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    div::before {
      animation: wavy 0.5s infinite;
    }
  }
  @keyframes wavy {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 118px;
    }
  }
`;
export default CreativeWave;
