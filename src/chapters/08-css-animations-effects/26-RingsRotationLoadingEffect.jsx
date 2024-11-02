import React from 'react';
import styled from 'styled-components';

const RingsRotationLoadingEffect = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-blue-950'>
      <div
        className={`
          size-[200px]
          relative
        `}
      >
        <div
          className={`
            absolute
            inset-0
            border-l-[5px]
            border-l-[#eb4d4d]
            border-r-[5px]
            border-r-[#eb4d4d]
            border-t-[5px]
            border-t-transparent
            border-b-[5px]
            border-b-transparent
            rounded-full
            `}
        ></div>
        <div
          className={`
            middle
            absolute
            inset-[30px]
            border-l-[5px]
            border-l-[#218c74]
            border-r-[5px]
            border-r-[#218c74]
            border-t-[5px]
            border-t-transparent
            border-b-[5px]
            border-b-transparent
            rounded-full
          `}
        ></div>
        <div
          className={`
            absolute
            inset-[60px]
            border-l-[5px]
            border-l-[#ccae62]
            border-r-[5px]
            border-r-[#ccae62]
            border-t-[5px]
            border-t-transparent
            border-b-[5px]
            border-b-transparent
            rounded-full
            `}
        ></div>
        <div
          className={`
            absolute
            inset-[90px]
            bg-white
            rounded-full
          `}
        ></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    div {
      animation: rotate 1s linear infinite;
    }
    .middle {
      animation: rotate 1s linear infinite reverse;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default RingsRotationLoadingEffect;
