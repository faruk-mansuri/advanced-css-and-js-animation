import React from 'react';
import styled from 'styled-components';

const DotsLoadingAnimation = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-[50vh] 
       bg-white
       overflow-hidden
       relative
     `}
    >
      <div>
        <div
          className={`
            relative
            size-[120px]
          `}
        >
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 4 }}></span>
          <span style={{ '--i': 5 }}></span>
          <span style={{ '--i': 6 }}></span>
          <span style={{ '--i': 7 }}></span>
          <span style={{ '--i': 8 }}></span>
        </div>
        <h3
          className={`
            absolute
            top-[50%]
            left-[50%]
            translate-x-[-50%]
            translate-y-[-50%]
            text-2xl
            font-bold
            text-blue-950
          `}
        >
          loading...
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(45deg * var(--i)));
  }
  span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #74baff72;
  }

  span:nth-child(even)::before {
    background: #2980b9;
    animation: circle 2s linear infinite;
    transform-origin: 60px;
  }

  @keyframes circle {
    0%,
    25% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(90deg) scale(1.3);
    }
    75%,
    100% {
      transform: rotate(180deg) scale(1);
    }
  }
`;
export default DotsLoadingAnimation;
