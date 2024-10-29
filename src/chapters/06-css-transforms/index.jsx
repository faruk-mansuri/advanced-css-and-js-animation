import React from 'react';
import SmokyEffect from './01-SmokyEffect';
import FillTextEffect from './02-FillTextEffect';
import SocialMediaIconsHoverEffect from './03-SocialMediaIconsHoverEffect';
import RotatedTextBorderEffect from './04-RotatedTextBorderEffect';
import CloseTextAnimation from './05-CloseTextAnimation';
import BlurAndFocusEffect from './06-BlurAndFocusEffect';
import TextFocusAndHoverEffect from './07-TextFocusAndHoverEffect';
import StackedCardHover from './08-StackedCardHover';
import ParallaxScrollingEffect from './09-ParallaxScrollingEffect';

const CSSTransformLayout = () => {
  return (
    <div className='w-full h-full bg-slate-200 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>CSS Transforms</h1>

      <div className='grid p-6 gap-y-12 gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
        <SmokyEffect />
        <FillTextEffect />
        <SocialMediaIconsHoverEffect />
        <RotatedTextBorderEffect />
        <CloseTextAnimation />
        <BlurAndFocusEffect />
        <TextFocusAndHoverEffect />
        {/* <StackedCardHover />
        <ParallaxScrollingEffect /> */}
      </div>
    </div>
  );
};

export default CSSTransformLayout;
