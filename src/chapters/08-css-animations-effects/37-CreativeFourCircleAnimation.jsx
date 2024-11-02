import React from 'react';
import styled from 'styled-components';

const CreativeFourCircleAnimation = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-screen 
       bg-slate-900 
       overflow-hidden
       p-10 
       
     `}
    >
      <div
        className={`
         circle-container
         
         relative

        before:absolute
        before:top-[200px]
        before:left-0
        before:size-[200px]
        before:rounded-full
        before:bg-white
        
        after:absolute
        after:size-[800px]
        after:bg-red-600
        after:rounded-full
        after:left-[50%]
        after:translate-x-[-50%]
        after:top-[400px]
       
       `}
      >
        <div
          className={`
         loader

         relative
         size-[200px]

         before:absolute
         before:w-[200px]
         before:h-[100px]
         before:bg-cyan-500
         before:rounded-bl-full
         before:rounded-br-full
         before:bottom-0
         
        `}
        >
          <div
            className={`
             ball
             absolute
             size-[40px]
             bg-white
             rounded-full
             top-[50%]
             translate-y-[-100%]
             translate-x-[-40px]
            `}
          ></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .circle-container::before {
    animation: animate-circle 4s ease-in-out infinite;
  }
  @keyframes animate-circle {
    0% {
      transform: translateX(15px);
    }
    50% {
      transform: translateX(-15px);
    }
    100% {
      transform: translateX(15px);
    }
  }
  .loader {
    animation: semi-circle 4s ease-in-out infinite;
  }
  @keyframes semi-circle {
    0% {
      transform: rotate(50deg);
    }
    50% {
      transform: rotate(-50deg);
    }
    100% {
      transform: rotate(50deg);
    }
  }
  .ball {
    animation: animate-ball 4s ease-in-out infinite;
  }

  @keyframes animate-ball {
    0% {
      transform: translateY(-100%) translateX(-40px);
    }
    50% {
      transform: translateY(-100%) translateX(200px);
    }
    100% {
      transform: translateY(-100%) translateX(-40px);
    }
  }
`;

export default CreativeFourCircleAnimation;
