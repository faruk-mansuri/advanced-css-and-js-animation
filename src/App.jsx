// import TransitionLayout from './chapters/01-transition';
import ButtonLayout from './chapters/02-Button-Effect';
import ImageEffectLayout from './chapters/03-image-effect';
import MenuEffectLayout from './chapters/04-menu-effect';

const App = () => {
  return (
    <div className='p-8 min-h-screen w-full bg-[#1D1D1D]'>
      <ButtonLayout />
      <ImageEffectLayout />
      <MenuEffectLayout />
    </div>
  );
};

export default App;
