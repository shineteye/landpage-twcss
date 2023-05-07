import React, { useRef } from 'react';
import navLogo from '../../assets/cyber-physical-system.png';
import MobileMenu from './MobileMenu';

function Navbar() {

  const hamBtn = useRef();
  const menu = useRef();

  const handleHamBtnClick = () => {
    hamBtn.current.classList.toggle('open')
    menu.current.classList.toggle('flex')
    menu.current.classList.toggle('hidden')
  }

  return (
    <div>
      <nav className='container relative p-6 mx-auto' >
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='pt-2 text-red-600'>
            <img src={navLogo} alt="Logo" width={100} height={100} />
          </div>
          <div className="hidden space-x-6 md:flex md:text-xl">
            <a href="here" className='hover:text-red-600'>Pricing</a>
            <a href="here" className='hover:text-red-600'>Product</a>
            <a href="here" className='hover:text-red-600'>About Us</a>
            <a href="here" className='hover:text-red-600'>Careers</a>
            <a href="here" className='hover:text-red-600'>Community</a>
          </div>
          <a href="here"
            className='hidden p-3 px-6 pt-2 text-lg text-white bg-red-500 rounded-full md:block'>
            Let's go</a>

          {/* Hamburger Icon */}
          <button className='block hamburger md:hidden focus:outline-none' ref={hamBtn} onClick={handleHamBtnClick}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <MobileMenu menuRef={menu} />
      </nav>
    </div>
  )
}

export default Navbar