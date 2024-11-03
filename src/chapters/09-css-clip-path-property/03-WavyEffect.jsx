import React from 'react';
import styled from 'styled-components';

const WavyEffect = () => {
  return (
    <Wrapper className='h-[50vh] bg-[#2f2f2f] grid place-items-center'>
      <div
        className={`
         relative
         size-[250px]
        `}
      >
        <h2
          className={`
           absolute
           text-7xl
           font-bold
           uppercase
           tracking-widest
           text-center
           [line-height:250px]
          `}
        >
          wave
        </h2>
        <h2
          className={`
           absolute
           text-7xl
           font-bold
           uppercase
           tracking-widest
           text-center
           [line-height:250px]
          `}
        >
          wave
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2:nth-child(1) {
    /* color: #7efff5; */
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
  }
  h2:nth-child(2) {
    color: #03a9f4;
    /* clip-path: polygon(100% 50%, 100% 100%, 0 100%, 0 50%); */
    animation: wave 2s linear infinite;
  }

  @keyframes wave {
    0% {
      clip-path: polygon(
        0% 99%,
        0% 38%,
        16% 54%,
        29% 58%,
        55% 53%,
        64% 47%,
        80% 35%,
        92% 35%,
        100% 36%,
        100% 99%
      );
    }
    50% {
      clip-path: polygon(
        0% 100%,
        0% 67%,
        8% 60%,
        17% 54%,
        31% 50%,
        40% 51%,
        54% 59%,
        71% 62%,
        99% 53%,
        99% 99%
      );
    }
    100% {
      clip-path: polygon(
        0% 99%,
        0% 38%,
        16% 54%,
        29% 58%,
        55% 53%,
        64% 47%,
        80% 35%,
        92% 35%,
        100% 36%,
        100% 99%
      );
    }
  }
`;

export default WavyEffect;
