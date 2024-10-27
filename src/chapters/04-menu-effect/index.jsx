import React from 'react';
import GrowingBorderMenuOne from './01-GrowingBorderMenuOne';
import GrowingBorderMenuTwo from './02-GrowingBorderMenuTwo';
import SplittedBgMenu from './03-SplittedBgMenu';
import MovingButtonBorder from './04-MovingButtonBorder';
import BlurryMenuEffect from './05-BlurryMenuEffect';
import MenuEffect from './06-MenuEffect';
import BorderAndBackgroundEffect from './07-BorderAndBackgroundEffect';
import BorderSniperMenu from './08-BorderSniperMenu';
import BorderRotateMenu from './09-BorderRotateMenu';
import ColorFullLayeredMenu from './10-ColorFullLayeredMenu';
import BackgroundColorMenu from './11-BackgroundColorMenu';
import CursorMenuAnimation from './12-CursorMenuAnimation';
import TextFadingMenu from './13-TextFadingMenu';

const MenuEffectLayout = () => {
  return (
    <div className='w-full h-full bg-slate-200 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>Menu </h1>

      <div className='grid gap-y-6'>
        <GrowingBorderMenuOne />
        <GrowingBorderMenuTwo />
        <SplittedBgMenu />
        <MovingButtonBorder />
        <BlurryMenuEffect />
        <MenuEffect />
        <BorderAndBackgroundEffect />
        <BorderSniperMenu />
        <BorderRotateMenu />
        <ColorFullLayeredMenu />
        <BackgroundColorMenu />
        <CursorMenuAnimation />
        <TextFadingMenu />
      </div>
    </div>
  );
};

export default MenuEffectLayout;
