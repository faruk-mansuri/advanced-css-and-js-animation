import React from 'react';
import styled from 'styled-components';

const FancyBorderLoading = () => {
  return (
    <Wrapper className='flex justify-center items-center gap-x-10 h-full min-h-[50vh] bg-gray-950 p-10'>
      <div
        className={`
         loader
         relative
         size-[200px]
         grid
         place-items-center
        `}
      >
        <span />
        <span />
        <span />
        <h2
          className={`
           text-white
           text-xl
           tracking-widest
           font-bold
          `}
        >
          loading...
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid white;
    animation: rotate 5s linear infinite;
  }

  .loader span:nth-child(1) {
    border-radius: 30% 70% 47% 53% / 50% 30% 70% 50%;
  }
  .loader span:nth-child(2) {
    border-radius: 61% 39% 34% 66% / 71% 29% 71% 29%;
    animation-direction: reverse;
  }
  .loader span:nth-child(3) {
    border-radius: 68% 32% 34% 66% / 40% 59% 41% 60%;
    animation-duration: 3s;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default FancyBorderLoading;
