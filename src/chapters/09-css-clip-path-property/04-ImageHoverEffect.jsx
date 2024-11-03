import React from 'react';
import styled from 'styled-components';

const ImageHoverEffect = () => {
  return (
    <Wrapper className='h-[50vh] bg-gray-600 grid place-items-center'>
      <div
        className={`
         container
         relative
         w-[80%]
         h-[50%]
         bg-[#222]
        `}
      >
        <div className='clip clip1'></div>
        <div className='clip clip2'></div>
        <div className='clip clip3'></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .clip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
  }
  .clip1 {
    background: url('./src/assets/images/img1.jpg');
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 29% 0, 52% 100%, 0 100%);
  }
  .clip2 {
    background: url('./src/assets/images/img4.jpg');
    background-size: cover;
    background-position: center;
    clip-path: polygon(25% 0, 77% 0, 67% 100%, 33% 100%);
  }
  .clip3 {
    background: url('./src/assets/images/img6.jpg');
    background-size: cover;
    background-position: center;
    clip-path: polygon(76% 0, 100% 0, 100% 100%, 55% 100%);
  }

  .container:hover .clip {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  .container .clip:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;
export default ImageHoverEffect;
