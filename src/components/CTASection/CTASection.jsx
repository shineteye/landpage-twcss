import React from 'react'

function CTASection() {
    return (
        <div className='mt-20 bg-red-500'>
            {/* Flex Container */}
            <div className='container flex flex-col items-center justify-between px-6 py-16 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
                {/* Heading */}
                <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                    Want no more suprises from the team?
                </h2>
                {/* Button */}
                <a href="here"
                    className='p-3 px-6 pt-2 text-lg font-bold text-red-500 bg-white rounded-full text-bg-red-500 hover:bg-gray-900'>
                    Let's go</a>
            </div>
        </div>
    )
}

export default CTASection