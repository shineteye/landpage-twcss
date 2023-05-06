import React from 'react'

function TestimonialCard({ img, name, quote }) {
    return (
        <div className='flex flex-col items-center p-6 my-10 mb-4 space-y-6 rounded-lg bg-slate-200 md:w-1/3'>
            <img src={img} className='w-16 mb-2 rounded-full -mt-14 bg-slate-100' alt="1stimage" />
            <h5 className='text-lg font-bold'>
                {name}
            </h5>
            <p>
                {quote}
            </p>
        </div>
    )
}

export default TestimonialCard
