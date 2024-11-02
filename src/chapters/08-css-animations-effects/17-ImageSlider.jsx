import React from 'react';
import styled from 'styled-components';

const ImageSlider = () => {
  return (
    <Wrapper className='grid place-items-center bg-slate-800 p-20'>
      <div
        className={`
         w-full
         h-[50vh]
        [background-image:url('./src/assets/images/img1.jpg')]
        bg-no-repeat
        bg-cover
       `}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    animation: change-bg 10s infinite;
  }

  @keyframes change-bg {
    0% {
      background-image: url('./src/assets/images/img1.jpg');
    }
    20% {
      background-image: url('./src/assets/images/img2.jpg');
    }
    25% {
      background-image: url('./src/assets/images/img3.jpg');
    }
    45% {
      background-image: url('./src/assets/images/img4.jpg');
    }
    50% {
      background-image: url('./src/assets/images/img5.jpg');
    }
    70% {
      background-image: url('./src/assets/images/img6.jpg');
    }
    75% {
      background-image: url('./src/assets/images/bg.jpg');
    }
    100% {
      background-image: url('./src/assets/images/bg2.png');
    }
  }
`;

export default ImageSlider;
