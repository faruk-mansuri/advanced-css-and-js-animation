import React from 'react';
import styled from 'styled-components';

const TextRotator = () => {
  return (
    <Wrapper className='h-screen bg-red-700 grid place-items-center'>
      <h1 className='text-5xl text-white font-bold'>
        I Love Css{' '}
        <span
          className={`
           before:content-['TRANSITIONs']
           before:uppercase
           before:text-blue-900
          `}
        />
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 span::before {
    animation: word-switch 6s infinite;
  }

  @keyframes word-switch {
    0% {
      content: 'transitions';
    }
    50% {
      content: 'animations';
    }
    100% {
      content: 'transforms';
    }
  }
`;
export default TextRotator;
