import React from 'react';
import TextAnimation from './01-TextAnimation';
import ParallaxEffect from './02-ParallaxEffect';
import ExpandableCard from './03-ExpandableCard';
import ColorfulTextAnimation from './04-ColorfulTextAnimation';
import ClipPathAnimation from './05-ClipPathAnimation';
import AnimationOnScroll from './06-AnimationOnScroll';
import MovingBackgroundImageOnScroll from './07-MovingBackgroundImageOnScroll';
import AnimatedBanner from './08-AnimatedBanner';
import NightModeRoadAnimation from './09-NightModeRoadAnimation';
import CircularMenuToggleEffect from './10-CircularMenuToggleEffect';

const JavascriptAnimationEffect = () => {
  return (
    <div className='w-full h-full bg-slate-200 py-10'>
      <h1 className='text-5xl text-purple-700 font-bold mb-4 z-50'>
        Javascript Animation Effect
      </h1>

      <div>
        {/* <TextAnimation /> 
        <ParallaxEffect />
        <ExpandableCard />
        <ColorfulTextAnimation />
        <ClipPathAnimation />
        <AnimationOnScroll />
        <MovingBackgroundImageOnScroll />
        <AnimatedBanner />
        <NightModeRoadAnimation />*/}
        <CircularMenuToggleEffect />
      </div>
    </div>
  );
};

export default JavascriptAnimationEffect;
