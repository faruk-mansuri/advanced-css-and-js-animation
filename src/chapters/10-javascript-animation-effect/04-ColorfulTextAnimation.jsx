import React from 'react';
import styled from 'styled-components';

const ColorfulTextAnimation = () => {
  return (
    <Wrapper
      className={`
       h-screen
       grid
       place-items-center
       bg-[#252839]

   `}
    >
      <h2
        className={`
         relative
         text-5xl
         tracking-widest
         font-bold
         uppercase
         text-[#fff2]
        `}
      >
        {[...'colorful text'].map((text, index) => {
          return (
            <span
              key={index}
              style={{
                animationDuration: `${Math.random() * 5}s`,
                filter: `hue-rotate(${index * 50}deg)`,
              }}
            >
              {text}
            </span>
          );
        })}
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    animation: animate-text 1s linear infinite;
  }
  @keyframes animate-text {
    0%,
    20% {
      color: #fff2;
    }
    21%,
    79% {
      color: #0f0;
    }
    80%,
    100% {
      color: #fff2;
    }
  }
`;

export default ColorfulTextAnimation;
