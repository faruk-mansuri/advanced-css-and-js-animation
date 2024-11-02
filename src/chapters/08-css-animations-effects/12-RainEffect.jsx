import React from 'react';
import styled from 'styled-components';

const RainEffect = () => {
  return (
    <Wrapper
      className={`
       [background:url('./src/assets/images/bg4.jpg')]
       object-cover
       bg-no-repeat
       w-full
       h-screen
    `}
    >
      <div
        className={`
         h-full
         [background:url('./src/assets/images/rain.png')]
         
       `}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    animation: rain 0.6s linear infinite;
  }
  @keyframes rain {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 20% 100%;
    }
  }
`;
export default RainEffect;
