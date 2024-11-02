import React from 'react';
import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';

const DrawLineAroundButton = () => {
  return (
    <Wrapper className='flex justify-center items-center gap-x-10 h-full min-h-[50vh] bg-white p-10'>
      <button
        className={`
         relative
         px-4
         py-2
         text-xl
         text-gray-950
         font-bold
         uppercase
         tracking-widest

         before:absolute
         before:top-0
         before:left-0
         before:w-full
         before:h-full
         before:bg-[#262626]
         before:scale-0
         before:duration-500
         before:z-[-1]
         before:origin-top-left
         
         hover:before:scale-100
         hover:before:[transition-delay:0.8s]

         hover:text-white
         duration-300
         hover:[transition-delay:0.8s]
         z-10

        
        `}
      >
        <span />
        <span />
        <span />
        <span />
        Button
        <FaPencilAlt
          className={`
           pencil
           size-5
           absolute
           top-[-20px]
           left-0
          `}
        />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span:nth-child(1),
  span:nth-child(3) {
    position: absolute;
    width: 100%;
    height: 3px;
    background: #262626;
  }
  span:nth-child(1) {
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
  }

  button:hover span:nth-child(1) {
    transform: scaleX(1);
    transition: 0.2s;
  }
  span:nth-child(3) {
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
  }

  button:hover span:nth-child(3) {
    transform: scaleX(1);
    transition: 0.2s;
    transition-delay: 0.4s;
  }

  span:nth-child(2),
  span:nth-child(4) {
    position: absolute;
    width: 3px;
    height: 100%;
    background: #262626;
  }

  span:nth-child(2) {
    top: 0;
    right: 0;
    transform: scaleY(0);
    transform-origin: top;
  }

  button:hover span:nth-child(2) {
    transform: scaleY(1);
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  span:nth-child(4) {
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom;
  }

  button:hover span:nth-child(4) {
    transform: scaleY(1);
    transition: 0.2s;
    transition-delay: 0.6s;
  }

  button:hover .pencil {
    color: #222;
    animation: draw 1s linear forwards;
  }

  @keyframes draw {
    0% {
      top: -20px;
      left: 0;
    }
    20% {
      top: -20px;
      left: 100%;
    }
    40% {
      top: calc(100% - 20px);
      left: 100%;
    }
    60% {
      top: calc(100% - 20px);
      left: 0;
    }
    80% {
      top: -20px;
      left: 0;
    }
    100% {
      top: calc(100% - 20px);
      left: 100%;
    }
  }
`;

export default DrawLineAroundButton;
