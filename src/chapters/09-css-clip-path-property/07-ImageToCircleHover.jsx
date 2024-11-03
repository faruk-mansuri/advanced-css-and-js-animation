import React from 'react';
import styled from 'styled-components';

const ImageToCircleHover = () => {
  return (
    <Wrapper className='h-full min-h-[50vh] py-5 bg-white grid place-items-center'>
      <div
        className={`
         relative
         w-[335px]
         h-[500px]
         rounded-md
         overflow-hidden


         group
        `}
      >
        <div
          className={`
           absolute
           top-0
           left-0
           w-full
           h-full
           transition-all
           duration-500
           [clip-path:_circle(75.6%_at_50%_44%)]

           group-hover:[clip-path:circle(13.9%_at_50%_32%)]
          `}
        >
          <img src='./src/assets/images/img1.jpg' className={`w-full h-full`} />
        </div>

        <div
          className={`
           absolute
           left-0
           bottom-[50px]

           translate-y-[100px]
           duration-300
           opacity-0

           group-hover:translate-y-0
           group-hover:opacity-100
          `}
        >
          <div
            className='text-center
           space-y-4'
          >
            <h2
              className={`
             text-2xl
             uppercase
             
            `}
            >
              title
            </h2>
            <p className='text-base'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              nesciunt at assumenda illum rem nihil laboriosam hic, ex quo
              error.
            </p>

            <a
              href='#'
              className={`
             inline-block
             bg-black
             text-white
             px-4
             py-2
             capitalize
            `}
            >
              read more
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ImageToCircleHover;
