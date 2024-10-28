import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';

const ColorFullLayeredMenu = () => {
  return (
    <div className='py-10 grid place-items-center bg-slate-900'>
      <ul
        className={`
        flex
        flex-col
        items-start
        gap-y-10
        `}
      >
        {links.map((label, index) => {
          return (
            <Button
              key={index}
              variant='ghost'
              data-text={label}
              className={`
                text-7xl
                hover:text-transparent
                uppercase
                py-6
                rounded-none
                hover:bg-transparent
                hover:text-white
                hover:[-webkit-text-stroke:1px_#222]
                transition-all
                duration-500
                font-extrabold
                text-transparent
                [-webkit-text-stroke:1px_#64748b]
                relative
                
                before:content-[attr(data-text)]
                before:absolute
                before:top-0
                before:left-0
                before:transition-all
                before:duration-500
                before:z-[-2]
                

                hover:before:text-[rgb(187,0,0)]
                hover:before:[-webkit-text-stroke:#222]
                hover:before:translate-x-[20px]
                hover:before:-translate-y-[20px]
                hover:before:z-[1]

                after:content-[attr(data-text)]
                after:absolute
                after:top-0
                after:left-0
                after:transition-all
                after:duration-700
                after:z-[-1]
                

                hover:after:text-[rgb(0,178,187)]
                hover:after:[-webkit-text-stroke:#222]
                hover:after:translate-x-[30px]
                hover:after:-translate-y-[30px]
                hover:after:z-[2]
                
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

export default ColorFullLayeredMenu;
