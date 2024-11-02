import React from 'react';
import styled from 'styled-components';

const ChangingBgColor = () => {
  return (
    <Wrapper className='h-screen grid place-items-center bg-white'>
      <h1 className='text-7xl font-bold text-center capitalize text-white tracking-widest'>
        changed <span>background color</span>
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  animation: bg-change 10s infinite;
  @keyframes bg-change {
    0% {
      background: #272727;
    }
    20% {
      background: darkblue;
    }
    40% {
      background: tomato;
    }
    60% {
      background: lightblue;
    }
    80% {
      background: darkgreen;
    }
    100% {
      background: #272727;
    }
  }
`;

export default ChangingBgColor;
