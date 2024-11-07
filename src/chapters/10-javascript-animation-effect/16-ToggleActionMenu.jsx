import React, { useRef } from 'react';
import styled from 'styled-components';
import { CiHeart } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';

const ToggleActionMenu = () => {
  const navigationRef = useRef();

  const handleClick = () => {
    if (navigationRef.current) {
      navigationRef.current.classList.toggle('active');
    }
  };

  return (
    <Wrapper
      className={`
       h-screen
       grid
       place-items-center
       bg-[#222]
       p-10
    `}
    >
      <div
        className={`
         flex
         gap-x-2
        `}
      >
        {/* USER */}
        <div
          className={`
           bg-white
           h-[70px]
           flex
           justify-center
           items-center
           rounded-[10px]
           p-[10px]
           gap-x-[10px]
          `}
        >
          <div
            className={`
             relative
             w-[50px]
             h-[50px]
             rounded-[6px]
             overflow-hidden
            `}
          >
            <img
              src='./src/assets/images/img13.jpg'
              alt='profile image'
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
          <div
            className={`
             flex
             flex-col
             justify-center
            `}
          >
            <h3 className='text-lg font-semibold'>Emily John</h3>
            <p className=' text-sm text-slate-500'>Web Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <div
          ref={navigationRef}
          onClick={handleClick}
          className={`
           navigation

           relative
           w-[40px]
           h-[70px]
           bg-white
           rounded-[10px]
           cursor-pointer
           duration-500
           flex
           justify-center
           items-center
          `}
        >
          <span className={`translate-y-[-12px] `}>
            <a href='#'>
              <CiHeart />
            </a>
          </span>
          <span>
            <a href='#'>
              <BsPerson />
            </a>
          </span>
          <span className={`translate-y-[12px] `}>
            <a href='#'>
              <FaRegTrashAlt />
            </a>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navigation span {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #222;
    border-radius: 50%;
    transition: 0.5s;
    display: grid;
    place-items: center;
  }

  .navigation.active {
    width: 200px;
  }
  .navigation.active span {
    width: 50px;
    height: 50px;
    transition: 0.5s;
  }
  .navigation.active span:nth-child(1) {
    transform: translateX(-60px);
  }
  .navigation.active span:nth-child(3) {
    transform: translateX(60px);
  }

  .navigation span a {
    font-size: 0em;
  }
  .navigation.active span a {
    font-size: 1.25em;
    color: white;
  }

  .navigation.active span:hover {
    background: #273c75;
  }
`;
export default ToggleActionMenu;
