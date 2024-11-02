import { Button } from '@/components/ui/button';
import React from 'react';
import styled from 'styled-components';

const LightingText = () => {
  return (
    <Wrapper className='bg-slate-900 grid place-items-center p-10 z-50'>
      <ul
        className={`
          flex gap-x-2
         `}
      >
        {[...'lighting'].map((text, index) => {
          return (
            <li
              key={index}
              className={`
            text-gray-500 uppercase
            text-3xl
            font-bold
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
  li {
    animation: lighting 1.4s linear infinite;
  }

  li:nth-child(1) {
    animation-delay: 0;
  }
  li:nth-child(2) {
    animation-delay: 0.1s;
  }
  li:nth-child(3) {
    animation-delay: 0.2s;
  }
  li:nth-child(4) {
    animation-delay: 0.3s;
  }
  li:nth-child(5) {
    animation-delay: 0.4s;
  }
  li:nth-child(6) {
    animation-delay: 0.5s;
  }
  li:nth-child(7) {
    animation-delay: 0.6s;
  }
  li:nth-child(8) {
    animation-delay: 0.7s;
  }

  @keyframes lighting {
    0% {
      color: #6b7280;
      text-shadow: none;
    }
    90% {
      color: #6b7280;
      text-shadow: none;
    }
    100% {
      color: #fff900;
      text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
    }
  }
`;

export default LightingText;
