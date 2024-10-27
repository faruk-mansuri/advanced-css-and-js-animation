import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';

const BackgroundColorMenu = () => {
  return (
    <div className='py-10 grid place-items-center overflow-hidden'>
      <ul
        className={`
        relative
        flex
        flex-col
        gap-4

        [&>button]:hover:text-black/30

        hover:[&>button]:text-black
        hover:[&>button]:bg-white

        z-[1]
        `}
      >
        {links.map((label, index) => {
          return (
            <Button
              key={index}
              variant='ghost'
              data-text={label}
              className={`
                text-lg
                uppercase
                py-6
                rounded-none
                hover:bg-transparent
                transition-all
                duration-500

                before:absolute
                before:top-[50%]
                before:left-[50%]
                before:-translate-x-[50%]
                before:-translate-y-[50%]
                before:w-screen
                before:h-screen
                before:text-black/30
                before:flex
                before:justify-center
                before:items-center
                before:text-7xl
                before:font-extrabold
                before:uppercase
                before:tracking-[500px]
                before:opacity-0
                before:transition-all
                before:duration-500
                before:-z-[1]
                before:pointer-events-none
                

                hover:before:content-[attr(data-text)]
                hover:before:opacity-100
                hover:before:tracking-[10px]

                ${index === 0 && 'before:bg-blue-500'}
                ${index === 1 && 'before:bg-red-500'}
                ${index === 2 && 'before:bg-purple-500'}
                ${index === 3 && 'before:bg-green-500'}
                ${index === 4 && 'before:bg-pink-500'}
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

export default BackgroundColorMenu;
