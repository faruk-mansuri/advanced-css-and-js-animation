import React from 'react';
import styled from 'styled-components';

const FloatingText = () => {
  return (
    <Wrapper>
      <h1
        className={` 
         text-center
         text-white
         font-bold
         [font-size:90px]
         [text-shadow:0_1px_0_#efefef,0_2px_0_#efefef,0_3px_0_#efefef,0_4px_0_#efefef,0_30px_5px_rgba(0,0,0,0.1)]
       `}
      >
        COMING <br />
        SOON!
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  animation: float 5s infinite alternate;

  @keyframes float {
    0% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(-5deg);
    }
  }
`;

export default FloatingText;
