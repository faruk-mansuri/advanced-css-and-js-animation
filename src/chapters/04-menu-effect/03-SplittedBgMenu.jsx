import { navLinks } from '@/utils'
import React from 'react'

const SplittedBgMenu = () => {
  return (
    <ul className='p-0 m-0 flex justify-center flex-wrap gap-4'>
      {navLinks.map((label, index) => {
        return (
          <li key={index}>
            <a
              href='#'
              className={`
                text-gray-500
                text-lg
                uppercase
                py-4
                px-10
                block
                relative
                transition-all
                duration-500
                
              `}
            >
              <span />
              <span />
              <span />
              <span />
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SplittedBgMenu
