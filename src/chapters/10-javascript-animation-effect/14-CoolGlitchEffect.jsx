import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CoolGlitchEffect = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex(Math.random() * 10);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [index]);
  return (
    <Wrapper>
      <div
        className={`
    relative
    h-screen
    w-full
    overflow-hidden
    bg-cover
  `}
        style={{ backgroundImage: "url('./src/assets/images/bg8.jpg')" }}
      >
        {Array.from({ length: 20 }).map((_, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: "url('./src/assets/images/bg8.jpg')",
                top: `${Math.random() * 100}vw`,
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 400}px`,
                height: `${Math.random() * 100}px`,
                backgroundPosition: `${Math.random() * 50}px`,
              }}
              className={`
               absolute
               bg-fixed
               bg-cover

            `}
            ></div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CoolGlitchEffect;
