import React from 'react';

const FlipCardEffect = () => {
  return (
    <div className='relative h-[450px] group'>
      {/* front card */}
      <div
        className={`
           grid
           place-items-center
           shadow-lg 
           hover:shadow-xl
           rounded-md

           absolute
           w-full
           h-full
           backface-hidden
           text-white
           bg-slate-800
           transition-all
           duration-1000
           
           transform
           group-hover:rotate-y-180
          `}
      >
        <h2 className='text-center text-2xl'>front side</h2>
      </div>

      {/* back card */}
      <div
        className={`
           grid
           place-items-center
           shadow-lg 
           hover:shadow-xl
           rounded-md

           absolute
           w-full
           h-full
           backface-hidden
           text-white
           bg-pink-600
           transition-all
           duration-1000

           
           transform
           rotate-y-180
           
           group-hover:rotate-y-0
          `}
      >
        <h2 className='text-center text-2xl'>Back side</h2>
      </div>
    </div>
  );
};

export default FlipCardEffect;

// import { useState } from 'react';

// export default function FlipCardEffect() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div className='flex items-center justify-center h-screen bg-gray-100'>
//       <div
//         className='relative w-64 h-96 [perspective:1000px] cursor-pointer'
//         onClick={() => setIsFlipped(!isFlipped)}
//       >
//         <div
//           className={`
//             absolute w-full h-full transition-all duration-500 transform-style-3d
//             ${isFlipped ? 'rotate-y-180' : ''}
//           `}
//         >
//           {/* front card */}
//           <div
//             className={`
//               absolute w-full h-full [backface-visibility:hidden] bg-blue-500 text-white p-4
//               flex items-center justify-center text-2xl font-bold rounded-lg
//             `}
//           >
//             Front Card
//           </div>

//           {/* back card */}
//           <div
//             className={`
//               absolute w-full h-full [backface-visibility:hidden] bg-red-500 text-white p-4
//               [transform:rotateY(180deg)] flex items-center justify-center text-2xl font-bold rounded-lg
//             `}
//           >
//             Back Card
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
