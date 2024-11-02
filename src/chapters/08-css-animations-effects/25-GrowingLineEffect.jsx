import React from 'react';
import styled from 'styled-components';

const GrowingLineEffect = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-black'>
      <div
        className={`
          flex
          gap-x-4
          
        `}
      >
        <div className='obj'></div>
        <div className='obj'></div>
        <div className='obj'></div>
        <div className='obj'></div>
        <div className='obj'></div>
        <div className='obj'></div>
        <div className='obj'></div>
        <div className='obj'></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .obj {
    width: 6px;
    height: 40px;
    background: white;
    border-radius: 10px;
    animation: loading 0.8s infinite alternate;
    transform-origin: bottom;
  }

  .obj:nth-child(2) {
    animation-delay: 0.1s;
  }
  .obj:nth-child(3) {
    animation-delay: 0.2s;
  }
  .obj:nth-child(4) {
    animation-delay: 0.3s;
  }
  .obj:nth-child(5) {
    animation-delay: 0.4s;
  }
  .obj:nth-child(6) {
    animation-delay: 0.5s;
  }
  .obj:nth-child(7) {
    animation-delay: 0.6s;
  }
  .obj:nth-child(8) {
    animation-delay: 0.7s;
  }

  @keyframes loading {
    0% {
      transform: scaleY(0);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0);
    }
  }
`;

export default GrowingLineEffect;
