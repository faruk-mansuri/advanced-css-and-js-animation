import React, { useRef } from 'react';
import styled from 'styled-components';

// ICONS
import {
  CiCamera,
  CiFaceSmile,
  CiCircleChevLeft,
  CiCircleChevRight,
  CiBrightnessUp,
} from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegMoon, FaVuejs } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';

const NineDotsToggle = () => {
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
       bg-[#0f296b]
     `}
    >
      <div
        ref={navigationRef}
        onClick={handleClick}
        className={`
         navigation
         relative
         size-[70px]
         bg-[#c22c15]
         rounded-md
         cursor-pointer
         duration-500
         grid
         place-items-center
     `}
      >
        <span style={{ '--i': 0, '--x': -1, '--y': -1 }}>
          <button>
            <CiCamera />
          </button>
        </span>
        <span style={{ '--i': 1, '--x': 0, '--y': -1 }}>
          <button>
            <CiFaceSmile />
          </button>
        </span>
        <span style={{ '--i': 2, '--x': 1, '--y': -1 }}>
          <button>
            <IoHomeOutline />
          </button>
        </span>
        <span style={{ '--i': 3, '--x': -1, '--y': 0 }}>
          <button>
            <CiCircleChevLeft />
          </button>
        </span>
        <span style={{ '--i': 4, '--x': 0, '--y': 0 }}>
          <button>
            <CiBrightnessUp />
          </button>
        </span>
        <span style={{ '--i': 5, '--x': 1, '--y': 0 }}>
          <button>
            <CiCircleChevRight />
          </button>
        </span>
        <span style={{ '--i': 6, '--x': -1, '--y': 1 }}>
          <button>
            <FaRegMoon />
          </button>
        </span>
        <span style={{ '--i': 7, '--x': 0, '--y': 1 }}>
          <button>
            <FaVuejs />
          </button>
        </span>
        <span style={{ '--i': 8, '--x': 1, '--y': 1 }}>
          <button>
            <RiNextjsLine />
          </button>
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navigation {
    transition-delay: 0.8s;
  }
  .navigation.active {
    width: 200px;
    height: 200px;
    transition-delay: 0s;
  }
  .navigation span {
    position: absolute;
    width: 7px;
    height: 7px;
    background: white;
    border-radius: 50%;
    transform: translate(calc(14px * var(--x)), calc(14px * var(--y)));
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
  }
  .navigation.active span {
    width: 45px;
    height: 45px;
    transform: translate(calc(60px * var(--x)), calc(60px * var(--y)));
    background: #0f296b;
    display: grid;
    place-items: center;
  }

  .navigation span button {
    font-size: 0em;
    transition: 0.5s;
    transition-delay: 0s;
  }

  .navigation.active span button {
    font-size: 1.35em;
    color: white;
    transition-delay: calc(0.1s * var(--i));
  }
  .navigation.active span:hover button {
    color: #f87966;
  }
`;
export default NineDotsToggle;
