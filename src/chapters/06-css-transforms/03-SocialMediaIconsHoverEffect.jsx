import React from 'react';
import { socialLinks } from '@/utils/socialLinks';

const SocialMediaIconsHoverEffect = () => {
  return (
    <div className='flex items-center justify-center gap-x-4'>
      {socialLinks.map(({ id, Icon }) => {
        return (
          <button
            asChild
            key={id}
            className={`
             relative
             size-16
             bg-white
             rounded-xl
             text-[#10ac84]
             grid
             place-items-center
             shadow-md
             hover:shadow-xl
           
             group

             before:absolute
             before:w-[140%]
             before:h-[140%]
             before:bg-[#10ac84]
             before:left-[-110%]
             before:top-[90%]
             before:rotate-45

             overflow-hidden
             
             hover:before:animate-social_links_animation
          `}
          >
            <Icon
              className={`
               text-2xl
               duration-300

               group-hover:scale-125
               group-hover:text-white
             `}
            />
          </button>
        );
      })}
    </div>
  );
};

export default SocialMediaIconsHoverEffect;
