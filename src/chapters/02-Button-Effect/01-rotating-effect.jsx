import { Button } from '@/components/ui/button';
import React from 'react';

const Index = () => {
  return (
    <Button
      className={`
  py-6
  text-lg
  relative
  transition
  overflow-hidden

  before:absolute
  before:left-0
  before:top-0
  before:w-full
  before:h-full
  before:bg-yellow-500
  before:origin-top-right
  before:-rotate-90
  before:transition
  before:duration-500
  
  hover:before:rotate-0
`}
    >
      <span className='z-10'>Click me</span>
    </Button>
  );

  return (
    <Button
      className={`
 relative
 overflow-hidden
 before:absolute
 before:left-0
 before:top-0
 before:w-full
 before:h-full
 before:bg-yellow-500
 before:origin-bottom-left
 before:-rotate-90
 before:transition
 hover:before:rotate-0
`}
    >
      <span className='z-10'>Click me</span>
    </Button>
  );
};

export default Index;
