import React from 'react'
import RightImg from '../../assets/amazed-gedbadaa8b_1280.png'

export default function Header() {
  return (
    // Container
        <section className="container flex flex-col-reverse md:flex-row items-center  px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            {/* Left Item */}
            <div className='flex flex-col mb-32 space-y-12 md:w-1/2' >
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                    Beginning with greater things
                </h1>
                <p className="max-w-sm text-center text-gray-600 md:text-left">
                    All this for just some small text that isn't neccessary
                </p>
                {/* Button */}
                <div className='flex justify-center md:justify-start'>
                    <a href="here" className='p-3 px-6 pt-2 text-white text-lg bg-red-500 rounded-full md:block'>
                        Let's go
                    </a>
                </div>
            </div>
            {/* Right Item */}
            <div className=" md:w-1/2">
                <img src={RightImg} alt="" />
            </div>
        </section>
  )
}
