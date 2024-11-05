import React, { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const NightModeRoadAnimation = () => {
  const sceneRef = useRef();

  const toggleTheme = () => {
    if (sceneRef.current) {
      sceneRef.current.classList.toggle('night');
    }
  };
  return (
    <Wrapper>
      <section
        ref={sceneRef}
        className={`
            scene

            relative
            h-screen
            overflow-hidden
            bg-gradient-to-b from-[#6fc1ff] via-[#fff] to-[#fff]
            `}
      >
        <div
          onClick={toggleTheme}
          className={`
            sun
            absolute
            w-[100px]
            h-[100px]
            bg-white
            top-[50px]
            left-[55%]
            rounded-full
            translate-x-[-50%]
            [box-shadow:0_0_50px_#fff]
            duration-500
            cursor-pointer
            `}
        ></div>

        <div
          className={`
            bg

            absolute
            w-full
            h-[445px]
            bottom-0
            [background-size:1500px]
            [background:url('./src/assets/images/bg6.png')]
            bg-repeat-x
            `}
        >
          <img
            src='./src/assets/images/car2.gif'
            alt='car1'
            className={`
              car1
              absolute
              bottom-[20px]
              max-w-[200px]
              z-[1]
              left-[-200px]
              `}
          />
          <img
            src='./src/assets/images/car2.gif'
            alt='car2'
            className={`
              car2
              absolute
              bottom-[50px]
              max-w-[200px]
              right-[-200px]
              `}
          />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .bg {
    animation: animate-bg 25s linear infinite;
  }
  @keyframes animate-bg {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: -1500px;
    }
  }

  .car1 {
    animation: car1-animate 18s linear infinite;
  }
  .car2 {
    animation: car2-animate 12s linear infinite;
  }

  .scene.night {
    background: #222833;
  }
  .scene.night .sun {
    left: 45%;
    box-shadow: 0 0 0 #fff;
  }
  .scene.night .sun::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 20%;
    width: 100%;
    height: 100%;
    background: #222833;
    border-radius: 50%;
  }

  @keyframes car1-animate {
    0% {
      transform: translateX(0px);
    }
    90%,
    100% {
      transform: translateX(calc(100vw + 200px));
    }
  }
  @keyframes car2-animate {
    0% {
      transform: translateX(0px) rotateY(180deg);
    }
    90%,
    100% {
      transform: translateX(calc(-100vw - 200px)) rotateY(180deg);
    }
  }
`;

export default NightModeRoadAnimation;
