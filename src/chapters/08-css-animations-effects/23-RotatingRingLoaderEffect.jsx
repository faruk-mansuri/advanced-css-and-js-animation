import React from 'react';
import styled from 'styled-components';

const RotatingRingLoaderEffect = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-white'>
      <div className='relative size-48 rounded-full grid place-items-center '>
        <h1
          className={`
            uppercase text-2xl
          `}
        >
          loading
        </h1>

        <div
          className={`
            rotate
            absolute
            top-0
            left-0
            w-full
            h-full
            border-8 
            border-t-gray-900 
            rounded-full 

            `}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div .rotate {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    100% {
      rotate: 360deg;
    }
  }
`;

export default RotatingRingLoaderEffect;
