import React, { useState } from 'react';
import styled from 'styled-components';

const navigationImages = [
  { id: 1, image: './src/assets/images/img9.jpg' },
  { id: 2, image: './src/assets/images/img10.jpg' },
  { id: 3, image: './src/assets/images/img11.jpg' },
  { id: 4, image: './src/assets/images/img12.jpg' },
];

const VideoSlider = () => {
  const [videoIndex, setVideoIndex] = useState(1);
  console.log(videoIndex);

  return (
    <Wrapper>
      <section
        className={`
         relative
         w-full
         h-screen
        `}
      >
        <video
          key={videoIndex}
          className={`
           absolute
           top-0
           left-0
           w-full
           h-full
           object-cover
         `}
          autoPlay
          muted
          loop
        >
          <source
            src={`./src/assets/videos/video${videoIndex}.mp4`}
            type='video/mp4'
          />
        </video>

        <ul
          className={`
           absolute
           bottom-[40px]
           left-[50%]
           translate-x-[-50%]
           z-10
           flex
           justify-center
           items-center
           gap-x-3
          `}
        >
          {navigationImages.map(({ id, image }) => {
            return (
              <li
                key={id}
                onClick={() => setVideoIndex(id)}
                className={`
                 cursor-pointer
                 rounded-[4px]
                 bg-white
                 p-[3px]
                 opacity-70
                 duration-500
                 ${videoIndex === id ? 'opacity-100' : 'opacity-70'}

                 hover:opacity-100
               `}
              >
                <img
                  src={image}
                  alt='navigation image'
                  className={`
                   duration-500
                    ${videoIndex === id ? 'w-[200px]' : 'w-[120px]'}

                   hover:w-[200px]
                  `}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default VideoSlider;
