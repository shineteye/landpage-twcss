import React from 'react'
import RightImg from '../../assets/amazed-gedbadaa8b_1280.png'

export default function Header() {
    return (
        // Container
        <section className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0 lg:items-center">
            {/* Left Item */}
            <div className='flex flex-col items-center mb-32 space-y-12 md:items-start md:w-1/2 ' >
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                    Suprised? <br></br>Beginning with greater and better things
                </h1>
                <p className="max-w-sm text-gray-600 md:text-left">
                    All this for just some small text that isn't neccessary
                </p>
                {/* Button */}
                <div className='flex justify-center md:justify-start'>
                    <a href="here" className='p-3 px-6 pt-2 text-lg text-white bg-red-500 rounded-full md:block'>
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