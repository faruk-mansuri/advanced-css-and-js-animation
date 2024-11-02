import React from 'react';
import styled from 'styled-components';

const FadingOutSquares = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-blue-900'>
      <div
        className={`
            relative
            size-[90px]
            flex
            flex-col
            flex-wrap
           `}
      >
        <span className='s1'></span>
        <span className='s2'></span>
        <span className='s3'></span>
        <span className='s4'></span>
        <span className='s5'></span>
        <span className='s6'></span>
        <span className='s7'></span>
        <span className='s8'></span>
        <span className='s9'></span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    width: 30px;
    height: 30px;
    position: relative;
  }

  span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation: loading 1s linear infinite;
  }

  .s4::before,
  .s5::before,
  .s6::before {
    animation-delay: 0.1s;
  }

  .s7::before,
  .s8::before,
  .s9::before {
    animation-delay: 0.2s;
  }

  @keyframes loading {
    0% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
`;

export default FadingOutSquares;
