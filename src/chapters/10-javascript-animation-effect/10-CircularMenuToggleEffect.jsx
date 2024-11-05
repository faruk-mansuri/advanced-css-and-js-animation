import React, { useRef } from 'react';
import styled from 'styled-components';

// icons
import { CiCirclePlus } from 'react-icons/ci';
import {
  IoHomeOutline,
  IoCameraOutline,
  IoPersonOutline,
  IoAirplaneOutline,
  IoKeyOutline,
} from 'react-icons/io5';
import { FaRegEnvelope } from 'react-icons/fa';

const links = [
  { id: 1, Icon: IoHomeOutline },
  { id: 2, Icon: IoCameraOutline },
  { id: 3, Icon: IoPersonOutline },
  { id: 4, Icon: IoAirplaneOutline },
  { id: 5, Icon: FaRegEnvelope },
  { id: 6, Icon: IoKeyOutline },
];

const CircularMenuToggleEffect = () => {
  const containerRef = useRef();

  const handleToggle = () => {
    if (containerRef.current) {
      containerRef.current.classList.toggle('active');
    }
  };
  return (
    <Wrapper
      className={`
       h-screen
       grid
       place-items-center
       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
     `}
    >
      <div
        ref={containerRef}
        className={`
         content
         
         size-[270px]
         flex
         justify-center
         items-center
         relative
         
        `}
      >
        <div
          onClick={handleToggle}
          className={`
           toggle

           size-[70px]
           bg-white
           rounded-full
           text-[#222]
           font-bold text-[40px]
           grid
           place-items-center
           cursor-pointer
           duration-300
           z-10

          `}
        >
          <CiCirclePlus />
        </div>

        <ul
          className={`
           menu
           absolute
           top-0
           left-0
           w-full
           h-full
          `}
        >
          {links.map(({ id, Icon }, index) => {
            return (
              <li
                style={{
                  '--index': index + 1,
                  transform: `rotate(${(360 / 6) * (index + 1)}deg)`,
                }}
                key={id}
                className={`
                 absolute
                 top-0
                 left-0
                 w-full
                 h-full
                 pointer-events-none
          `}
              >
                <a
                  style={{ index: index + 1 }}
                  href='#'
                  key={id}
                  className={`
                   size-[55px]
                   text-[#222]
                   bg-white
                   rounded-full
                   text-3xl
                   grid
                   place-items-center

                   absolute
                   top-[50%]
                   left-[50%]
                   translate-x-[-50%]
                   translate-y-[-50%]
                   duration-300
                   pointer-events-auto
                  `}
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content.active .toggle {
    transform: rotate(45deg);
  }

  .content.active .menu li a {
    top: 0;
    transform: translate(-50%, -50%) rotate(calc(-360deg / 6 * var(--index)));
  }

  /* .content.active .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .menu li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  } */
`;
export default CircularMenuToggleEffect;
