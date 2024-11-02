import React from 'react';
import styled from 'styled-components';

const TextRevealEffect = () => {
  return (
    <Wrapper className='grid place-items-center h-[50vh] p-20 bg-blue-950'>
      <h1
        className={`
          text-7xl
          uppercase
          font-bold
          text-white
          tracking-[1rem]
          relative

          before:content-['loading...']
          before:absolute
          before:top-0
          before:left-0
          before:text-yellow-600
          before:border-r-[8px]
          before:border-yellow-600
          before:overflow-hidden
          
         `}
      >
        Loading...
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1::before {
    animation: reveal 3s infinite alternate;
  }
  @keyframes reveal {
    100% {
      width: 100%;
    }
  }
`;

export default TextRevealEffect;
