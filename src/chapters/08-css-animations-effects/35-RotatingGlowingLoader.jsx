import React from 'react';
import styled from 'styled-components';

const RotatingGlowingLoader = () => {
  return (
    <Wrapper className='flex justify-center items-center gap-x-10 h-full min-h-[50vh] bg-[#172554] p-10'>
      <div
        className={`
         size-[300px]
         rounded-full
         relative

         before:absolute
         before:top-[40px]
         before:right-[60px]
         before:bottom-0
         before:left-0
         before:bg-[#172554]
         before:rounded-full
         

         after:absolute
         after:top-[150px]
         after:right-0
         after:size-16
         after:bg-[#00d4ff]
         after:rounded-full
         after:[box-shadow:0_0_10px_#00d4ff,0_0_20px_#00d4ff,0_0_50px_#00d4ff]
         
         
        `}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      #172554 35%,
      rgba(0, 212, 255, 1) 100%
    );

    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default RotatingGlowingLoader;
