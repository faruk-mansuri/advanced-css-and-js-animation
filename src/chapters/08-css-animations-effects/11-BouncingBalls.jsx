import React from 'react';
import styled from 'styled-components';

const BouncingBalls = () => {
  return (
    <Wrapper className='grid py-[200px] place-items-center bg-slate-800'>
      <ul className='flex gap-x-4 '>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='w-[270px] h-3 bg-white' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  li {
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    animation: bounce 1s infinite;
  }

  li:nth-child(2) {
    animation-delay: 0.34s;
  }
  li:nth-child(3) {
    animation-delay: 0.14s;
  }
  li:nth-child(4) {
    animation-delay: 0.54s;
  }
  li:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default BouncingBalls;
