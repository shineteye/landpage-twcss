import React from 'react'
import navLogo from '../../assets/cyber-physical-system.png'

function Navbar() {
  return (
    <div>
      <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>

            {/* Logo */}
            <div className='text-red-600 pt-2'>
                <img src={navLogo} alt="Logo" width={50} height={50}/>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="here" className='hover:text-red-600'>Pricing</a>
                <a href="here" className='hover:text-red-600'>Product</a>
                <a href="here" className='hover:text-red-600'>About Us</a>
                <a href="here" className='hover:text-red-600'>Careers</a>
                <a href="here" className='hover:text-red-600'>Community</a>
            </div>
            <a href="here" className='p-3 px-6 pt-2 text-white text-lg bg-red-500 rounded-full '> Let's go</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
