import React from 'react';
import styled from 'styled-components';

const ButtonHoverEffect = () => {
  return (
    <Wrapper className='h-[50vh] bg-slate-900 grid place-items-center'>
      <a
        href='#'
        className={`
         relative
         w-[180px]
         h-[60px]
        `}
      >
        <span>button</span>
        <span>button</span>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    background: #1e3a8a;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 22px;
  }

  span:nth-child(2) {
    background: white;
    color: #4834d4;
    transition: 0.5s;
    clip-path: polygon(64% 0, 100% 0%, 100% 100%, 64% 100%, 42% 47%);
  }

  span:nth-child(2):hover {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0 52%);
  }
  span:nth-child(1):hover ~ span {
    clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%);
  }
`;
export default ButtonHoverEffect;
