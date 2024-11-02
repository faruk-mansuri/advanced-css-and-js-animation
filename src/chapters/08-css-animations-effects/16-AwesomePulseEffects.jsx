import { FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const AwesomePulseEffects = () => {
  return (
    <Wrapper className='grid place-items-center p-20 bg-slate-900'>
      <div
        className={`
         size-44
         bg-[#58ea00]
         rounded-full
         grid
         place-items-center
         relative

         before:absolute
         before:inset-[-20px]
         before:border-2
         before:border-[#58ea00]
         before:rounded-full

         after:absolute
         after:inset-[-20px]
         after:border-2
         after:border-[#58ea00]
         after:rounded-full
         
         
        `}
      >
        <FaPhone className='size-20 text-white' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div::before {
    animation: pulsing 1.5s linear infinite;
  }
  div::after {
    animation: pulsing 1.5s linear infinite 0.5s;
  }

  @keyframes pulsing {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;
export default AwesomePulseEffects;
