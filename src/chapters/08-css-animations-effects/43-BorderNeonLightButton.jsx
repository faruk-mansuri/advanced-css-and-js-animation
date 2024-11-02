import React from 'react';
import styled from 'styled-components';

const BorderNeonLightButton = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-[50vh] 
       bg-[#051130]
       overflow-hidden
       relative
     `}
    >
      <a
        href='#'
        className={`
         overflow-hidden
         relative
         inline-block
         py-3
         px-5
         text-[#03e9f4]
         uppercase
         tracking-[4px]
         text-xl
         [-webkit-box-reflect:below_2px_linear-gradient(transparent,#0005)]
         hover:bg-[#03e9f4]
         hover:text-[#051130]
         hover:[box-shadow:0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4]
        `}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Neon Button
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span:nth-child(1) {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate-one 1s linear infinite;
  }

  @keyframes animate-one {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  span:nth-child(2) {
    position: absolute;
    display: block;
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate-two 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes animate-two {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
  span:nth-child(3) {
    position: absolute;
    display: block;
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate-three 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes animate-three {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  span:nth-child(4) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(0deg, transparent, #03e9f4);
    animation: animate-four 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes animate-four {
    0% {
      top: 100%;
    }
    50%,
    100% {
      top: -100%;
    }
  }
`;
export default BorderNeonLightButton;
