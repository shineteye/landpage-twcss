import React from 'react'
import FeaturesAboveMd from './FeaturesAboveMd'

function Features() {
  return (
    <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:flex-row md:space-y-0'>
      {/* Left Text section */}
      <div className='flex flex-col items-center space-y-12 md:w-1/2 md:items-start'>
        <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
          What's different here?✨
        </h2>
        <p className='max-w-sm text-center text-darkGray-500 md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rerum deserunt quae quasi. Pariatur optio vitae odio, odit,
          laudantium ducimus culpa quia, quis sit architecto laborum
          sint soluta non at! Provident.
        </p>
      </div>
      {/* Numbered Lists Right */}
      <div className='flex flex-col space-y-8 md:w-1/2'>
        {/* List Item 1 */}
        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
          {/* Heading */}
          <div className='bg-red-300 rounded-l-full md:bg-transparent'>
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white bg-red-500 rounded-full md:py-1">
                01
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track Company Wide Progress
              </h3>
            </div>
          </div>
          {/* Displayed when the screen size is above 768px */}
          <FeaturesAboveMd />
        </div>
        {/* List Item 2 */}
        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
          {/* Heading */}
          <div className='bg-red-300 rounded-l-full md:bg-transparent'>
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white bg-red-500 rounded-full md:py-1">
                02
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Assign Juniors to Seniors Desk
              </h3>
            </div>
          </div>
          {/* Displayed when the screen size is above 768px */}
          <FeaturesAboveMd />
        </div>
        {/* List Item 3 */}
        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
          {/* Heading */}
          <div className='bg-red-300 rounded-l-full md:bg-transparent'>
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white bg-red-500 rounded-full md:py-1">
                03
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Report Web Vitals
              </h3>
            </div>
          </div>
          {/* Displayed when the screen size is above 768px */}
          <FeaturesAboveMd />
        </div>
      </div>
    </div>
  )
}

export default Features