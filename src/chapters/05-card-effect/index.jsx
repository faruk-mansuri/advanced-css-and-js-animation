import React from 'react';
import BackgroundTransitionEffect from './01-BackgroundTransitionEffect';
import ExpandableCard from './02-ExpandableCard';
import CaptainMarvelCard from './03-CaptainMarvelCard';
import BorderCardEffect from './04-BorderCardEffect';
import DoubleFaceCard from './05-DoubleFaceCard';
import CreativeLayeredCard from './06-CreativeLayeredCard';
import ScalingCardEffect from './07-ScalingCardEffect';
import ProductCardEffect from './08-ProductCardEffect';
import NikeShoesCardEffect from './09-NikeShoesCardEffect';
import FlipCardEffect from './10-FlipCardEffect';

const CardEffectLayout = () => {
  return (
    <div className='w-full h-full bg-slate-200 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>Menu </h1>

      <div className='grid p-6 gap-y-12 gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
        <BackgroundTransitionEffect />
        <ExpandableCard />
        <CaptainMarvelCard />
        <BorderCardEffect />
        <DoubleFaceCard />
        <CreativeLayeredCard />
        <ScalingCardEffect />
        <ProductCardEffect />
        <NikeShoesCardEffect />
        <FlipCardEffect />
      </div>
    </div>
  );
};

export default CardEffectLayout;
