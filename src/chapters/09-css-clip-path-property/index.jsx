import React from 'react';
import ClipPathBasics from './01-ClipPathBasics';
import SplitLoadingEffect from './02-SplitLoadingEffect';
import WavyEffect from './03-WavyEffect';
import ImageHoverEffect from './04-ImageHoverEffect';
import PopUpEffect from './05-PopUpEffect';
import BlackToWhite from './06-BlackToWhite';
import ImageToCircleHover from './07-ImageToCircleHover';
import ImageHoverEffectTwo from './08-ImageHoverEffectTwo';
import MenuSplitEffect from './09-MenuSplitEffect';
import ButtonHoverEffect from './10-ButtonHoverEffect';
import TextAnimation from './11-TextAnimation';

const ClipPathLayout = () => {
  return (
    <div className='w-full h-full bg-slate-200 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>Clip Path Property</h1>

      <div className=''>
        <ClipPathBasics />
        <SplitLoadingEffect />
        <WavyEffect />
        <ImageHoverEffect />
        <PopUpEffect />
        <BlackToWhite />
        <ImageToCircleHover />
        <ImageHoverEffectTwo />
        <MenuSplitEffect />
        <ButtonHoverEffect />
        <TextAnimation />
      </div>
    </div>
  );
};

export default ClipPathLayout;
