import React from 'react';
import styled from 'styled-components';

const CloudRainDrops = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-[50vh] 
       bg-[#00e1ffaa] 
       overflow-hidden
       p-10 
       
     `}
    >
      <div
        className='
         relative
         h-[400px]
         w-[320px]
         border-b-4
         border-b-white
         '
      >
        <div
          className={`
         cloud

         relative
         w-full
         h-[100px]
         top-[50px]
         bg-white
         rounded-[100px]
         
         before:absolute
         before:size-[110px]
         before:rounded-full
         before:bg-white
         before:top-[-50px]
         before:left-[40px]
         before:[box-shadow:90px_0_0_30px_white,40px_70px_0_10px_white]
       `}
        />
        <div
          className={`
         rain

         relative
         flex
         justify-center
         
         z-10
       `}
        >
          <span style={{ '--seconds': 11 }}></span>
          <span style={{ '--seconds': 12 }}></span>
          <span style={{ '--seconds': 10 }}></span>
          <span style={{ '--seconds': 14 }}></span>
          <span style={{ '--seconds': 18 }}></span>
          <span style={{ '--seconds': 14 }}></span>
          <span style={{ '--seconds': 17 }}></span>
          <span style={{ '--seconds': 19 }}></span>
          <span style={{ '--seconds': 12 }}></span>
          <span style={{ '--seconds': 20 }}></span>
          <span style={{ '--seconds': 11 }}></span>
          <span style={{ '--seconds': 18 }}></span>
          <span style={{ '--seconds': 14 }}></span>
          <span style={{ '--seconds': 19 }}></span>
          <span style={{ '--seconds': 15 }}></span>
          <span style={{ '--seconds': 12 }}></span>
          <span style={{ '--seconds': 11 }}></span>
          <span style={{ '--seconds': 14 }}></span>
          <span style={{ '--seconds': 12 }}></span>
          <span style={{ '--seconds': 16 }}></span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .rain span {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    margin: 0 2px;
    animation: rain 1s linear infinite;
    animation-delay: calc(15s / var(--seconds));
  }

  @keyframes rain {
    0% {
      transform: translateY(0) scale(1);
    }
    70% {
      transform: translateY(288px) scale(1);
    }
    100% {
      transform: translateY(288px) scale(0);
    }
  }
`;
export default CloudRainDrops;
