import React from 'react';
import styled from 'styled-components';

const TextAnimation = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-screen
       bg-[#222]
   `}
    >
      <h1
        className={`
         relative
         text-7xl
         tracking-widest
         uppercase
         font-semibold

         group
        `}
      >
        {[...'javascript text'].map((text, index) => {
          return (
            <span
              key={index}
              style={{
                transitionDelay: `${index * 40}ms`,
                filter: `hue-rotate(${index * 30}deg)`,
              }}
              className={`
               text-[#555]
               duration-300

               group-hover:text-[#00ff2a]
               group-hover:[text-shadow:0_0_5px_#0f0,0_0_15px_#0f0,0_0_30px_#0f0]
               
            `}
            >
              {text}
            </span>
          );
        })}
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default TextAnimation;
