import React from 'react';

const BlurAndFocusEffect = () => {
  return (
    <section
      className={`
        relative
        w-full
        h-svh
        grid
        place-items-center
        overflow-hidden
      `}
    >
      <h2
        className={`
          relative
          text-white
          [font-size:10em]
          uppercase
          [text-shadow:0_5px_25px_rgba(0,0,0,0.2)]
          font-bold
          z-10
          [transition-duration:2s]

          hover:blur-[10px]
          hover:scale-125

          peer
        `}
      >
        focus
      </h2>

      <img
        src='./src/assets/images/img2.jpg'
        alt='image'
        className={`
          object-cover
          absolute
          w-[140%]
          h-[140%]
          top-[-20%]
          blur-[10px]
          [transition-duration:2s]

          peer-hover:top-0
          peer-hover:left-0
          peer-hover:w-full
          peer-hover:h-full
          peer-hover:blur-0

        `}
      />
    </section>
  );
};

export default BlurAndFocusEffect;
