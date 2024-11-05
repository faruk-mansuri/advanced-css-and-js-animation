import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import styled from 'styled-components';

const ExpandableCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-screen
       bg-[#0fece1]
     `}
    >
      <div
        className={`
         relative
         w-[350px]
         bg-[#192a56]
         rounded-xl
         duration-500
         ${isExpanded ? 'h-[420px]' : 'h-[85px]'}

        `}
      >
        <div
          className={`
           absolute
           inset-0
           overflow-hidden
          `}
        >
          <div
            className={`
             relative
             p-[20px]
             text-center
             z-10
             grid
             place-items-center
             gap-y-6
           `}
          >
            <h1
              className={`
               text-white
               font-semibold
               text-xl
               uppercase
               tracking-widest

              `}
            >
              Faruk Mansuri <br />
              <span
                className={`
                 text-sm
                 font-[400]
                `}
              >
                creative developer
              </span>
            </h1>

            <div
              className={`
               relative
               size-[250px]
               [box-shadow:-10px_10px_rgba(0,0,0,0.15)]
               border-4
               border-white
              `}
            >
              <img
                src='./src/assets/images/img1.jpg'
                alt='image'
                className={`
                 absolute
                 top-0
                 left-0
                 w-full
                 h-full
                 object-cover
                 
                 `}
              />
            </div>
            <Button variant='outline'>Hire Me</Button>
          </div>
        </div>

        <div
          className={`
           absolute
           w-[70px]
           h-[60px]
           bg-[#192a56]
           bottom-[-60px]
           left-[50%]
           translate-x-[-50%]
           rounded-bl-[35px]
           rounded-br-[35px]
           cursor-pointer

           before:absolute
           before:size-[35px]
           before:translate-x-0
           before:left-[-34px]
           before:rounded-tr-[35px]
           before:[box-shadow:12px_-15px_0_10px_#192a56]

           after:absolute
           after:size-[35px]
           after:rounded-tl-[34px]
           after:left-full
           after:bg-transparent
           after:[box-shadow:-12px_-15px_0_10px_#192a56]
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span
            className={`
             absolute
             size-[10px]
             border-b-[3px]
             border-r-[3px]
             top-[50%]
             left-[50%]
             translate-x-[-50%]
             rotate-45
             duration-500
             ${isExpanded && 'rotate-[225deg]'}
             
            `}
          ></span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ExpandableCard;
