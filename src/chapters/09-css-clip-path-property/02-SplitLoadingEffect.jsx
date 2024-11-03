import React from 'react';
import styled from 'styled-components';

const SplitLoadingEffect = () => {
  return (
    <Wrapper className='h-[50vh] bg-white grid place-items-center'>
      <div
        className={`
         w-[300px]
         h-[60px]
         border-[7px]
         border-[#0a3d62]
         rounded-[10px]
         text-center
         relative
         overflow-hidden
         
        `}
      >
        <span
          className={`
           top-half
           absolute
           top-[3px]
           left-0
           w-full
           h-full
           text-4xl
           font-bold
           uppercase
           text-[#ee5253]
           [clip-path:polygon(0_0,100%_0,100%_50%,0_50%)]
          `}
        >
          loading
        </span>
        <span
          className={`
           bottom-half
           absolute
           top-[3px]
           left-0
           w-full
           h-full
           text-4xl
           font-bold
           uppercase
           text-[#0a3d62]
           [clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)]
          `}
        >
          loading
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .top-half {
    animation: split 4s linear infinite;
  }
  .bottom-half {
    animation: split 4s linear infinite reverse;
  }
  @keyframes split {
    0% {
      transform: translateX(100%);
    }
    40% {
      transform: translateX(0);
    }
    60% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default SplitLoadingEffect;
