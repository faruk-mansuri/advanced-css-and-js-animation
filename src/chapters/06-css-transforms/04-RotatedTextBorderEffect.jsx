import React from 'react';

const RotatedTextBorderEffect = () => {
  return (
    <div className='grid place-items-center'>
      <div
        className={`
         relative size-[200px] bg-yellow-300

         before:absolute
         before:top-0
         before:left-0
         before:w-full
         before:h-full
         before:border-t-4
         before:border-t-[#58c747]
         before:border-b-4
         before:border-b-[#58c747]
         before:duration-500
         before:scale-x-0

         hover:before:scale-x-100

         after:absolute
         after:top-0
         after:left-0
         after:w-full
         after:h-full
         after:border-r-4
         after:border-r-[#58c747]
         after:border-l-4
         after:border-l-[#58c747]
         after:duration-500
         after:scale-y-0
         
         hover:after:scale-y-100
         hover:after:delay-500

         group
        `}
      >
        <span
          className={`
           absolute
           w-full
           h-full
           block
           bg-yellow-300
           rotate-45

           before:absolute
           before:top-0
           before:left-0
           before:w-full
           before:h-full
           before:border-t-4
           before:border-t-[#58c747]
           before:border-b-4
           before:border-b-[#58c747]
           before:duration-500
           before:scale-x-0
           
           group-hover:before:scale-x-100
           group-hover:after:delay-1000

           after:absolute
           after:top-0
           after:left-0
           after:w-full
           after:h-full
           after:border-r-4
           after:border-r-[#58c747]
           after:border-l-4
           after:border-l-[#58c747]
           after:duration-500
           after:scale-y-0
           
           group-hover:after:scale-y-100
           group-hover:before:[transition-delay:1.5s]

          `}
        />

        <h1
          className={`
           text-slate-800
           absolute
           top-[50%]
           left-[50%]
           translate-x-[-50%]
           translate-y-[-50%]
           text-center
           text-xl
           font-bold
           uppercase
          `}
        >
          CSS <br /> <span className='text-[#58c747] text-2xl'>border</span>
          <br /> hover <br />
          effect
        </h1>
      </div>
    </div>
  );
};

export default RotatedTextBorderEffect;
