import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ClipPathAnimation = () => {
  const circleOneRef = useRef();
  const circleTwoRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      let scrollValue = window.scrollY;
      if (circleOneRef.current) {
        circleOneRef.current.style.clipPath = `circle(${
          150 + scrollValue * 0.75
        }px at 0 0)`;
      }
      if (circleTwoRef.current) {
        circleTwoRef.current.style.clipPath = `circle(${
          150 + scrollValue * 0.75
        }px at 100% 100%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper
      className={`
        min-h-[200vh]
     `}
    >
      <section
        className={`
          top-0
          left-0
          w-full
          h-screen
          bg-[#333]
          fixed
         `}
      >
        <h2>scroll</h2>

        <div
          className={`
            circle1

            absolute
            w-full
            h-full
            bg-[#22e7c0]
            [clip-path:circle(150px_at_0_0)]
           `}
          ref={circleOneRef}
        >
          <h2>scroll</h2>
        </div>

        <div
          className={`
            circle2

            absolute
            w-full
            h-full
            bg-[#ffb62e]
            [clip-path:circle(150px_at_100%_100%)]
           `}
          ref={circleTwoRef}
        >
          <h2>scroll</h2>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    color: white;
    font-size: 100px;
    font-weight: 700;
  }

  .circle1 h2,
  .circle2 h2 {
    color: transparent;
    -webkit-text-stroke: 5px #333;
  }
`;
export default ClipPathAnimation;
