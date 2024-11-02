import React from 'react';
import styled from 'styled-components';

const NeonTextReveal = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-[50vh] 
       bg-blue-950
       p-10 
       overflow-hidden
     `}
    >
      <div
        className={`
         relative 
         w-[600px]
         h-[150px]
         grid
         place-items-center
        `}
      >
        <div
          className={`
           light-bar
           absolute
           top-0
           left-0
           w-[10px]
           h-full
           bg-white
           rounded-[10px]
           [box-shadow:0_0_10px_#00beff,0_0_20px_#00beff,0_0_40px_#00beff,0_0_80px_#00beff,0_0_120px_#00beff]
           
          `}
        />
        <div
          className={`
           top-layer
           absolute
           top-[-50%]
           left-0
           w-full
           h-[300px]
           bg-blue-950

          `}
        />
        <h2
          className={`
           text-7xl
           uppercase
           font-bold
           text-white
           tracking-widest
           [text-shadow:0_0_10px_#00beff,0_0_20px_#00beff,0_0_40px_#00beff,0_0_80px_#00beff,0_0_120px_#00beff]
           
          `}
        >
          Neon Text
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .light-bar {
    animation: lightBar 5s linear infinite;
  }

  .top-layer {
    animation: topLayer 10s linear infinite;
  }

  @keyframes topLayer {
    5% {
      transform: translateX(0);
    }
    45%,
    50% {
      transform: translateX(100%);
    }
    50.0001%,
    55% {
      transform: translateX(-100%);
    }
    95% {
      transform: translateX(0);
    }
  }

  @keyframes lightBar {
    0% {
      transform: scaleY(0) translateX(0);
    }
    10% {
      transform: scaleY(1) translateX(0);
    }
    90% {
      transform: scaleY(1) translateX(calc(600px - 10px));
    }
    100% {
      transform: scaleY(0) translateX(calc(600px - 10px));
    }
  }
`;

export default NeonTextReveal;
