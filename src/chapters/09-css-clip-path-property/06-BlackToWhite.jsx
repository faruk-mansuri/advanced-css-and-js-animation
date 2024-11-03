import React from 'react';
import styled from 'styled-components';

const BlackToWhite = () => {
  return (
    <Wrapper className='h-[50vh] bg-gray-600 grid place-items-center'>
      <div
        className={`
         bg-blue-700
         relative
         w-[80%]
        `}
      >
        <h1
          className={`
           absolute
           text-5xl
           top-[50%]
           left-[50%]
           translate-x-[-50%]
           translate-y-[-50%]
           text-center
           uppercase
          `}
        >
          black
        </h1>
        <h1
          className={`
           absolute
           text-5xl
           top-[50%]
           left-[50%]
           translate-x-[-50%]
           translate-y-[-50%]
           text-center
           uppercase
          `}
        >
          white
        </h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1:nth-child(2) {
    color: white;
    transition: 0.5s;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0% 100%);
    background: #4b5563;
  }
  h1:nth-child(2):hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  h1:nth-child(1):hover ~ h1 {
    // ~ h1 - this means when i hover on the current h1 i will make some changes to h1 seat seats directly after current h1
    clip-path: polygon(0 0, 100% 0, 0 0, 0 0);
  }
`;
export default BlackToWhite;
