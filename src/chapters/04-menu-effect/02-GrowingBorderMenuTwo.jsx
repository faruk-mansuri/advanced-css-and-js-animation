import React from 'react'
import { navLinks } from '@/utils'

const GrowingBorderMenuTwo = () => {
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
                
                hover:bg-red-500
                hover:text-white

                before:absolute
                before:bottom-3
                before:left-3
                before:w-5
                before:h-5
                before:border-b-4
                before:border-l-4
                before:border-red-500
                before:opacity-0
                before:transition-all
                before:duration-500

                hover:before:opacity-100
                hover:before:-bottom-3
                hover:before:-left-3
                

                after:absolute
                after:top-3
                after:right-3
                after:w-5
                after:h-5
                after:border-t-4
                after:border-r-4
                after:border-red-500
                after:opacity-0
                after:transition-all
                after:duration-500

                hover:after:opacity-100
                hover:after:-top-3
                hover:after:-right-3

              `}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default GrowingBorderMenuTwo
