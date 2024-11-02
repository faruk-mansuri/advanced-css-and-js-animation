import { Icon } from 'lucide-react';
import { FaHeart, FaGlassMartini, FaGift } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import styled from 'styled-components';

const links = [
  { id: 1, Icon: FaHeart },
  { id: 2, Icon: FaGlassMartini },
  { id: 3, Icon: TbWorld },
  { id: 4, Icon: FaGift },
];

const IconHoverEffect = () => {
  return (
    <Wrapper className='grid place-items-center p-20 bg-white'>
      <ul className='flex gap-x-16'>
        {links.map(({ id, Icon }) => {
          return (
            <li
              key={id}
              className={`
               size-32
               grid
               place-items-center
               rounded-full
               border-4
               border-blue-950
               transition-all
               duration-500
               relative

               before:absolute
               before:top-0
               before:left-0
               before:w-full
               before:h-full
               before:bg-blue-950
               before:rounded-full
               before:transition-all
               before:duration-500
               before:opacity-0

               hover:before:opacity-100
               hover:before:scale-[0.8]

               after:absolute
               after:top-0
               after:left-0
               after:w-full
               after:h-full
               after:bg-transparent
               after:rounded-full
               after:transition-all
               after:duration-500
               after:border-4
               after:border-dashed
               after:border-blue-950
               after:opacity-0

               group
             `}
            >
              <Icon
                className={`
                 size-14 
                 z-10 
                 group-hover:text-white 
                 duration-500
               `}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  li:hover::after {
    opacity: 1;
    animation: rotating 10s linear infinite;
  }

  @keyframes rotating {
    0% {
      transform: scale(0.92) rotate(0deg);
    }
    100% {
      transform: scale(0.92) rotate(360deg);
    }
  }
`;
export default IconHoverEffect;
