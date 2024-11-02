import React from 'react';
import styled from 'styled-components';

const AnimatedImagePattern = () => {
  return (
    <Wrapper
      className={`
        h-screen
        [background:url('./src/assets/images/bg2.png')]
    `}
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  background-position: 0 0;
  animation: animated-pattern 15s infinite;

  @keyframes animated-pattern {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 1000px 500px;
    }
  }
`;

export default AnimatedImagePattern;
