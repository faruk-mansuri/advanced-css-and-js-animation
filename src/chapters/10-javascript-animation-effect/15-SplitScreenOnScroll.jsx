import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SplitScreenOnScroll = () => {
  const side1 = useRef();
  const side2 = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (side1.current) {
        side1.current.style.left = `-${window.scrollY}px`;
      }
      if (side2.current) {
        side2.current.style.left = `${window.scrollY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Wrapper
      className={`
       h-[200vh]

     `}
    >
      <section
        className={`
         fixed
         top-0
         left-0
         w-full
         h-full
         z-10
         pointer-events-none
        `}
      >
        <div ref={side1} className='side side1'></div>
        <div ref={side2} className='side side2'></div>
      </section>

      <div
        className={`
         bg-slate-950
         p-[100px]
         pt-[150vh]
         text-white
         space-y-4
         text-center
        `}
      >
        <h2 className='text-5xl text-white'>split screen on page scroll</h2>
        <p className='text-base'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus
          obcaecati a. Dolores totam, ratione inventore corrupti quo sequi at
          vitae nemo in deleniti voluptatum beatae sunt minima velit. Aspernatur
          suscipit expedita qui molestias maiores libero porro soluta corporis
          sed natus aliquid odio quos doloribus, rem deserunt nesciunt non alias
          nostrum facere culpa, accusantium ad. Nam pariatur temporibus ut
          exercitationem quod accusantium quam! Corrupti ullam voluptatibus
          praesentium quia, consectetur vitae rerum illo ipsam molestias error
          numquam delectus magni. Sint, quaerat earum recusandae impedit
          veritatis harum id ut, consectetur explicabo repellendus maxime?
          Error, voluptas tempore corporis esse odio dolorum cum. Officia hic
          dolorem ipsum, ab molestiae pariatur, ipsam nemo earum quod optio
          similique, aspernatur voluptates! Minus velit sequi numquam quia nisi
          praesentium perspiciatis culpa illum reprehenderit. Iste assumenda
          totam deleniti reprehenderit pariatur, debitis vitae animi, quos eius
          necessitatibus non nisi doloribus ad adipisci, minus eaque maxime
          illum corrupti enim laboriosam nulla repellat placeat? Molestiae,
          rerum voluptatem ratione laborum distinctio necessitatibus ipsum
          quasi. Harum quas deserunt, aspernatur molestiae nostrum, quis nihil
          sed delectus possimus, vel magni odit velit voluptas corporis.
          Aspernatur accusantium labore, molestiae ut laboriosam eum aperiam
          obcaecati modi illum ratione est, perspiciatis impedit, totam at
          laborum. Nesciunt reprehenderit optio, amet accusamus praesentium
          autem natus molestias porro magni ipsa repellendus minus officia
          perferendis, accusantium qui vitae rem, ipsam odio facilis! Dolores
          esse voluptatem error officia eveniet accusamus voluptas adipisci
          numquam impedit ipsum et porro neque vero fugit dolore asperiores
          sapiente sed modi molestias a, ullam nihil! Maxime labore nam natus
          aperiam quo, accusamus laborum quam officia! Inventore soluta ea illo.
          Labore expedita similique exercitationem blanditiis hic ipsa est harum
          enim error, minima culpa iure incidunt. Veritatis dolorum tempora
          nesciunt impedit non est, voluptas modi eaque? Excepturi tenetur iste,
          eius eveniet eos maiores obcaecati veniam facilis enim neque at sunt
          cum optio!
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./src/assets/images/img4.jpg');
    background-size: cover;
  }
  .side1 {
    clip-path: polygon(
      0% 0%,
      64% 0%,
      40% 17%,
      63% 29%,
      38% 42%,
      62% 54%,
      35% 64%,
      58% 76%,
      33% 86%,
      57% 100%,
      0% 99%
    );
  }
  .side2 {
    clip-path: polygon(
      100% 0,
      64% 0%,
      40% 17%,
      63% 29%,
      38% 42%,
      62% 54%,
      35% 64%,
      58% 76%,
      33% 86%,
      57% 100%,
      100% 100%
    );
  }
`;
export default SplitScreenOnScroll;
