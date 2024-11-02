import React from 'react';
import styled from 'styled-components';

const HeartBeatEffect = () => {
  return (
    <Wrapper className='bg-slate-800 grid place-items-center p-24'>
      <div
        className={`
         relative
         w-[100px]
         h-[100px]
         bg-red-700

         before:absolute
         before:top-0
         before:left-0
         before:w-full
         before:h-full
         before:bg-red-700
         before:translate-y-[-50%]
         before:rounded-full
         

         after:absolute
         after:top-0
         after:left-0
         after:w-full
         after:h-full
         after:bg-red-700
         after:translate-x-[-50%]
         after:rounded-full

         rotate-45
        `}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    animation: heart-beat 1.4s linear infinite;
  }

  @keyframes heart-beat {
    0% {
      scale: 1;
    }
    25% {
      scale: 1;
    }
    30% {
      scale: 1.4;
    }
    50% {
      scale: 1.2;
    }
    70% {
      scale: 1.4;
    }
    100% {
      scale: 1;
    }
  }
`;
export default HeartBeatEffect;
