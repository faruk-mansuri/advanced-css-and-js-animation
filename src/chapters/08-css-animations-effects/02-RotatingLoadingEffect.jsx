import React from 'react';
import styled from 'styled-components';

const RotatingLoadingEffect = () => {
  return (
    <Wrapper className='grid place-items-center p-10 bg-[#26de81]'>
      <div className='size-32 bg-white rounded-lg'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  perspective: 2000px;

  div {
    animation: loading 3s infinite;
  }

  @keyframes loading {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: rotateX(180deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(180deg) rotateY(-180deg);
    }
  }
`;

export default RotatingLoadingEffect;
