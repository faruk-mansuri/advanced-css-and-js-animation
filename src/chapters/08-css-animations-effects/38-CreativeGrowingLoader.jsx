import React from 'react';
import styled from 'styled-components';

const CreativeGrowingLoader = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-[50vh] 
       bg-blue-950 
       overflow-hidden
       p-10 
       
     `}
    >
      <div
        className={`
         loader

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
        <span style={{ '--i': 9 }}></span>
        <span style={{ '--i': 10 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 12 }}></span>
        <span style={{ '--i': 13 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 16 }}></span>
        <span style={{ '--i': 17 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 19 }}></span>
        <span style={{ '--i': 20 }}></span>
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
    transform: rotate(calc(18deg * var(--i)));
  }

  span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #00c3ff;
    box-shadow: 0 0 10px #00c3ff, 0 0 20px #00c3ff, 0 0 40px #00c3ff,
      0 0 60px #00c3ff, 0 0 80px #00c3ff, 0 0 100px #00c3ff;
    animation: animate 2s linear infinite;
    /* animation-delay: calc(0.1s * var(--i)); */
    animation-delay: calc(0.2s * var(--i));
  }

  @keyframes animate {
    0% {
      transform: scale(1);
    }
    80%,
    100% {
      transform: scale(0);
    }
  }
`;
export default CreativeGrowingLoader;
