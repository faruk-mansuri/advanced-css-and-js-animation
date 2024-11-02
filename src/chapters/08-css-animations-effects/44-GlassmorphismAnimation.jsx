import React from 'react';
import styled from 'styled-components';

const GlassmorphismAnimation = () => {
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-[50vh]
       bg-[#020e33]
       overflow-hidden
       relative
     `}
    >
      <div
        className={`
         relative
         size-[150px]
        `}
      >
        <span />
        <span />
        <span />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  span:nth-child(1) {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 2;
  }

  span:nth-child(2) {
    background: #ff3e3e;
    border-radius: 0;
    animation: animate 4s ease-in-out infinite;
  }
  span:nth-child(3) {
    background: white;
    animation: animate 4s linear infinite;
    animation-delay: 2s;
  }

  @keyframes animate {
    0% {
      transform: translate(-100%, 50px) scale(0.4) rotate(0deg);
      z-index: 1;
    }
    50% {
      transform: translate(100%, -50px) scale(0.4) rotate(180deg);
      z-index: 1;
    }
    50.0001% {
      transform: translate(100%, -50px) scale(0.4) rotate(180deg);
      z-index: 3;
    }
    100% {
      transform: translate(-100%, 50px) scale(0.4) rotate(360deg);
      z-index: 3;
    }
  }
`;

export default GlassmorphismAnimation;

// import React from 'react';
// import styled from 'styled-components';

// const GlassmorphismAnimation = () => {
//   return (
//     <Wrapper
//       className={`
//        grid
//        place-items-center
//        h-[50vh]
//        bg-[#020e33]
//        overflow-hidden
//        relative
//      `}
//     >
//       <div
//         className={`
//          relative
//          size-[150px]
//         `}
//       >
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   span {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//   }

//   span:nth-child(1) {
//     background: rgba(255, 255, 255, 0.1);
//     backdrop-filter: blur(10px);
//     z-index: 2;
//   }

//   span:nth-child(2) {
//     background: #ff3e3e;
//     animation: animate 5s ease-in-out infinite;
//   }
//   span:nth-child(3) {
//     background: white;
//     animation: animate 5s linear infinite;
//     animation-delay: 1s;
//   }
//   span:nth-child(4) {
//     background: blue;
//     animation: animate 5s linear infinite;
//     animation-delay: 2s;
//   }
//   span:nth-child(5) {
//     background: green;
//     animation: animate 5s linear infinite;
//     animation-delay: 3s;
//   }
//   span:nth-child(6) {
//     background: #f17e7e;
//     animation: animate 5s linear infinite;
//     animation-delay: 4s;
//   }

//   @keyframes animate {
//     0% {
//       transform: translate(-100%, 50px) scale(0.4) rotate(0deg);
//       z-index: 1;
//     }
//     50% {
//       transform: translate(100%, -50px) scale(0.4) rotate(180deg);
//       z-index: 1;
//     }
//     50.0001% {
//       transform: translate(100%, -50px) scale(0.4) rotate(180deg);
//       z-index: 3;
//     }
//     100% {
//       transform: translate(-100%, 50px) scale(0.4) rotate(360deg);
//       z-index: 3;
//     }
//   }
// `;

// export default GlassmorphismAnimation;
