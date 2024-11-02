import React from 'react';
import styled from 'styled-components';

const DrivingCarAndBike = () => {
  return (
    <Wrapper
      className={`relative h-screen [background:url('./src/assets/images/bg.jpg')] [background-position:bottom_left]
       overflow-hidden`}
    >
      <img
        src='./src/assets/images/car.png'
        alt='car'
        className={`
         absolute
         left-[300px]
         bottom-[-50px]
         w-[200px]
         z-10
        `}
      />
      <img
        src='./src/assets/images/motobike.png'
        alt='motorbike'
        className={`
         absolute
         left-[600px]
         bottom-[55px]
         w-[150px]
        `}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  animation: driving 15s linear infinite;
  @keyframes driving {
    0% {
      background-position: bottom left;
    }

    100% {
      background-position: bottom right;
    }
  }
`;

export default DrivingCarAndBike;
