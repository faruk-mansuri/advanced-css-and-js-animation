import RotatingButton from './01-rotating-effect';
import SwipeButton from './02-SwipeButton';
import ButtonHoverEffect from './03-ButtonHoverEffect';
import ButtonStretching from './04-ButtonStretching';
import SwipeButtonPart2 from './05-SwipeButtonPart2';
import ButtonGlowingEffect from './06-ButtonGlowingEffect';
import TwoLayerSwapping from './07-TwoLayerSwapping';
import TextScaling from './08-TextScaling';
import CircularSwappingButton from './09-CircularSwappingButton';
import ThreeLayoutButton from './10-ThreeLayoutButton';
import LayersSwappingEffect from './11-LayersSwappingEffect';
import ThreeCircleBackgroundEffect from './12-ThreeCircleBackgroundEffect';
import ButtonHoverEffectPartTwo from './13-ButtonHoverEffect';
import SplitButton from './14-SplitButton';
import BorderSwappingButton from './15-BorderSwappingButton';
import GrowingButton from './16-GrowingButton';
import FirstLetterRotating from './17-FirstLetterRotating';
import BorderGrowing from './18-BorderGrowing';
import TwoCutButton from './19-TwoCutButton';
import TwoPartSkewed from './20-TwoPartSkewed';
import PulsingButton from './21-PulsingButton';
import DiagonalSwipeButton from './22-DiagonalSwipeButton';
import LinesButtonHover from './23.LinesButtonHover';
import GlassMorphismButton from './24-GlassMorphismButton';

const ButtonLayout = () => {
  return (
    <div className='w-full h-full bg-slate-800 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>Button Layout</h1>

      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <RotatingButton />
        <SwipeButton />
        <ButtonHoverEffect />
        <ButtonStretching />
        <SwipeButtonPart2 />
        <ButtonGlowingEffect />
        <TwoLayerSwapping />
        <TextScaling />
        <CircularSwappingButton />
        <ThreeLayoutButton />
        <LayersSwappingEffect />
        <ThreeCircleBackgroundEffect />
        <ButtonHoverEffectPartTwo />
        <SplitButton />
        <BorderSwappingButton />
        <GrowingButton />
        <FirstLetterRotating />
        <BorderGrowing />
        <TwoCutButton />
        <TwoPartSkewed />
        <PulsingButton />
        <DiagonalSwipeButton />
        <GlassMorphismButton />
        <LinesButtonHover />
      </div>
    </div>
  );
};

export default ButtonLayout;
