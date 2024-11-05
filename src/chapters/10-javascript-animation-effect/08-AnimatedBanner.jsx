import React from 'react';
import styled from 'styled-components';

const AnimatedBanner = () => {
  const stars = Array.from({ length: 100 }, (_, i) => i);

  return (
    <Wrapper>
      <section
        className={`
          relative
          grid 
          place-items-center
          h-screen
          bg-[#0d172e]
          text-center

          before:absolute
          before:w-[30vw]
          before:h-[30vw]
          before:border-[5vw]
          before:border-[#ff9100]
          before:rounded-full
          before:[box-shadow:0_0_0_1vw_#0d172e,0_0_0_1.3vw_#fff]
         `}
      >
        <h2
          className={`
            absolute
            text-5xl
            md:text-[80px]
            text-white
            font-normal
            z-[5]
            skew-y-[-7deg]
            [text-shadow:1px_1px_0_#ccc,2px_2px_0_#ccc,3px_3px_0_#ccc,4px_4px_0_#ccc,5px_5px_0_#ccc,10px_10px_0px_rgba(0,0,0,0.2)]
           `}
        >
          Welcome to our <br />{' '}
          <span
            className={`
            font-bold
            text-7xl
            md:text-[100px]
            [text-shadow:1px_1px_0_#ccc,2px_2px_0_#ccc,3px_3px_0_#ccc,4px_4px_0_#ccc,5px_5px_0_#ccc,6px_6px_0_#ccc,7px_7px_0_#ccc,8px_8px_0_#ccc,9px_9px_0_#ccc,10px_10px_0_#ccc,20px_20px_0px_rgba(0,0,0,0.2)]
              `}
          >
            site
          </span>
        </h2>
        {stars.map((index) => {
          let x = Math.floor(Math.random() * window.innerWidth);
          let y = Math.floor(Math.random() * window.innerHeight);
          const size = Math.random() * 4;
          const animation_duration = Math.random() * 2;

          return (
            <span
              key={index}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: `${1 + size}px`,
                height: `${1 + size}px`,
                animationDuration: `${animation_duration + 1}s`,
              }}
              className={`
                star
                bg-white
                rounded-full
                [box-shadow:0_0_10px_#fff,0_0_20px_#fff,0_0_40px_#fff,0_0_60px_#fff]
                 `}
            />
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    animation: floating 5s ease-in-out infinite alternate;
  }
  @keyframes floating {
    0% {
      transform: skewY(-7deg) translateY(-20px);
    }
    100% {
      transform: skewY(-7deg) translateY(20px);
    }
  }
  .star {
    animation: animate-star linear infinite;
  }
  @keyframes animate-star {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default AnimatedBanner;
