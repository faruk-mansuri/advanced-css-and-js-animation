import { Button } from '@/components/ui/button';

const ThreeLayoutButton = () => {
  return (
    <Button
      className={`
       py-6
       text-lg
       transition-all
       duration-500
       relative
       bg-purple-500
       tracking-wider

       before:content-['Button']
       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-full
       before:bg-green-500
       before:grid
       before:place-items-center
       before:transform
       before:rounded-md
       before:transition-all
       before:duration-500
       before:-rotate-x-[270deg]
       before:origin-bottom

       after:content-['Button']
       after:absolute
       after:top-0
       after:left-0
       after:w-full
       after:h-full
       after:bg-blue-500
       after:grid
       after:place-items-center
       after:transform
       after:rounded-md
       after:transition-all
       after:duration-1000
       after:rotate-x-[270deg]
       after:origin-top

       hover:before:rotate-x-0
       hover:after:rotate-x-0

   `}
    >
      Button
    </Button>
  );
  return (
    <Button
      className={`
       py-6
       text-lg
       transition-all
       duration-500
       relative
       bg-purple-500
       tracking-wider

       before:content-['Button']
       before:absolute
       before:top-0
       before:left-0
       before:w-full
       before:h-full
       before:bg-green-500
       before:grid
       before:place-items-center
       before:transition-all
       before:duration-500
       before:rotate-x-[270deg]
       before:origin-top

       after:content-['Button']
       after:absolute
       after:top-0
       after:left-0
       after:w-full
       after:h-full
       after:bg-blue-500
       after:grid
       after:place-items-center
       after:transition-all
       after:duration-1000
       after:rotate-x-[270deg]
       after:origin-top

       hover:before:rotate-x-0
       hover:after:rotate-x-0

   `}
    >
      Button
    </Button>
  );
};

export default ThreeLayoutButton;
