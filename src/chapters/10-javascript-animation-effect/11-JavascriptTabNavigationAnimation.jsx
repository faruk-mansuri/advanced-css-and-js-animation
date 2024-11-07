import React, { useRef } from 'react';
import styled from 'styled-components';

// icons
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';

const links = [
  { id: 1, Icon: IoHomeOutline },
  { id: 2, Icon: IoPersonOutline },
  { id: 3, Icon: null },
  { id: 4, Icon: CiHeart },
  { id: 5, Icon: IoIosNotificationsOutline },
];

const JavascriptTabNavigationAnimation = () => {
  const toggleBtnRef = useRef();

  const handleToggle = () => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.classList.toggle('active');
    }
  };

  return (
    <Wrapper
      className={`
       h-screen
       grid
       place-items-center
       bg-blue-800
     `}
    >
      <div
        className={`
          relative
          flex
          justify-center
          items-center
        `}
      >
        <div
          ref={toggleBtnRef}
          onClick={handleToggle}
          className={`
            toggle
            relative
            size-[75px]
            bg-[#ff4886]
            cursor-pointer
            grid
            place-items-center
            rounded-full
            translate-y-[-30px]
            z-10
            border-[8px]
            border-blue-800

            before:content-['+']
            before:absolute
            before:text-5xl
            before:text-white
            before:duration-500
           `}
        />

        <div
          className={`
            menu
            size-[60px]
            bg-white

            absolute
            rounded-[70px]
            translate-y-[-50%]
           `}
        >
          <ul
            className={`
              relative
              h-full
              flex
              justify-center
              items-center
              gap-[35px]
             `}
          >
            {links.map(({ id, Icon }, index) => {
              return (
                <li
                  key={id}
                  style={{
                    '--i': `${(index + 1) / 10}s`,
                  }}
                  className={`
                    cursor-pointer
                    translate-y-[-30px]
                    opacity-0
                 `}
                >
                  <a>{Icon && <Icon />}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .toggle.active::before {
    transform: rotate(225deg);
  }

  .menu {
    transition: transform 0.5s, width 0.5s, height 0.5s;
    transition-delay: 1s, 0.5s, 0.5s;
  }
  .toggle.active ~ .menu {
    width: 360px;
    height: 70px;
    transform: translateY(0);
    transition-delay: 0s, 0.5s, 0.5s;
  }

  .menu ul li {
    transition-delay: var(--i);
  }
  .toggle.active ~ .menu ul li {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(0.75s + var(--i));
  }

  .menu ul li:nth-child(3) {
    width: 30px;
  }

  .menu ul li {
    display: block;
    font-size: 1.7em;
    color: #555;
  }

  .menu ul li:hover a {
    color: #ff4886;
  }
`;
export default JavascriptTabNavigationAnimation;
