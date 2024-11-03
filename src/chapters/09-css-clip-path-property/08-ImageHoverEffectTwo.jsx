import React from 'react';
import styled from 'styled-components';

const ImageHoverEffectTwo = () => {
  return (
    <Wrapper className='h-full min-h-[50vh] py-5 bg-white grid place-items-center'>
      <div
        className={`
          relative
          size-[400px]
          bg-[#1D1D1D]
          `}
      >
        <div
          className={`
            absolute
            w-[60%]
            top-[50%]
            left-[50%]
            translate-x-[-50%]
            translate-y-[-50%]
            text-white
            text-center
            space-y-5
          
        `}
        >
          <h2 className='capitalize text-2xl'>image hover effect</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsum fuga iure excepturi nisi mollitia similique dolores odio eaque
            voluptas.
          </p>
          <a
            href='#'
            className={`
              inline-block
              py-2 px-4
              text-white
              bg-transparent
              border-2
              border-white
              capitalize
              duration-500

              hover:text-black
              hover:bg-white
              
             `}
          >
            read more
          </a>
        </div>

        <img
          src='./src/assets/images/img6.jpg'
          alt='image'
          className={`
            absolute
            top-0
            left-0
            size-full
            object-cover
            duration-500
            [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]

            hover:[clip-path:polygon(100%_100%,100%_0,100%_100%,0_100%)]
           `}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default ImageHoverEffectTwo;
