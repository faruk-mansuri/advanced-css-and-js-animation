import React from 'react';
import styled from 'styled-components';

const BgBoxMoving = () => {
  return (
    <Wrapper className='h-[50vh] bg-slate-800'>
      <div
        className={`
            relative
            w-full
            h-full
            overflow-hidden
          `}
      >
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>
        <div className='square 10'></div>

        <div
          className={`
            absolute
            top-[50%]
            left-[50%]
            translate-x-[-50%]
            translate-y-[-50%]
            text-white
            text-7xl
            uppercase
            font-bold
            text-center
            border-t-[5px]
            border-b-[5px]

            
            `}
        >
          background animation
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .square {
    position: absolute;
    bottom: -100px;
    background: #f2f2f2;
    animation: boxes 10s linear infinite;
  }

  .square:nth-child(1) {
    width: 75px;
    height: 75px;
    left: 7%;
  }
  .square:nth-child(2) {
    width: 65px;
    height: 65px;
    left: 15%;
    animation-delay: 4s;
  }
  .square:nth-child(3) {
    width: 82px;
    height: 82px;
    left: 45%;
    animation-delay: 8s;
  }
  .square:nth-child(4) {
    width: 70px;
    height: 70px;
    left: 55%;
    animation-delay: 2s;
  }
  .square:nth-child(5) {
    width: 60px;
    height: 60px;
    left: 27%;
    animation-delay: 6s;
  }
  .square:nth-child(6) {
    width: 55px;
    height: 55px;
    left: 60%;
    animation-delay: 4s;
  }
  .square:nth-child(7) {
    width: 90px;
    height: 90px;
    left: 85%;
    animation-delay: 9s;
  }
  .square:nth-child(8) {
    width: 70px;
    height: 70px;
    left: 75%;
    animation-delay: 4s;
  }
  .square:nth-child(9) {
    width: 45px;
    height: 45px;
    left: 10%;
    animation-delay: 7s;
  }
  .square:nth-child(10) {
    width: 55px;
    height: 55px;
    left: 60%;
    animation-delay: 7s;
  }

  @keyframes boxes {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: 100%;
      transform: rotate(180deg);
      opacity: 0;
    }
  }
`;

export default BgBoxMoving;
