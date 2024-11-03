import React from 'react';
import styled from 'styled-components';

const TextAnimation = () => {
  return (
    <Wrapper className='overflow-hidden'>
      <section
        className={`
          relative
          h-screen
          w-full
         `}
      >
        <div className='box box1'>
          <h1 className={`text-2xl font-bold uppercase`}>
            <span>Bye Bye</span>
            <span>2030</span>
          </h1>
        </div>

        <div className='box box2'>
          <h1 className={`text-2xl font-bold uppercase`}>
            <span>Happy New Year</span>
            <span>2031</span>
          </h1>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box2 {
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    background: #4cb979;
  }

  h1 {
    font-size: 45px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    transform: translateY(-70%);
    animation: animate 2s ease-in-out infinite;
    color: #4cb979;
  }

  .box2 h1 {
    color: white;
  }

  span:nth-child(2) {
    line-height: 1em;
    font-size: 2em;
  }

  .box2 h1 {
    animation: animate 2s linear infinite;
  }

  @keyframes animate {
    0%,
    45% {
      transform: translateY(-70%);
    }
    55%,
    90% {
      transform: translateY(70%);
    }
    100% {
      transform: translateY(-70%);
    }
  }
`;
export default TextAnimation;
