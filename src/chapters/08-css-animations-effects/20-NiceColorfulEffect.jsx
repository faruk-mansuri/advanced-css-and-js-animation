import React from 'react';
import styled from 'styled-components';

const NiceColorfulEffect = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-slate-800'>
      <div className='size-[100px] relative rotate-45'>
        <span />
        <span />
        <span />
        <span />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    position: absolute;
    width: 50px;
    height: 50px;
    animation: rotate 1s infinite;
  }

  span:nth-child(1) {
    top: 0;
    left: 0;
    background: #fceba7;
  }
  span:nth-child(2) {
    top: 0;
    right: 0;
    background: #55ddb9;
  }
  span:nth-child(3) {
    bottom: 0;
    left: 0;
    background: #fd6c64;
  }
  span:nth-child(4) {
    bottom: 0;
    right: 0;
    background: #1f78b0;
  }

  div {
    animation: animate 1s infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(90deg);
    }
    90% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  @keyframes animate {
    0% {
      width: 100px;
      height: 100px;
    }
    10% {
      width: 100px;
      height: 100px;
    }
    50% {
      width: 150px;
      height: 150px;
    }
    90% {
      width: 100px;
      height: 100px;
    }
    100% {
      width: 100px;
      height: 100px;
    }
  }
`;

export default NiceColorfulEffect;
