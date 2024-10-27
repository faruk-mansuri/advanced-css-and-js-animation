import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';

const TextFadingMenu = () => {
  return (
    <div className='py-10 grid place-items-center bg-black box-border'>
      <ul
        className={`
        relative
        flex
        flex-col
        gap-y-16
        `}
      >
        {links.map((label, index) => {
          return (
            <Button
              key={index}
              variant='ghost'
              data-text={label}
              className={`
                text-5xl
                text-white
                hover:text-white/20
                font-extrabold
                uppercase
                py-6
                rounded-none
                bg-transparent
                hover:bg-transparent
                relative
                transition-all
                duration-500

                delay-500
                hover:delay-0
                
                before:content-[attr(data-text)]
                before:absolute
                before:top-[50%]
                before:left-[50%]
                before:-translate-x-[50%]
                before:-translate-y-[50%]
                before:text-[#3bffa7]
                before:text-base
                before:tracking-[40px]
                before:[text-shadow:0_0_10px_#3bffe8,0_0_30px_#3bffe8,0_0_80px_#3bffe8]
                before:duration-500
                before:opacity-0
                before:delay-0

                hover:before:opacity-100
                hover:before:tracking-[6px]
                hover:before:delay-500
            `}
            >
              {label}
            </Button>
          );
        })}
      </ul>
    </div>
  );
};

export default TextFadingMenu;
