import ImageEffectOne from './01-ImageEffectOne';
import ImageEffectTwo from './02-ImageEffectTwo';
import ImageEffectThree from './03-ImageEffectThree';
import ImageEffectFour from './04-ImageEffectFour';
import ImageEffectFive from './05-ImageEffectFive';
import ImageEffectSix from './06-ImageEffectSix';
import ImageEffectSeven from './07-ImageEffectSeven';
import ImageEffectEight from './08-ImageEffectEight';
import ImageEffectNine from './09-ImageEffectNine';
import ImageEffectTen from './10-ImageEffectTen';
import ImageEffectEleven from './11-ImageEffectEleven';

const ImageEffect = () => {
  return (
    <div className='w-full h-full bg-slate-200 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>Image Layout</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        <ImageEffectOne />
        <ImageEffectTwo />
        <ImageEffectThree />
        <ImageEffectFour />
        <ImageEffectFive />
        <ImageEffectSix />
        <ImageEffectSeven />
        <ImageEffectEight />
        <ImageEffectNine />
        <ImageEffectTen />
        <ImageEffectEleven />
      </div>
    </div>
  );
};

export default ImageEffect;
