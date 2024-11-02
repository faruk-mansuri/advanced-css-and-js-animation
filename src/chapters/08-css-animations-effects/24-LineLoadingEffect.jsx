import React from 'react';
import styled from 'styled-components';

const LineLoadingEffect = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-black'>
      <div
        className={`
         relative w-[300px] h-[3px] bg-white 
         
        `}
      ></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    animation: line 2s infinite alternate;
  }

  @keyframes line {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }
    45% {
      transform: scaleX(1);
      transform-origin: left;
    }
    50% {
      transform: scaleX(1);
      transform-origin: right;
    }
    100% {
      transform: scaleX(0);
      transform-origin: right;
    }
  }
`;

export default LineLoadingEffect;
