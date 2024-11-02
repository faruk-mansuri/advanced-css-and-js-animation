import React from 'react';
import styled from 'styled-components';

const ColorFulLiquid = () => {
  return (
    <Wrapper className='flex justify-center items-center gap-x-10 h-full min-h-[50vh] bg-gray-800 p-10'>
      <div
        className={`
         glass
        `}
      >
        <div
          className={`
           inner
        `}
        >
          <div
            className={`
             liquid
        `}
          ></div>
        </div>
      </div>

      <div
        className={`
         glass
        `}
      >
        <div
          className={`
           inner
        `}
        >
          <div
            className={`
             liquid
        `}
          ></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .glass {
    position: relative;
  }

  .glass .inner {
    position: relative;
    width: 200px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border: 8px solid transparent;
    border-radius: 40px;
  }

  .inner::before {
    content: '';
    position: absolute;
    width: 175px;
    height: 30px;
    border: 10px solid #444;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: -15px;
    box-shadow: 0 15px 0 #222;
  }
  .inner::after {
    content: '';
    position: absolute;
    top: 70px;
    left: 30px;
    width: 50px;
    height: 250px;
    background: rgba(255, 255, 255, 0.1);
  }

  .liquid {
    position: absolute;
    top: 50px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: #41c1fb;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    animation: animate-liquid 5s linear infinite;
  }
  .liquid::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    border-radius: 50%;
    background: #1fa4e0;
    top: -10px;
  }

  .glass:nth-child(2) .liquid {
    background: #e0bd1f;
    animation-delay: 2.5s;
  }
  .glass:nth-child(2) .liquid::before {
    background: #bb9e1b;
  }

  @keyframes animate-liquid {
    0%,
    20% {
      top: 50px;
    }
    50%,
    70% {
      top: 320px;
    }
    100% {
      top: 50px;
    }
  }
`;

export default ColorFulLiquid;
