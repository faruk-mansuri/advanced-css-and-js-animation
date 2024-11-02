import React from 'react';
import styled from 'styled-components';

const BgBoxGrowing = () => {
  return (
    <Wrapper className='h-[50vh] bg-blue-950 relative overflow-hidden'>
      <h2
        className={`
         text-white
         text-7xl
         font-bold
         uppercase
         absolute
         text-center
         top-[50%]
         left-[50%]
         translate-x-[-50%]
         translate-y-[-50%]
         z-10

      `}
      >
        background container
      </h2>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .box {
    position: absolute;
    top: 80%;
    left: 45%;
    width: 10px;
    height: 10px;
    border: 1px solid #003298;
    animation: boxes 12s ease-in infinite;
    transform: scale(0);
  }
  .box:nth-child(2) {
    top: 40%;
    left: 25%;
    border-color: red;
  }
  .box:nth-child(3) {
    top: 50%;
    left: 75%;
    animation-delay: 4s;
  }
  .box:nth-child(4) {
    top: 10%;
    left: 90%;
    border-color: red;
    animation-delay: 6s;
  }
  .box:nth-child(5) {
    top: 85%;
    left: 10%;
    animation-delay: 8s;
  }
  .box:nth-child(6) {
    top: 10%;
    left: 50%;
    border-color: red;
    animation-delay: 10s;
  }

  @keyframes boxes {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(20) rotate(960deg);
      opacity: 0;
    }
  }
`;
export default BgBoxGrowing;
