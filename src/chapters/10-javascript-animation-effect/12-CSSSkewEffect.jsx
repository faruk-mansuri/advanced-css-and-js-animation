import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CSSSkewEffect = () => {
  const skewedRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const value = -10 + window.scrollY / 60;
      if (skewedRef.current) {
        skewedRef.current.style.transform = `skewY(${value}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Wrapper
      className={`
       relative
       h-[200vh]
       bg-white
     `}
    >
      <section
        className={`
         absolute
         h-screen
         w-full
         [background:url('./src/assets/images/img4.jpg')]
         object-cover
        `}
      >
        <span
          ref={skewedRef}
          className={`
           absolute
           -bottom-full
           left-0
           w-full
           h-full
           bg-black
           skew-y-[-10deg]
           origin-top-left
          `}
        />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default CSSSkewEffect;
