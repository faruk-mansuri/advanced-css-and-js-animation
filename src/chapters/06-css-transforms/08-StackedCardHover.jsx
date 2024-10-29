import React from 'react';

const StackedCardHover = () => {
  return (
    <div
      className={`
       grid place-items-center bg-[#833471] h-screen
       relative

       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-full
       before:bg-yellow-400
       before:duration-500
       before:[clip-path:circle(250px_at_center)]

      group
      
    `}
    >
      {/* CARD */}
      <div
        className={`
          relative
          w-[1100px]
          h-[400px]

          [&>div]:w-[300px]
          [&>div]:h-[400px]
          [&>div]:bg-white
          [&>div]:absolute
          [&>div]:top-[calc(50%-200px)]
          [&>div]:left-[50%]
          [&>div]:translate-x-[-50%]
          [&>div]:rounded-md
          [&>div]:shadow-2xl
          [&>div]:duration-500


          [&>div:nth-child(1)]:translate-y-[calc(-50px)]
          [&>div:nth-child(2)]:translate-y-[calc(0px)]
          [&>div:nth-child(3)]:translate-y-[calc(50px)]
          
          [&>div:nth-child(1)]:z-50
          [&>div:nth-child(2)]:z-40
          [&>div:nth-child(3)]:z-30

          [&>div]:rotate-[40deg]
          [&>div]:skew-x-[-20deg]
          [&>div]:skew-y-[-10deg]
          [&>div]:scale-[0.6]

          [&>div:nth-child(2)]:opacity-80
          [&>div:nth-child(3)]:opacity-60


          group-hover:[&>div]:translate-y-0
          group-hover:[&>div]:scale-100
          group-hover:[&>div]:rotate-0
          group-hover:[&>div]:skew-x-0
          group-hover:[&>div]:skew-y-0
          group-hover:[&>div]:z-10
          group-hover:[&>div]:opacity-100


          
          group-hover:[&>div:nth-child(1)]:translate-x-[calc(-200%)]
          group-hover:[&>div:nth-child(3)]:translate-x-[calc(100%)]
          
          `}
      >
        <div
          className={`
            grid place-items-center px-4
            `}
        >
          <div className='opacity-0 group-hover:opacity-100 duration-500'>
            <h2 className='text-2xl font-bold uppercase'>card 1</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              eveniet aliquam nobis beatae veritatis dicta soluta eligendi?
              Recusandae, odio aliquam. Tempore explicabo est ex a vitae alias
              amet? Voluptates, odit.
            </p>
          </div>
        </div>

        <div
          className={`
            grid place-items-center px-4
            `}
        >
          <div className='opacity-0 group-hover:opacity-100 duration-500 group-hover:delay-500'>
            <h2 className='text-2xl font-bold uppercase'>card 2</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              eveniet aliquam nobis beatae veritatis dicta soluta eligendi?
              Recusandae, odio aliquam. Tempore explicabo est ex a vitae alias
              amet? Voluptates, odit.
            </p>
          </div>
        </div>

        <div
          className={`
            grid place-items-center px-4
            `}
        >
          <div className='opacity-0 group-hover:opacity-100 duration-500 group-hover:delay-1000'>
            <h2 className='text-2xl font-bold uppercase'>card 3</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              eveniet aliquam nobis beatae veritatis dicta soluta eligendi?
              Recusandae, odio aliquam. Tempore explicabo est ex a vitae alias
              amet? Voluptates, odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCardHover;
