import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MovingBackgroundImageOnScroll = () => {
  const bgRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.backgroundPosition = window.scrollY + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Wrapper className='relative'>
      <div
        className={`
         fixed
         top-0
         left-0
         w-full
         h-full
         [background:url('./src/assets/images/bg5.png')]
        `}
        ref={bgRef}
      />

      <div
        className={`
         relative
         w-[80%]
         mx-auto
         bg-white
         py-4
         px-2
         shadow-xl
         space-y-[20px]
         z-10
        `}
      >
        <h2
          className={`
           text-2xl
          `}
        >
          Background moving on scroll
        </h2>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia
          assumenda sit aperiam harum velit soluta doloribus? Quos consequatur
          laborum quibusdam, officiis porro ut error quis ipsam cum? Eum fugiat
          harum fuga laudantium nisi natus ea neque possimus sit. Dolorum
          aspernatur doloremque cupiditate exercitationem vitae odio, incidunt,
          eius repudiandae nostrum illo quibusdam nulla facilis necessitatibus
          libero! Ex nam consequatur id sint quae delectus illum, suscipit
          mollitia maiores in soluta. Quibusdam totam voluptates cumque possimus
          rem quos optio corrupti, vitae reprehenderit perferendis repudiandae
          magni maxime natus, at ab neque! Ratione pariatur, sequi earum
          suscipit consectetur maiores sit expedita libero quasi rerum totam a
          harum illum cumque esse, laudantium inventore aut autem obcaecati
          dignissimos officia eos optio perspiciatis vel. Eius ipsum deserunt
          vero distinctio odio, voluptatem aliquam minima esse, sequi maxime
          nihil recusandae praesentium dolorum optio sunt nesciunt at voluptate
          eaque illum saepe voluptas beatae. Ut corporis dolorum doloribus
          recusandae velit porro quibusdam accusantium deleniti quae expedita
          quis dicta consectetur fugit, iure sapiente quo commodi, minima rem at
          illum aut itaque voluptates exercitationem molestiae! Doloribus,
          sapiente! Eos, architecto. Optio eum dolore in ipsam ut modi fuga
          adipisci iste at eveniet. Maiores dolorem, eveniet doloremque facilis
          facere earum inventore. Ut, blanditiis sunt reprehenderit fugiat
          laborum tenetur quibusdam aperiam libero id aliquam excepturi dolor,
          ab, dolorem facere vero expedita iste modi a? Recusandae sapiente quam
          dignissimos eaque facilis eius deleniti! Accusantium consectetur
          suscipit ea minima atque quis eos, soluta deleniti. Odio quaerat
          repudiandae ducimus aliquid pariatur praesentium quae asperiores
          fugiat inventore ullam? Earum officia iure placeat sint hic,
          voluptatibus dignissimos unde quae excepturi quis ex exercitationem,
          iusto ad beatae, dolore reiciendis fuga omnis ducimus quod
          reprehenderit nam! Accusantium laborum obcaecati tenetur rerum fugit a
          sint fuga nesciunt quod suscipit incidunt, distinctio tempora illum
          molestias deleniti soluta voluptatum dignissimos deserunt, doloribus
          consectetur tempore eum cum sequi facere? Tempora, voluptatum. Laborum
          ut voluptate neque vel accusantium enim rem molestiae suscipit tempora
          obcaecati ad quisquam facilis, voluptas at. Reiciendis veniam,
          asperiores error dolores velit voluptates esse aliquid ullam facere
          doloribus, quas odio explicabo animi! Earum in sequi tempore amet.
          Ipsam itaque porro reprehenderit illo at recusandae voluptatum nam
          ratione, nihil dignissimos, eligendi esse? Consectetur amet in modi.
          Vero officia expedita dolorum sunt quae nostrum ullam quisquam nobis
          fugiat facere tenetur accusamus ea impedit voluptas adipisci sint
          magni autem porro, deserunt nam optio laborum quo possimus! Eos,
          distinctio quaerat, beatae excepturi incidunt voluptatum, vitae sequi
          voluptas ipsam qui quo mollitia quam ullam sapiente? Expedita beatae
          sapiente quis in repudiandae laborum deleniti, repellat iure dolor
          eveniet porro cum laudantium facere odit fuga eos aliquam rerum iusto
          velit quod non atque. Qui molestias quo labore repellat cupiditate est
          quas nam ab aperiam molestiae illo esse possimus sit, iure quaerat
          vitae. Laudantium inventore consectetur quis maiores eius eum hic
          magni, perspiciatis adipisci accusamus ipsum, omnis nulla, distinctio
          illum mollitia nemo cum illo! Quisquam qui est, reiciendis possimus
          quasi cum voluptatibus quis id aliquid similique veniam voluptas
          dolore laboriosam, molestiae eius nisi dicta sit aspernatur,
          cupiditate corrupti? Fugiat sed non numquam ad minus officiis, sunt
          natus minima ab vero libero blanditiis accusantium obcaecati iste
          pariatur ut mollitia maiores perspiciatis ex repudiandae reiciendis?
          Voluptas dolores cumque ipsum eveniet voluptatum fugiat laudantium
          totam ipsam, hic veritatis delectus explicabo iure quas harum,
          deserunt porro illo, animi atque sed suscipit id facere deleniti
          reiciendis? Veritatis, facilis! Eaque excepturi tempora nihil maxime
          illum ratione voluptatibus omnis, veniam nobis! Hic rerum harum labore
          dolores magni fugit quo porro nihil minus sint officiis reprehenderit
          aliquam alias est placeat voluptates consectetur, repellat aperiam.
          Maiores quia distinctio cum laboriosam qui? Ab consequatur ea minus.
          Unde dolorem in dignissimos cumque? Aspernatur eaque sit quam ullam
          doloremque ipsam quas officia ipsum itaque quisquam. Corrupti esse
          harum officia nisi veniam, necessitatibus ratione ipsum accusamus
          magni cum similique voluptates itaque quasi dolore consequuntur et
          amet dignissimos non exercitationem excepturi quam! Doloribus iure,
          voluptas praesentium quos in harum rerum aliquid facere repellat,
          reiciendis totam laboriosam maiores quo eos vero laborum vel quisquam
          laudantium aut. Repellendus aspernatur rem explicabo, deserunt
          asperiores perspiciatis cupiditate laborum architecto, praesentium
          voluptatum consectetur nam incidunt rerum sunt. Rerum non laborum
          aliquam, dignissimos nesciunt doloremque eligendi hic sunt unde
          explicabo veritatis, sequi debitis, animi consequuntur atque dolorum?
          Quo nostrum et corporis saepe placeat animi inventore ipsa molestias
          nobis perspiciatis eius quisquam deleniti, voluptates esse distinctio
          quibusdam. Repudiandae provident corrupti officiis amet! Aliquid,
          similique maxime harum, possimus a sint in asperiores, esse quisquam
          velit quam numquam illo corporis perferendis? Quasi repudiandae
          laudantium quisquam tempore quas porro cupiditate numquam ipsa tempora
          soluta hic, eius libero dolores voluptate minima laborum enim vero
          blanditiis aliquam nisi, voluptatum voluptatibus ut aperiam. Ipsum
          veniam repellat nisi quo ab saepe vero tenetur quae! Nihil sapiente
          officiis expedita magni fugit facilis rerum enim et tempore
          necessitatibus quis saepe deleniti repellat accusamus minima itaque,
          voluptatibus veritatis ipsam sint. Odio omnis nihil debitis beatae
          vel, eius praesentium enim voluptate veniam quod consectetur.
          Praesentium id nisi nesciunt fugiat, ratione ex, neque nemo architecto
          ut earum eum a? Beatae veniam voluptatem facere dolores quis sint ipsa
          assumenda debitis voluptates libero delectus labore esse ex odit cum,
          soluta voluptatum laborum tenetur provident saepe culpa, quidem
          placeat? Placeat incidunt repellendus non velit nulla nostrum, sunt
          dicta recusandae atque autem earum adipisci obcaecati dolorum, a,
          sapiente neque molestiae excepturi porro ex libero voluptatem totam!
          Ipsum autem culpa maxime modi, fuga, molestias nobis iure
          exercitationem aspernatur fugiat quasi quos rem eaque sunt, porro
          beatae! Adipisci impedit dolore iusto fugiat, vero obcaecati quod
          expedita? Qui, repudiandae nam quas sequi unde saepe quibusdam ducimus
          laborum officia exercitationem est veniam quaerat amet tempora
          deserunt rem? Non, debitis dicta! Culpa necessitatibus molestiae alias
          explicabo quo pariatur dicta tempora obcaecati saepe! Harum,
          blanditiis reprehenderit! Ratione excepturi assumenda suscipit animi
          asperiores repudiandae similique amet dolor fugit laudantium dolorem
          eos, necessitatibus aut fuga eveniet praesentium voluptatum cumque
          modi id natus officia, veritatis et minus. Delectus ipsum beatae
          quisquam velit quibusdam accusantium! Quidem molestiae maiores eum
          libero repellendus nam quisquam, neque nesciunt nobis ducimus quo hic,
          autem vitae alias temporibus ipsa? Error, doloremque. In rem
          distinctio labore, illo quas pariatur voluptate ullam earum itaque at
          molestias possimus dolor perspiciatis nobis quis reiciendis ab,
          veritatis dignissimos amet natus quod, quia atque? Laborum amet neque
          dignissimos aliquid dolorum a quisquam nihil nesciunt ipsum enim
          doloremque iure perspiciatis, eveniet unde nam eius mollitia quidem
          commodi dolorem pariatur sapiente odio molestias, ipsam voluptatum.
          Quo necessitatibus natus ea accusantium quia. Veritatis quos ab
          aperiam optio consequatur voluptatem sint, necessitatibus cumque
          laborum error beatae repudiandae, tempora eaque minima excepturi eius
          provident! Deleniti, veritatis cum! Placeat nisi sapiente eius, nemo
          quibusdam quam nulla nihil veniam nostrum consectetur. Nulla ipsa illo
          veritatis consequuntur totam tenetur ratione, fuga facilis veniam
          doloremque quos, hic exercitationem quas sunt soluta adipisci
          aspernatur quasi vero numquam dicta odit! Quod totam eius dolore
          minima voluptatem ipsa at commodi voluptatibus numquam earum
          reiciendis impedit, distinctio nulla necessitatibus aperiam, iusto
          aliquid doloremque vero dicta dolores quas tenetur laboriosam nam est.
          Tempora deserunt nobis numquam consequuntur aperiam delectus quos ea
          soluta libero tempore esse sunt maiores voluptates quis quidem,
          ratione nisi! Quis tempore praesentium minima excepturi neque pariatur
          aut magnam optio eos eveniet libero reiciendis delectus illo
          consequatur quisquam temporibus alias exercitationem sapiente,
          dignissimos numquam repellendus aspernatur nemo aperiam laborum!
          Quidem voluptatum recusandae voluptas, quas eos delectus ipsa suscipit
          aliquid consequuntur corrupti aperiam ullam ab. Deserunt aliquam unde
          suscipit beatae porro perferendis modi dignissimos mollitia qui dicta
          debitis aspernatur provident dolorem tenetur harum, dolores voluptatem
          voluptas blanditiis repellendus repudiandae tempora distinctio enim!
          Porro obcaecati odio voluptatum consequuntur? Cupiditate repellat
          mollitia quis omnis non aut tempora, quaerat aliquam at officiis eius
          fugiat quod dolor quisquam blanditiis aliquid! Mollitia ipsa vitae
          aspernatur blanditiis maxime a sunt ipsam amet. Ullam iusto, repellat
          suscipit, unde alias porro ab debitis nostrum sapiente perferendis
          nesciunt architecto aut consectetur eos commodi expedita et magni
          nulla voluptates at voluptatum adipisci asperiores. Esse officiis
          voluptates vero! At, deleniti repellat expedita amet dolorum ad cum
          molestiae pariatur officiis optio. Deleniti, rerum id autem explicabo
          tenetur quia asperiores doloribus, amet sequi voluptas unde nulla
          voluptate laudantium ipsam! Reprehenderit omnis vitae tempora corrupti
          at laudantium iusto veritatis quia ducimus ullam? Necessitatibus
          maiores, rem voluptatibus porro iure deserunt eligendi reiciendis
          magni eveniet facere optio praesentium commodi suscipit. Et
          distinctio, odit rem magnam labore illum aliquam error at fugiat.
          Soluta odio tempora reiciendis, assumenda fuga, quas aperiam ut in
          doloremque nobis eum voluptatem eos error beatae, quos provident
          dignissimos. Labore voluptate repellat voluptatem vero maiores,
          recusandae ipsa, esse nobis autem voluptatibus porro vitae corporis
          optio ipsum dolorum? Nihil vero ea maiores sequi vitae. Odio molestias
          dicta odit eveniet debitis rem neque repellendus impedit corrupti
          voluptatum at libero, consectetur obcaecati, quia aspernatur dolores
          voluptas! Numquam facere provident aut dignissimos veritatis placeat
          omnis quam delectus similique officiis? Beatae dolorem nam, molestias,
          consequuntur saepe odio ipsam suscipit quod animi ullam natus qui
          vitae, accusantium cum fugiat consequatur accusamus? Perferendis
          rerum, culpa repellat aliquam quam, aspernatur nihil quaerat
          doloremque inventore voluptatibus nemo natus libero. Necessitatibus
          recusandae amet aliquid officia expedita atque consequuntur architecto
          consequatur iure corporis iste tenetur, itaque labore, perspiciatis,
          iusto pariatur velit! Recusandae, vitae consequuntur cumque
          doloremque, voluptatibus, omnis maiores in fuga adipisci quos
          aspernatur harum id quam. Quis saepe harum molestias officia veniam
          sapiente earum neque. Quam, recusandae odio aspernatur aliquid
          adipisci excepturi, saepe voluptatum, exercitationem temporibus a at
          minima magnam quibusdam eius. Ea illo quasi odio. Molestiae cumque cum
          esse, iure iste ipsam vero sunt recusandae incidunt illo non est culpa
          modi provident laudantium quod, odit repellendus earum amet.
          Accusantium architecto sint nobis excepturi commodi consectetur sunt,
          officiis beatae quas cupiditate voluptates numquam facere quam
          aliquam, delectus iste harum nulla aperiam laudantium vel! Vitae,
          dolor. Ducimus impedit amet iure possimus quam itaque nam adipisci.
          Labore velit ipsa error odit similique quibusdam sed quod accusantium
          fugiat tempore aspernatur fuga quam dolorum at laborum sunt minima,
          quaerat placeat, illum ea! Nemo repellendus illum facere quia
          reiciendis accusantium eaque a exercitationem, corporis sunt quo quod
          aut tenetur atque ipsa vitae consequuntur saepe deleniti corrupti
          aspernatur. Cupiditate maxime voluptatibus reprehenderit suscipit
          optio numquam sed, alias distinctio nobis earum dignissimos ratione
          consequuntur quia amet impedit quas explicabo culpa officiis quaerat
          nulla id porro, modi cum fugit? Voluptate at quibusdam odit minus,
          accusantium dolore, modi possimus quia architecto laudantium culpa
          harum error placeat temporibus quasi ipsam molestias doloremque quas.
          Omnis maiores vel optio, nemo totam voluptatem minus numquam
          laudantium quo ipsum ea magni expedita veniam officia? Quis illo
          dignissimos earum omnis corporis sunt totam odit doloribus et, sequi
          at accusantium quod suscipit quidem asperiores incidunt nobis magnam!
          Dignissimos fuga quas laborum error autem omnis aspernatur minus
          dolores minima. Ut vero nulla, odit non incidunt repudiandae aliquam
          sint nam doloremque vitae voluptate nisi architecto beatae mollitia
          porro? Nam quam recusandae quibusdam, obcaecati molestiae ratione
          laboriosam ab. Debitis ducimus non, dolorem, quaerat minima quas eum
          explicabo aliquam vel fuga quisquam quis in quidem necessitatibus
          excepturi eligendi.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default MovingBackgroundImageOnScroll;
