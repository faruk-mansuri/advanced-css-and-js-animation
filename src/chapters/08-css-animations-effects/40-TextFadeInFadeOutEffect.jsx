import React from 'react';
import styled from 'styled-components';

const TextFadeInFadeOutEffect = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-[50vh] 
       bg-red-800
       p-10 
       
     `}
    >
      <h2
        className={`
         text-7xl
         text-white
         font-bold
         text-center
         relative
         overflow-hidden

         before:absolute
         before:left-0
         before:w-[120%]
         before:h-[100%]
         before:bg-red-800

        `}
      >
        Text Fading Effect
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2::before {
    animation: fading 10s linear infinite;
  }
  @keyframes fading {
    0% {
      left: -20%;
    }
    50% {
      left: 120%;
    }
    100% {
      left: -20%;
    }
  }
`;

export default TextFadeInFadeOutEffect;
