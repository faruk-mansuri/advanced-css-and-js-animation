import React from 'react';
import styled from 'styled-components';

const PopUpEffect = () => {
  return (
    <Wrapper className='h-[50vh] bg-gray-600 grid place-items-center'>
      <div
        className={`
         w-[500px]
         h-[250px]
         bg-[#c7ecee]
         p-[20px]
         pt-[80px]
         rounded-lg
         transition-all
         duration-500
         space-y-4
         
        `}
      >
        <h1
          className={`
           text-2xl
           capitalize
          `}
        >
          information
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facilis
          aliquid! Ipsum corporis, aut corrupti adipisci placeat aperiam,
          laborum tenetur quod eaque rem esse fugiat, maxime cupiditate
          deleniti! Assumenda, hic?
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    clip-path: circle(13.3% at 81% 24%);
  }
  div:hover {
    clip-path: circle(115.2% at 81% 24%);
  }
`;
export default PopUpEffect;
