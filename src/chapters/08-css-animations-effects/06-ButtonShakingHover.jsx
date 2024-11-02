import React from 'react';
import styled from 'styled-components';

const ButtonShakingHover = () => {
  return (
    <Wrapper className='p-10 grid place-items-center bg-black'>
      <button
        className={` 
         px-8 py-4
         border-2
         border-white
         text-white
         capitalize
         tracking-wider
         hover:text-red-500
         hover:border-red-500

       `}
      >
        Hover me
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &:hover button {
    animation: shake 0.3s 1;
  }

  @keyframes shake {
    33% {
      transform: rotate(10deg);
    }
    66% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
`;

export default ButtonShakingHover;
