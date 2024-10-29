import { Button } from '@/components/ui/button';
import React from 'react';

const ParallaxScrollingEffect = () => {
  return (
    <div>
      <section
        className={`
           relative
           w-full
           h-screen
           grid
           place-items-center
           py-12
           text-center
          `}
      >
        <div>
          <h2
            className={`
              [font-size:24vw]
              uppercase
              font-bold
              [background-image:url('./src/assets/images/img1.jpg')]
              [background-size:cover]
              [background-attachment:fixed]
              bg-clip-text 
              text-transparent
              
            `}
          >
            giza
          </h2>
          <p className='max-w-[800px] mx-auto py-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis consectetur molestiae fugit in impedit architecto, eum
            possimus nulla veritatis ad ipsam rerum nostrum asperiores velit
            provident eos cupiditate debitis repellendus qui. Molestiae
            reprehenderit harum, voluptas voluptatum animi sint neque tempore
            nobis odit aperiam itaque fugiat cumque sit atque ducimus sapiente
            eos vero minus, accusantium officiis ut in nemo? Distinctio, at
            ducimus ea accusamus corporis dolorum mollitia unde, cum minus
            tempora praesentium aspernatur officia quod amet! Fuga ipsam hic ab
            ex distinctio nostrum corrupti dignissimos, placeat exercitationem
            repellendus perferendis, sint facere! Corrupti suscipit nostrum
            accusantium, laborum praesentium odio iste quas!
          </p>

          <Button
            className='capitalize border-2 border-black'
            variant='outline'
          >
            read more
          </Button>
        </div>
      </section>

      <section
        className={`
           relative
           w-full
           h-screen
           grid
           place-items-center
           py-12
           text-center
          `}
      >
        <div>
          <h2
            className={`
              [font-size:24vw]
              uppercase
              font-bold
              [background-image:url('./src/assets/images/img2.jpg')]
              [background-size:cover]
              [background-attachment:fixed]
              bg-clip-text 
              text-transparent
             `}
          >
            paris
          </h2>

          <p className='max-w-[800px] mx-auto py-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis consectetur molestiae fugit in impedit architecto, eum
            possimus nulla veritatis ad ipsam rerum nostrum asperiores velit
            provident eos cupiditate debitis repellendus qui. Molestiae
            reprehenderit harum, voluptas voluptatum animi sint neque tempore
            nobis odit aperiam itaque fugiat cumque sit atque ducimus sapiente
            eos vero minus, accusantium officiis ut in nemo? Distinctio, at
            ducimus ea accusamus corporis dolorum mollitia unde, cum minus
            tempora praesentium aspernatur officia quod amet! Fuga ipsam hic ab
            ex distinctio nostrum corrupti dignissimos, placeat exercitationem
            repellendus perferendis, sint facere! Corrupti suscipit nostrum
            accusantium, laborum praesentium odio iste quas!
          </p>

          <Button
            className='capitalize border-2 border-black'
            variant='outline'
          >
            read more
          </Button>
        </div>
      </section>
      <section
        className={`
           relative
           w-full
           h-screen
           grid
           place-items-center
           py-12
           text-center
          `}
      >
        <div>
          <h2
            className={`
              [font-size:24vw]
              uppercase
              font-bold
              [background-image:url('./src/assets/images/img3.jpg')]
              [background-size:cover]
              [background-attachment:fixed]
              bg-clip-text 
              text-transparent
             `}
          >
            dubai
          </h2>
          <p className='max-w-[800px] mx-auto py-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis consectetur molestiae fugit in impedit architecto, eum
            possimus nulla veritatis ad ipsam rerum nostrum asperiores velit
            provident eos cupiditate debitis repellendus qui. Molestiae
            reprehenderit harum, voluptas voluptatum animi sint neque tempore
            nobis odit aperiam itaque fugiat cumque sit atque ducimus sapiente
            eos vero minus, accusantium officiis ut in nemo? Distinctio, at
            ducimus ea accusamus corporis dolorum mollitia unde, cum minus
            tempora praesentium aspernatur officia quod amet! Fuga ipsam hic ab
            ex distinctio nostrum corrupti dignissimos, placeat exercitationem
            repellendus perferendis, sint facere! Corrupti suscipit nostrum
            accusantium, laborum praesentium odio iste quas!
          </p>

          <Button
            className='capitalize border-2 border-black'
            variant='outline'
          >
            read more
          </Button>
        </div>
      </section>

      <section
        className={`
           relative
           w-full
           h-screen
           grid
           place-items-center
           py-12
           text-center
          `}
      >
        <div>
          <h2
            className={`
              [font-size:24vw]
              uppercase
              font-bold
              [background-image:url('./src/assets/images/img4.jpg')]
              [background-size:cover]
              [background-attachment:fixed]
              bg-clip-text 
              text-transparent

              
             `}
          >
            london
          </h2>
          <p className='max-w-[800px] mx-auto py-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis consectetur molestiae fugit in impedit architecto, eum
            possimus nulla veritatis ad ipsam rerum nostrum asperiores velit
            provident eos cupiditate debitis repellendus qui. Molestiae
            reprehenderit harum, voluptas voluptatum animi sint neque tempore
            nobis odit aperiam itaque fugiat cumque sit atque ducimus sapiente
            eos vero minus, accusantium officiis ut in nemo? Distinctio, at
            ducimus ea accusamus corporis dolorum mollitia unde, cum minus
            tempora praesentium aspernatur officia quod amet! Fuga ipsam hic ab
            ex distinctio nostrum corrupti dignissimos, placeat exercitationem
            repellendus perferendis, sint facere! Corrupti suscipit nostrum
            accusantium, laborum praesentium odio iste quas!
          </p>

          <Button
            className='capitalize border-2 border-black'
            variant='outline'
          >
            read more
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ParallaxScrollingEffect;
