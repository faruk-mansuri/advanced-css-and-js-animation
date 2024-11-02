import React from 'react';
import styled from 'styled-components';

const HexagonLoader = () => {
  return (
    <Wrapper className='h-[50vh] bg-slate-900 grid place-content-center'>
      <div
        className={`
         line
          w-[300px]
           border-b-4
           border-b-white
           relative
        `}
      >
        <div
          className={`
           hexagon
          absolute
          left-0
          right-0
          bottom-3
          w-[50px]
          h-[30px]
          bg-white

          before:absolute
          before:left-0
          before:bottom-0
          before:w-[50px]
          before:h-[30px]
          before:rotate-[60deg]
          before:bg-white

          after:absolute
          after:left-0
          after:bottom-0
          after:w-[50px]
          after:h-[30px]
          after:rotate-[-60deg]
          after:bg-white
         `}
        ></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hexagon {
    animation: animate-hexagon 2s linear infinite;
  }
  .line {
    animation: animate-line 2s linear infinite;
  }

  @keyframes animate-line {
    0% {
      transform: rotate(30deg);
    }
    25% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-30deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(30deg);
    }
  }
  @keyframes animate-hexagon {
    0% {
      left: 0;
      /* transform: rotate(0deg); // default value no need to provide */
    }
    50% {
      left: calc(100% - 50px);
      transform: rotate(720deg);
    }
    100% {
      left: 0;
      /* transform: rotate(0deg); */
    }
  }
`;

export default HexagonLoader;
