import React from 'react';

const TextFocusAndHoverEffect = () => {
  return (
    <div className='grid place-items-center h-80 [background:linear-gradient(45deg,#0082ce,#ffd000)]'>
      <h2
        className={`
         relative
         flex
         gap-x-4
         [font-size:4em]
         cursor-pointer
         uppercase
         text-white
         bold
         
        `}
      >
        {[...'focus'].map((text, index) => {
          return (
            <span
              key={index}
              className={`
               relative
               duration-0
               blur-[5px]

               hover:duration-500
               hover:blur-0
             `}
            >
              <i
                className={`

                 before:absolute
                 before:w-[2px]
                 before:h-[8px]
                 before:bg-white
                 before:top-0
                 before:left-[-5px]
                 before:[box-shadow:0_78px_#fff,60px_78px_#fff,60px_0_#fff]
                 before:opacity-0

                 hover:before:opacity-100
                 
                 after:absolute
                 after:w-[8px]
                 after:h-[2px]
                 after:bg-white
                 after:top-0
                 after:left-[-5px]
                 after:[box-shadow:0_85px_#fff,53px_85px_#fff,53px_0_#fff]
                 after:opacity-0

                 hover:after:opacity-100
                 
                `}
              >
                {text}
              </i>
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default TextFocusAndHoverEffect;
