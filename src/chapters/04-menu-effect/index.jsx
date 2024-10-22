import React from 'react'
import GrowingBorderMenuOne from './01-GrowingBorderMenuOne'
import GrowingBorderMenuTwo from './02-GrowingBorderMenuTwo'
import SplittedBgMenu from './03-SplittedBgMenu'

const MenuEffectLayout = () => {
  return (
    <div className='w-full h-full bg-slate-200 px-3 py-10'>
      <h1 className='text-5xl text-purple-500 mb-4'>Menu </h1>

      <div className='grid gap-y-6'>
        {/* <GrowingBorderMenuOne />
        <GrowingBorderMenuTwo /> */}
        <SplittedBgMenu />
      </div>
    </div>
  )
}

export default MenuEffectLayout
