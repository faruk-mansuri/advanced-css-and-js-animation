// import TransitionLayout from './chapters/01-transition';
import ButtonLayout from './chapters/02-Button-Effect';
import ImageEffectLayout from './chapters/03-image-effect';
import MenuEffectLayout from './chapters/04-menu-effect';
import CardEffectLayout from './chapters/05-card-effect';
import CSSAnimationEffects from './chapters/08-css-animations-effects';
// import CSSTransformLayout from './chapters/06-css-transforms';
// import CSSAnimationAndKeyframes from './chapters/07-css-animation-and-keyframes';

const App = () => {
  return (
    <div className='py-8 min-h-screen w-full bg-[#1D1D1D]'>
      {/* <ButtonLayout />
      <ImageEffectLayout />
      <MenuEffectLayout />
      <CardEffectLayout />*/}
      {/* <CSSTransformLayout /> */}
      {/* <CSSAnimationAndKeyframes /> */}
      <CSSAnimationEffects />
    </div>
  );
};

export default App;
