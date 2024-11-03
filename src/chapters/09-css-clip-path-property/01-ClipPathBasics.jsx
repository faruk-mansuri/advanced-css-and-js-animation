import React from 'react';

const ClipPathBasics = () => {
  return (
    <div className='text-red-500 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className='grid place-items-center py-10 bg-slate-800'>
        <img
          src='./src/assets/images/img1.jpg'
          alt='image'
          className={`
         size-[300px]
         object-cover
         [clip-path:polygon(50%_0%,0%_100%,100%_100%)]
       `}
        />
      </div>

      <div className='grid place-items-center py-10 bg-slate-800'>
        <img
          src='./src/assets/images/img1.jpg'
          alt='image'
          className={`
         size-[300px]
         object-cover
         [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]
       `}
        />
      </div>

      <div className='grid place-items-center py-10 bg-slate-800'>
        <img
          src='./src/assets/images/img2.jpg'
          alt='image'
          className={`
         size-[300px]
         object-cover
         [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]
       `}
        />
      </div>

      <div className='grid place-items-center py-10 bg-slate-800'>
        <img
          src='./src/assets/images/img3.jpg'
          alt='image'
          className={`
         size-[300px]
         object-cover
         [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]
       `}
        />
      </div>

      <div className='grid place-items-center py-10 bg-slate-800'>
        <img
          src='./src/assets/images/img4.jpg'
          alt='image'
          className={`
         size-[300px]
         object-cover
         [clip-path:circle(50%_at_50%_50%);]
       `}
        />
      </div>
    </div>
  );
};

export default ClipPathBasics;
