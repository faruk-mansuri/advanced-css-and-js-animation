import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';

const CursorMenuAnimation = () => {
  return (
    <div className='py-10 grid place-items-center bg-slate-800 box-border'>
      <ul
        className={`
        relative
        flex
        flex-col
        gap-y-16
        items-start
        `}
      >
        {links.map((label, index) => {
          return (
            <button
              key={index}
              variant='ghost'
              data-text={`\u00A0${label}\u00A0`}
              className={`
                text-[5rem]
                leading-[5rem]
                uppercase
                tracking-widest
                relative
                font-extrabold
                
                text-transparent
                [-webkit-text-stroke:1px_#64748b]

                before:content-[attr(data-text)]
                before:absolute
                before:text-[#00ade1]
                before:border-r-8
                before:border-r-[#00ade1]
                before:[-webkit-text-stroke:1px_#00ade1]
                before:w-0
                before:overflow-hidden
                before:duration-1000
                
                hover:before:w-full
                
                
            `}
            >
              <span>&nbsp;{label}&nbsp;</span>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default CursorMenuAnimation;
