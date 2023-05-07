import React from 'react'

export default function MobileMenu({ menuRef }) {
    return (
        <div className='md:hidden' >
            <div ref={menuRef} className='flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white asbolute sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
                <a href="two">Pricing</a>
                <a href="two">Prduct</a>
                <a href="two">About Us</a>
                <a href="two">Careers</a>
                <a href="two">Community</a>
            </div>
        </div>
    )
}
