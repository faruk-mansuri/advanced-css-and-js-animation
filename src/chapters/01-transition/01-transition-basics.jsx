import { Button } from '@/components/ui/button';
import React from 'react';

// some css properties are not animatable like bg-color, display, border-style, font-family

// animation properties are those that can be express by numbers like, w, h, opacity or by color

const Index = () => {
  return (
    <div>
      <h1 className='text-7xl text-purple-500 font-sans'>Transition</h1>
      <Button className={`hover:bg-red-500 transition`}>Click me</Button>
    </div>
  );
};

export default Index;
