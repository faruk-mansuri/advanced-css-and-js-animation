import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AnimationOnScroll = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((sec) => {
        const scrollDistance = window.scrollY;

        //  returns the distance of the section element from the top
        const secDistance = sec.offsetTop;

        if (scrollDistance >= secDistance - 150) {
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
      <section
        className='sec1 show-animate'
        ref={(element) => (sectionsRef.current[0] = element)}
      >
        <h1 className='animate'>First Section</h1>
        <p className='animate'>animation on scroll HTML, CSS & javascript</p>
      </section>

      <section
        className='sec2'
        ref={(element) => (sectionsRef.current[1] = element)}
      >
        <h1 className='animate'>Second Section</h1>
        <p className='animate'>animation on scroll HTML, CSS & javascript</p>
      </section>

      <section
        className='sec3'
        ref={(element) => (sectionsRef.current[2] = element)}
      >
        <h1 className='animate'>Third Section</h1>
        <p className='animate'>animation on scroll HTML, CSS & javascript</p>
      </section>

      <section
        className='sec4'
        ref={(element) => (sectionsRef.current[3] = element)}
      >
        <h1 className='animate'>Fourth Section</h1>
        <p className='animate'>animation on scroll HTML, CSS & javascript</p>
      </section>

      <section
        className='sec5'
        ref={(element) => (sectionsRef.current[4] = element)}
      >
        <div className='images'>
          <img
            src='./src/assets/images/animation-img1.jpg'
            className='animate'
          />
          <img
            src='./src/assets/images/animation-img2.jpg'
            className='animate'
          />
          <img
            src='./src/assets/images/animation-img3.jpg'
            className='animate'
          />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1f242d;
    overflow: hidden;
  }

  .sec2 {
    background-color: rgb(96, 30, 158);
  }

  .sec3 {
    background-color: #056964;
  }

  .sec4 {
    background-color: #ffa600;
  }

  .sec5 {
    background-color: rgb(255, 0, 85);
  }

  h1 {
    font-size: 90px;
    color: #fff;
  }

  p {
    font-size: 35px;
    color: #0ef;
    font-weight: 600;
  }

  .sec2 p {
    color: #0f0;
  }

  .sec3 p {
    color: #ff0;
  }

  .sec4 p {
    color: #056964;
  }

  .sec5 .images {
    display: flex;
    gap: 40px;
  }

  .sec5 .images img {
    max-width: 350px;
  }

  .animate {
    opacity: 0;
    filter: blur(5px);
    transition: 0.5s;
  }

  section.show-animate .animate {
    opacity: 1;
    filter: blur(0px);
  }

  .sec2 .animate {
    transform: translateX(100%);
  }

  .sec2.show-animate .animate {
    transform: translateX(0);
  }

  .sec3 .animate {
    transform: scale(0.7);
  }

  .sec3.show-animate .animate {
    transform: scale(1);
  }

  .sec4 .animate {
    transform: rotate(30deg);
  }

  .sec4.show-animate .animate {
    transform: rotate(0deg);
  }

  .sec5 .animate {
    transform: translateX(100%) rotate(-90deg);
  }

  .sec5.show-animate .animate {
    transform: translateX(0) rotate(0deg);
  }

  p.animate {
    transition-delay: 0.2s;
  }

  .sec5 img:nth-child(2) {
    transition-delay: 0.2s;
  }
  .sec5 img:nth-child(3) {
    transition-delay: 0.6s;
  }
`;
export default AnimationOnScroll;
