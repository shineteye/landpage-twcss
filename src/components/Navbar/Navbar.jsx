import React from 'react'
import navLogo from '../../assets/cyber-physical-system.png'

function Navbar() {
  return (
    <div>
      <nav className='container relative p-6 mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='pt-2 text-red-600'>
            <img src={navLogo} alt="Logo" width={100} height={100} />
          </div>
          <div className="hidden space-x-6 md:flex md:text-2xl">
            <a href="here" className='hover:text-red-600'>Pricing</a>
            <a href="here" className='hover:text-red-600'>Product</a>
            <a href="here" className='hover:text-red-600'>About Us</a>
            <a href="here" className='hover:text-red-600'>Careers</a>
            <a href="here" className='hover:text-red-600'>Community</a>
          </div>
          <a href="here"
            className='p-3 px-6 pt-2 text-lg text-white bg-red-500 rounded-full '>
            Let's go</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar