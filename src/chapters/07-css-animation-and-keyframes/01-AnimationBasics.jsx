import styled from 'styled-components';

const AnimationBasics = () => {
  return <Wrapper className='size-40 bg-red-500'></Wrapper>;
};

export default AnimationBasics;

const Wrapper = styled.div`
  /* animation: moving 5s infinite; */
  /* animation-fill-mode: both; */
  /* animation-delay: 1s; */
  /* animation-direction: alternate; */

  animation: moving 3s infinite;

  @keyframes moving {
    0% {
      transform: translateX(0);
      background-color: blue;
    }
    30% {
      transform: translateX(200px);
      background-color: red;
    }
    60% {
      transform: translate(100px, 100px);
      background-color: aquamarine;
    }
    100% {
      transform: translate(0);
      background-color: blue;
    }
  }
`;
