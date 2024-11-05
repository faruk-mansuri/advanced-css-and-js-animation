import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParallaxEffect = () => {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (textRef.current) textRef.current.style.marginTop = `${value * 2.5}px`;

      if (leafRef.current) {
        leafRef.current.style.top = `${value * -1.5}px`;
        leafRef.current.style.left = `${value * 1.5}px`;
      }

      if (hill5Ref.current) hill5Ref.current.style.left = `${value * 1.5}px`;
      if (hill4Ref.current) hill4Ref.current.style.left = `${value * -1.5}px`;
      if (hill1Ref.current) hill1Ref.current.style.top = `${value * 1}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Wrapper
      className={`
       grid
       place-items-center
       h-full
       bg-[#f9f9f9]
       min-h-screen
       relative

   `}
    >
      <header
        className={`
          absolute
          top-0
          w-full
          py-[30px]
          px-[100px]
          flex
          items-center
          gap-x-[270px]
          z-50
         `}
      >
        <h2
          className={`
            text-4xl
            text-[#539381]
            uppercase
            font-bold
           `}
        >
          logo
        </h2>
        <nav
          className={`
            flex
            gap-x-[20px]
           `}
        >
          {['home', 'about', 'services', 'contact'].map((label) => {
            return (
              <a
                href='#'
                key={label}
                className={`
                  text-[#359381]
                  py-[6px] px-[15px]
                  rounded-[20px]
                  duration-500

                  hover:bg-[#359381]
                  hover:text-white
               `}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </header>

      <section
        className={`
          parallax
          relative
          flex
          justify-center
          items-center
          h-screen
          w-full
          overflow-hidden
         `}
      >
        <img
          src='./src/assets/images/hill1.png'
          alt='hill 1'
          id='hill1'
          ref={hill1Ref}
        />
        <img src='./src/assets/images/hill2.png' alt='hill 2' id='hill2' />
        <img src='./src/assets/images/hill3.png' alt='hill 3' id='hill3' />
        <img
          src='./src/assets/images/hill4.png'
          alt='hill 4'
          id='hill4'
          ref={hill4Ref}
        />
        <img
          src='./src/assets/images/hill5.png'
          alt='hill 5'
          id='hill5'
          ref={hill5Ref}
        />
        <img src='./src/assets/images/tree.png' alt='tree' id='tree' />
        <img
          src='./src/assets/images/leaf.png'
          alt='leaf'
          id='leaf'
          ref={leafRef}
        />
        <img src='./src/assets/images/plant.png' alt='plant' id='plant' />

        <h2
          ref={textRef}
          className={`
            absolute
            text-5xl
            text-white
            font-bold
            uppercase
            [text-shadow:2px_2px_2px_4px_rgba(0,0,0,0.2)]
           `}
        >
          parallax website
        </h2>
      </section>

      <section
        className={`
          relative
          bg-[#003329]
          p-[100px]
         `}
      >
        <h2
          className={`
            text-3xl
            text-white
            mb-[10px]

           `}
        >
          Parallax Scrolling Website
        </h2>
        <p className='text-base text-white font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          incidunt nesciunt quibusdam, laboriosam enim commodi obcaecati iusto.
          Suscipit maxime illum delectus cupiditate in. Itaque sunt impedit
          reprehenderit veniam, doloribus hic cupiditate numquam. Commodi
          explicabo voluptates cum sunt optio. Recusandae error repellendus
          illum at. Eveniet, cupiditate! Ea cupiditate quas odio illo eveniet a
          fugit amet, est officiis saepe deserunt id nobis non nihil tempora
          exercitationem adipisci incidunt repellendus iste sit distinctio!
          Incidunt consectetur corrupti officia in aliquid enim laboriosam ex
          temporibus. Nesciunt dolor ad beatae deleniti rerum. Ullam id libero
          neque soluta cum? Optio fuga, maiores saepe at dolore facilis iure
          eaque laborum, numquam nostrum dolor autem, libero aliquid quisquam
          distinctio nisi? Eligendi obcaecati cumque enim quaerat, cupiditate
          quae laborum blanditiis ut tempore nulla quibusdam fugit ratione
          praesentium accusamus magni harum, illo maiores incidunt placeat
          doloremque vero voluptate, quia sunt? Quam, molestiae fugit. Ipsa
          atque, facilis eveniet modi voluptate aspernatur, eligendi libero,
          itaque quo ab unde voluptatum optio ratione asperiores delectus dolor
          quisquam voluptates accusamus excepturi voluptatibus at harum enim!
          Ullam ratione, nulla nemo voluptatem, dolore, dolorem voluptatum illo
          sapiente nesciunt ut dolor suscipit maxime distinctio esse nobis cum
          consectetur beatae. Quibusdam odio veritatis amet repellat, magnam
          doloremque illum placeat perspiciatis provident optio, fugit in neque
          esse. Minima accusantium voluptas sed cum repellat. Voluptatum nostrum
          expedita labore! Voluptas consectetur nihil provident repudiandae
          dolore, sapiente neque. Veritatis nulla at repellendus et eos ratione
          quos doloremque, fugiat minus omnis ipsa delectus dolore in. At
          obcaecati dolorum impedit natus, esse nihil, vel ipsam nisi tempore
          illum vero, maxime suscipit doloremque sunt laboriosam. Accusamus aut
          eos similique quibusdam nesciunt sunt architecto quaerat voluptas
          necessitatibus. Perferendis aliquam cumque error sed quia quis
          officiis impedit laboriosam! Consequatur, quae. Earum provident enim
          eius nam consequuntur veritatis. Voluptas blanditiis non aperiam omnis
          eligendi exercitationem cumque amet nemo voluptatibus voluptates.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem sapiente saepe qui totam vitae commodi, porro corporis
          nostrum est quasi quia perspiciatis beatae cupiditate omnis magni
          nihil, incidunt ratione iusto quae vero! Error porro eos voluptatem
          impedit iusto consequatur non? Totam, ratione sapiente! Inventore
          facilis, pariatur voluptas rerum molestiae corporis? Veritatis
          praesentium obcaecati, tempore labore, exercitationem omnis nam
          consequatur blanditiis delectus eaque ab eveniet esse minima officiis
          laudantium quis, ipsa enim nesciunt quidem suscipit quod corporis
          incidunt asperiores? Suscipit error vitae asperiores ipsam deleniti
          aliquid ipsa quae reprehenderit quos modi sunt, facilis esse
          consequatur fuga dolor temporibus cum sed incidunt dicta aperiam qui
          quis. Corrupti enim non voluptate iusto soluta molestiae excepturi,
          consectetur, eum et, mollitia animi dicta labore fugit maiores numquam
          fugiat ipsam itaque cupiditate autem explicabo facere ipsum nobis
          quidem quisquam! Nesciunt ullam quae alias eaque laborum consequuntur
          illo magni, dignissimos, voluptatum temporibus suscipit sapiente.
          Dolorem nostrum magni illum quibusdam perspiciatis aperiam accusamus
          rerum eaque similique necessitatibus eius repudiandae omnis laboriosam
          quod, ipsum facere libero fugit, hic dignissimos illo consequuntur.
          Placeat, deleniti tempora voluptatem excepturi sequi ratione natus
          veniam voluptate maxime expedita quod hic, quae quas vitae mollitia
          laudantium dolores! In rerum animi autem unde neque itaque quis.
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .parallax img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }
`;
export default ParallaxEffect;
