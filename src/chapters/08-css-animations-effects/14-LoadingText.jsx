import React from 'react';
import styled from 'styled-components';

const LoadingText = () => {
  return (
    <Wrapper className='bg-slate-900 grid place-items-center p-20'>
      <ul className='flex'>
        {[...'loading'].map((text, index) => {
          return (
            <li
              key={index}
              className={`
             text-7xl
             font-bold
             uppercase
             text-white
         `}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ul li {
    animation: loading 3s infinite;
  }

  li:nth-child(1) {
    animation-delay: 0s;
  }
  li:nth-child(2) {
    animation-delay: 0.2s;
  }
  li:nth-child(3) {
    animation-delay: 0.4s;
  }
  li:nth-child(4) {
    animation-delay: 0.6s;
  }
  li:nth-child(5) {
    animation-delay: 0.8s;
  }
  li:nth-child(6) {
    animation-delay: 1s;
  }
  li:nth-child(7) {
    animation-delay: 1.2s;
  }

  @keyframes loading {
    0% {
      color: red;
      transform: translateX(-50px);
      letter-spacing: 20px;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    50% {
      letter-spacing: -20px;
      opacity: 1;
    }
    100% {
      color: blue;
      transform: translateX(50px);
      letter-spacing: 20px;
      opacity: 0;
    }
  }
`;

export default LoadingText;
