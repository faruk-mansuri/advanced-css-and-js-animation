import React from 'react';
import styled from 'styled-components';

const AnimatedTextBg = () => {
  return (
    <Wrapper className='bg-blue-950 h-screen grid place-items-center'>
      <h1
        className={`
         text-7xl
         uppercase
         font-bold
         text-center
         [background-image:url('./src/assets/images/bg3.jpg')]
         bg-clip-text
         text-transparent

        `}
      >
        css animation
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    animation: text-bg 20s linear infinite;
  }

  @keyframes text-bg {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;

export default AnimatedTextBg;
