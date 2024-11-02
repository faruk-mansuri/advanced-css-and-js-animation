import React from 'react';
import styled from 'styled-components';

const NewtonsCradleEffect = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-slate-800'>
      <div className='flex justify-center gap-x-14 border-t-8 w-[24rem] border-white'>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div span {
    display: block;
    width: 3px;
    height: 300px;
    background: white;
    position: relative;
  }
  div span::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    transform: translateX(-50%);
  }

  div span:nth-child(1) {
    transform-origin: top;
    animation: left-arm 2s ease-in infinite;
  }
  div span:nth-child(5) {
    transform-origin: top;
    animation: right-arm 2s ease-in infinite 1s;
  }

  @keyframes left-arm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(60deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes right-arm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-60deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default NewtonsCradleEffect;
